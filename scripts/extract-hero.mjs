import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

// Crop the hero photo panel from the validated desktop mockup (right column).
await sharp(path.join(root, "design-reference/mockups/desktop.png"))
  .extract({ left: 780, top: 120, width: 680, height: 345 })
  .webp({ quality: 88 })
  .toFile(path.join(root, "public/campaign/hero-approved.webp"));

// OG image from official poster
await sharp(path.join(root, "design-reference/source/help.jpeg"))
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .webp({ quality: 85 })
  .toFile(path.join(root, "public/campaign/og.webp"));

// Square crop of Wave QR for card display
await sharp(path.join(root, "design-reference/source/qrcode_wave.jpeg"))
  .extract({ left: 72, top: 322, width: 496, height: 496 })
  .jpeg({ quality: 95 })
  .toFile(path.join(root, "public/qr/wave-card.jpeg"));

await sharp(path.join(root, "design-reference/source/qrcode_wave.jpeg"))
  .extract({ left: 34, top: 24, width: 568, height: 238 })
  .resize({ width: 284 })
  .webp({ quality: 90 })
  .toFile(path.join(root, "public/brand/wave.webp"));

await sharp(
  path.join(root, "design-reference/source/qrcode_orange_money.jpeg"),
)
  .extract({ left: 390, top: 390, width: 300, height: 300 })
  .resize({ width: 150 })
  .webp({ quality: 92 })
  .toFile(path.join(root, "public/brand/orange-money.webp"));

console.log("Hero and OG assets generated.");
