import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
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
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      const chatId = process.env.TELEGRAM_CHAT_ID;

      if (!botToken || !chatId) {
        console.error("Telegram configuration missing");
        return res.status(500).json({ 
          message: "Telegram configuration not found. Please contact administrator." 
        });
      }

      const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: "Markdown"
        }),
      });

      if (!telegramResponse.ok) {
        const errorData = await telegramResponse.json();
        console.error("Telegram API error:", errorData);
        throw new Error("Failed to send message to Telegram");
      }

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

  const httpServer = createServer(app);
  return httpServer;
}
