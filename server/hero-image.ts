import fs from "fs";
import path from "path";
import DATA_DIR from "./data-dir";

// Hero image stored on the persistent disk, uploaded through the Telegram bot.

const HERO_IMAGE_NAME = "hero-image";

const CONTENT_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

export const HERO_IMAGE_EXTENSIONS = Object.keys(CONTENT_TYPES);

export function findHeroImagePath(): string | null {
  const name = fs
    .readdirSync(DATA_DIR)
    .find((file) => new RegExp(`^${HERO_IMAGE_NAME}\\.(${HERO_IMAGE_EXTENSIONS.map((ext) => ext.slice(1)).join("|")})$`, "i").test(file));

  return name ? path.join(DATA_DIR, name) : null;
}

export function heroImageContentType(filePath: string): string {
  return CONTENT_TYPES[path.extname(filePath).toLowerCase()] ?? "application/octet-stream";
}

export function isSupportedImageExtension(extension: string): boolean {
  return HERO_IMAGE_EXTENSIONS.includes(extension.toLowerCase());
}

export function saveHeroImage(buffer: Buffer, extension: string): void {
  for (const file of fs.readdirSync(DATA_DIR)) {
    if (file.toLowerCase().startsWith(`${HERO_IMAGE_NAME}.`)) {
      fs.unlinkSync(path.join(DATA_DIR, file));
    }
  }

  const filePath = path.join(DATA_DIR, `${HERO_IMAGE_NAME}${extension.toLowerCase()}`);
  const tempFile = `${filePath}.tmp`;
  fs.writeFileSync(tempFile, buffer);
  fs.renameSync(tempFile, filePath);
}
