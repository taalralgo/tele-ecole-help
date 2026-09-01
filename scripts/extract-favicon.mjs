import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function pngToIco(png) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0);
  entry.writeUInt8(32, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);

  return Buffer.concat([header, entry, png]);
}

export async function writeFavicons(
  logoPath = path.join(root, "public/campaign/campaign-logo.webp"),
) {
  const extracted = await sharp(logoPath)
    .extract({ left: 0, top: 0, width: 145, height: 145 })
    .png()
    .toBuffer();

  const trimmed = await sharp(extracted)
    .trim({ threshold: 10 })
    .toBuffer({ resolveWithObject: true });

  const size = Math.max(trimmed.info.width, trimmed.info.height);
  const square = await sharp(trimmed.data)
    .extend({
      top: Math.floor((size - trimmed.info.height) / 2),
      bottom: Math.ceil((size - trimmed.info.height) / 2),
      left: Math.floor((size - trimmed.info.width) / 2),
      right: Math.ceil((size - trimmed.info.width) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const resizePng = (width) =>
    sharp(square)
      .resize(width, width, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png({ compressionLevel: 9 })
      .toBuffer();

  const [png32, png180, png192, png512] = await Promise.all([
    resizePng(32),
    resizePng(180),
    resizePng(192),
    resizePng(512),
  ]);

  await Promise.all([
    writeFile(path.join(root, "app/favicon.ico"), pngToIco(png32)),
    sharp(png192).toFile(path.join(root, "app/icon.png")),
    sharp(png180).toFile(path.join(root, "app/apple-icon.png")),
    sharp(png512).toFile(path.join(root, "public/brand/icon.png")),
  ]);
}

const isDirectRun = process.argv[1] === fileURLToPath(import.meta.url);
if (isDirectRun) {
  await writeFavicons();
  console.log("Favicon assets generated.");
}
