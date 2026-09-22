import fs from "fs";
import path from "path";

// Single source of truth for where persistent data lives.
// DATA_DIR points at the Render disk mount path. When it is not set, data goes
// to a local ./data folder, which is ephemeral on hosts without a disk.

const rawDataDir = process.env.DATA_DIR;
const DATA_DIR: string = rawDataDir ?? path.join(process.cwd(), "data");

try {
  fs.mkdirSync(DATA_DIR, { recursive: true });
} catch (error) {
  throw new Error(
    `DATA_DIR (${DATA_DIR}) is not a writable directory: ${(error as Error).message}. ` +
      "On Render, set DATA_DIR to your disk's mount path from the Disks tab."
  );
}

export default DATA_DIR;
