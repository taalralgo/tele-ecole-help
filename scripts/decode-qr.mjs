import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import jsQR from "jsqr";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

async function decodeQr(relativePath) {
  const fullPath = path.join(root, relativePath);
  const { data, info } = await sharp(fullPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const result = jsQR(new Uint8ClampedArray(data), info.width, info.height);
  if (!result) {
    throw new Error(`Unable to decode QR: ${relativePath}`);
  }

  return result.data;
}

const waveUrl = await decodeQr("design-reference/source/qrcode_wave.jpeg");
const orangeUrl = await decodeQr("design-reference/source/qrcode_orange_money.jpeg");

console.log("WAVE:", waveUrl);
console.log("ORANGE:", orangeUrl);

const output = `export const WAVE_PAY_URL = ${JSON.stringify(waveUrl)} as const;
export const ORANGE_MONEY_PAY_URL = ${JSON.stringify(orangeUrl)} as const;

export const WAVE_QR_PATH = "/qr/wave-card.jpeg" as const;
export const ORANGE_MONEY_QR_PATH = "/qr/orange-money.jpeg" as const;

export const IBAN = "SN21 3010 0400 9350 0241 0151" as const;
export const BANK_NAME = "Coris Bank" as const;
`;

fs.writeFileSync(path.join(root, "lib/payments.ts"), output, "utf8");
