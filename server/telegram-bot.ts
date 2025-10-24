import { generatePassword, addPassword } from "./auth";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

let offset = 0;

async function sendMessage(chatId: string | number, text: string) {
  if (!TELEGRAM_BOT_TOKEN) {
    console.error("TELEGRAM_BOT_TOKEN not configured");
    return;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown"
      }),
    });

    const data = await response.json();
    if (!data.ok) {
      console.error("Telegram API error:", data);
    }
  } catch (error) {
    console.error("Error sending Telegram message:", error);
  }
}

async function getUpdates() {
  if (!TELEGRAM_BOT_TOKEN) {
    return [];
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates?offset=${offset}&timeout=30`
    );
    const data = await response.json();

    if (data.ok && data.result.length > 0) {
      offset = data.result[data.result.length - 1].update_id + 1;
      return data.result;
    }
  } catch (error) {
    console.error("Error getting updates:", error);
  }

  return [];
}

async function handleCommand(message: any) {
  const chatId = message.chat.id;
  const text = message.text?.trim() || "";
  const username = message.from?.username || message.from?.first_name || "User";

  console.log(`[Telegram Bot] Received: "${text}" from ${username}`);

  if (text === "/start") {
    await sendMessage(
      chatId,
      `👋 *Welcome to Lotto Code Bot!*\n\nAvailable commands:\n/generate - Generate new access password\n/help - Show this help message`
    );
  } else if (text === "/generate") {
    const password = generatePassword();
    addPassword(password);

    const message = `
🔐 *NEW ACCESS PASSWORD GENERATED*

*Password:* \`${password}\`
*Valid for:* 24 hours
*Generated at:* ${new Date().toISOString()}

Share this password with authorized users to access the website.
    `.trim();

    await sendMessage(chatId, message);
  } else if (text === "/help") {
    await sendMessage(
      chatId,
      `*Available Commands:*\n\n/generate - Generate new access password\n/help - Show this help message`
    );
  } else if (text.startsWith("/")) {
    await sendMessage(chatId, `Unknown command. Type /help to see available commands.`);
  }
}

async function pollUpdates() {
  while (true) {
    try {
      const updates = await getUpdates();
      
      for (const update of updates) {
        if (update.message && update.message.text) {
          await handleCommand(update.message);
        }
      }
    } catch (error) {
      console.error("[Telegram Bot] Error in polling:", error);
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
}

export function startTelegramBot() {
  if (!TELEGRAM_BOT_TOKEN) {
    console.warn("[Telegram Bot] TELEGRAM_BOT_TOKEN not configured - bot disabled");
    return;
  }

  console.log("[Telegram Bot] Starting bot...");
  pollUpdates().catch(error => {
    console.error("[Telegram Bot] Fatal error:", error);
  });
}
