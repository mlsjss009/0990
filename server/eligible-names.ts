import fs from "fs";
import path from "path";
import DATA_DIR from "./data-dir";

// Single source of truth for the eligible-name list.
// Persisted on the Render persistent disk, configured through DATA_DIR.

export const ELIGIBLE_NAMES_FILE = path.join(DATA_DIR, "eligible-names.json");

const normalize = (name: string) => name.trim().replace(/\s+/g, " ").toLowerCase();

export function readEligibleNames(): string[] {
  if (!fs.existsSync(ELIGIBLE_NAMES_FILE)) {
    return [];
  }

  const raw = fs.readFileSync(ELIGIBLE_NAMES_FILE, "utf-8").trim();
  if (!raw) {
    return [];
  }

  return JSON.parse(raw);
}

function writeEligibleNames(names: string[]): void {
  const tempFile = `${ELIGIBLE_NAMES_FILE}.tmp`;
  fs.writeFileSync(tempFile, JSON.stringify(names, null, 2), "utf-8");
  fs.renameSync(tempFile, ELIGIBLE_NAMES_FILE);
}

export function addEligibleName(name: string): { stored: string; added: boolean } {
  const names = readEligibleNames();
  const stored = name.trim().replace(/\s+/g, " ");

  if (names.some((existing) => normalize(existing) === normalize(stored))) {
    return { stored, added: false };
  }

  names.push(stored);
  writeEligibleNames(names);
  return { stored, added: true };
}

export function isEligibleName(name: string): boolean {
  return readEligibleNames().some((existing) => normalize(existing) === normalize(name));
}
