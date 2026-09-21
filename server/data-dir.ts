import fs from "fs";

// Single source of truth for the persistent disk location (Render disk mount path).

const rawDataDir = process.env.DATA_DIR;

if (!rawDataDir) {
  throw new Error(
    "DATA_DIR is not set. Point it at the persistent disk mount path (for example /data on Render)."
  );
}

const DATA_DIR: string = rawDataDir;

fs.mkdirSync(DATA_DIR, { recursive: true });

export default DATA_DIR;
