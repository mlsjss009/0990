import path from "path";
import { generatePassword, addPassword } from "./auth";
import { addEligibleName } from "./eligible-names";
import { saveHeroImage, isSupportedImageExtension } from "./hero-image";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const ADD_NAME_BUTTON = "➕ Add Eligible Name";

// Chats that tapped the button and are expected to send a name next
const awaitingName = new Set<number>();

let offset = 0;

async function sendMessage(chatId: string | number, text: string, showKeyboard = true) {
  if (!TELEGRAM_BOT_TOKEN) {
    console.error("TELEGRAM_BOT_TOKEN not configured");
    return;
  }

  const keyboard = {
    keyboard: [
      [{ text: "🔐 Generate Password" }],
      [{ text: ADD_NAME_BUTTON }],
      [{ text: "ℹ️ Help" }]
    ],
    resize_keyboard: true,
    persistent: true
  };

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown",
        reply_markup: showKeyboard ? keyboard : undefined
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

async function downloadImageFile(fileId: string): Promise<{ buffer: Buffer; extension: string } | null> {
  try {
    const fileResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getFile?file_id=${fileId}`
    );
    const fileData = await fileResponse.json();

    if (!fileData.ok) {
      console.error("Telegram getFile error:", fileData);
      return null;
    }

    const filePath: string = fileData.result.file_path;
    const downloadResponse = await fetch(
      `https://api.telegram.org/file/bot${TELEGRAM_BOT_TOKEN}/${filePath}`
    );
    const buffer = Buffer.from(await downloadResponse.arrayBuffer());
    const extension = path.extname(filePath).toLowerCase();

    return { buffer, extension: isSupportedImageExtension(extension) ? extension : ".jpg" };
  } catch (error) {
    console.error("Error downloading Telegram image:", error);
    return null;
  }
}

async function handleCommand(message: any) {
  const chatId = message.chat.id;
  const text = message.text?.trim() || "";
  const username = message.from?.username || message.from?.first_name || "User";

  const photo = message.photo?.[message.photo.length - 1];
  const imageDocument = message.document?.mime_type?.startsWith("image/") ? message.document : undefined;
  const imageFileId: string | undefined = photo?.file_id || imageDocument?.file_id;

  if (imageFileId) {
    if (String(chatId) !== String(TELEGRAM_CHAT_ID)) {
      await sendMessage(chatId, "⛔ Only the main admin chat can change the website hero image.");
      return;
    }

    const image = await downloadImageFile(imageFileId);

    if (!image) {
      await sendMessage(chatId, "⚠️ I could not download that image. Please try again.");
      return;
    }

    saveHeroImage(image.buffer, image.extension);
    await sendMessage(
      chatId,
      "🖼️ *Hero image updated*\n\nThe website hero now rotates between this picture and the current default image."
    );
    return;
  }

  console.log(`[Telegram Bot] Received: "${text}" from ${username}`);

  if (text === "/start" || text === "ℹ️ Help") {
    awaitingName.delete(chatId);
    await sendMessage(
      chatId,
      `👋 *Welcome to Lotto Code Bot!*\n\nClick the button below to generate a new access password for the website.\n\n🔐 Generate Password - Create a new 8-character password\n➕ Add Eligible Name - Add a name that may pass the website eligibility check\n🖼️ Send a photo - Use it as the website hero image\nℹ️ Help - Show this message`
    );
  } else if (text === "/generate" || text === "🔐 Generate Password") {
    awaitingName.delete(chatId);
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
    awaitingName.delete(chatId);
    await sendMessage(
      chatId,
      `*How to Use:*\n\n🔐 Click the "Generate Password" button below to create a new password\n\n➕ Click the "Add Eligible Name" button, then send the full name to allow on the website eligibility check\n\n🖼️ Send a photo to use it as the website hero image\n\nThe password will be valid for 24 hours and can be used to access the website.`
    );
  } else if (text === ADD_NAME_BUTTON || text === "/addname") {
    awaitingName.add(chatId);
    await sendMessage(
      chatId,
      `📝 *Add An Eligible Name*\n\nSend me the full name you want to allow on the website eligibility check.\n\nOnly that exact name (uppercase/lowercase and extra spaces are ignored) will pass the check.`,
      false
    );
  } else if (awaitingName.has(chatId)) {
    awaitingName.delete(chatId);
    const { stored, added } = addEligibleName(text);

    await sendMessage(
      chatId,
      added
        ? `✅ *Name added*\n\n\`${stored}\` will now pass the website eligibility check.`
        : `ℹ️ *Already on the list*\n\n\`${stored}\` is already an eligible name.`
    );
  }
}

async function pollUpdates() {
  while (true) {
    try {
      const updates = await getUpdates();
      
      for (const update of updates) {
        if (update.message) {
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
