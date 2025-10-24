
// Simple in-memory password store (consider using database for production)
const validPasswords = new Set<string>();
const PASSWORD_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours
const passwordExpiry = new Map<string, number>();

export function generatePassword(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < 8; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

export function addPassword(password: string): void {
  validPasswords.add(password);
  passwordExpiry.set(password, Date.now() + PASSWORD_EXPIRY);
}

export function validatePassword(password: string): boolean {
  if (!validPasswords.has(password)) {
    return false;
  }
  
  const expiry = passwordExpiry.get(password);
  if (expiry && Date.now() > expiry) {
    validPasswords.delete(password);
    passwordExpiry.delete(password);
    return false;
  }
  
  return true;
}

export function cleanExpiredPasswords(): void {
  const now = Date.now();
  for (const [password, expiry] of passwordExpiry.entries()) {
    if (now > expiry) {
      validPasswords.delete(password);
      passwordExpiry.delete(password);
    }
  }
}

// Clean expired passwords every hour
setInterval(cleanExpiredPasswords, 60 * 60 * 1000);
