import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const approvedHeroPath = path.join(root, "public/campaign/hero.jpeg");

// Isolate the photographic panel from the approved campaign composition.
await sharp(approvedHeroPath)
  .extract({ left: 800, top: 162, width: 780, height: 656 })
  .webp({ quality: 92 })
  .toFile(path.join(root, "public/campaign/hero-scene.webp"));

// Keep the campaign's hand-made cracked lettering and brush stroke intact.
// The surrounding navy pixels are made transparent so the artwork can reflow
// over the responsive layout without turning the whole hero into one image.
const titleArtwork = await sharp(approvedHeroPath)
  .extract({ left: 20, top: 245, width: 770, height: 285 })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let offset = 0; offset < titleArtwork.data.length; offset += 4) {
  const pixel = offset / 4;
  const x = pixel % titleArtwork.info.width;
  const y = Math.floor(pixel / titleArtwork.info.width);
  const red = titleArtwork.data[offset];
  const green = titleArtwork.data[offset + 1];
  const blue = titleArtwork.data[offset + 2];
  const blueDistance = blue - Math.max(red, green);
  const isYellow = red > 145 && green > 70 && blue < 95;

  const isPhotoEdge = x > 720 && !isYellow;
  const isBottomEdge = y > 278 && red < 100 && green < 90;

  if (blueDistance >= 24 || isPhotoEdge || isBottomEdge) {
    titleArtwork.data[offset + 3] = 0;
  } else if (blueDistance > 8) {
    titleArtwork.data[offset + 3] = Math.round(
      255 * (1 - (blueDistance - 8) / 16),
    );
  }
}

await sharp(titleArtwork.data, {
  raw: titleArtwork.info,
})
  .webp({ quality: 96, alphaQuality: 100 })
  .toFile(path.join(root, "public/campaign/hero-title.webp"));

const campaignLogo = await sharp(approvedHeroPath)
  .extract({ left: 165, top: 25, width: 570, height: 145 })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let offset = 0; offset < campaignLogo.data.length; offset += 4) {
  const red = campaignLogo.data[offset];
  const green = campaignLogo.data[offset + 1];
  const blue = campaignLogo.data[offset + 2];
  const blueDistance = blue - Math.max(red, green);

  if (blueDistance >= 24) {
    campaignLogo.data[offset + 3] = 0;
  } else if (blueDistance > 8) {
    campaignLogo.data[offset + 3] = Math.round(
      255 * (1 - (blueDistance - 8) / 16),
    );
  }
}

await sharp(campaignLogo.data, {
  raw: campaignLogo.info,
})
  .webp({ quality: 96, alphaQuality: 100 })
  .toFile(path.join(root, "public/campaign/campaign-logo.webp"));

const { writeFavicons } = await import("./extract-favicon.mjs");
await writeFavicons();

// Crop the hero photo panel from the validated desktop mockup (right column).
await sharp(path.join(root, "design-reference/mockups/desktop.png"))
  .extract({ left: 780, top: 120, width: 680, height: 345 })
  .webp({ quality: 88 })
  .toFile(path.join(root, "public/campaign/hero-approved.webp"));

// OG image from official poster (JPG for Teams/LinkedIn, WebP for the site)
const ogSource = path.join(root, "design-reference/source/help.jpeg");
const ogExists = await import("node:fs/promises").then(({ access }) =>
  access(ogSource).then(() => true).catch(() => false),
);

if (ogExists) {
  await sharp(ogSource)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .jpeg({ quality: 88 })
    .toFile(path.join(root, "public/campaign/og.jpg"));

  await sharp(ogSource)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .webp({ quality: 85 })
    .toFile(path.join(root, "public/campaign/og.webp"));
} else {
  await sharp(path.join(root, "public/campaign/og.webp"))
    .jpeg({ quality: 88 })
    .toFile(path.join(root, "public/campaign/og.jpg"));
}

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
