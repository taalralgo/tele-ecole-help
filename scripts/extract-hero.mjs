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
// The black background is made transparent so the artwork can reflow over the
// responsive layout without turning the whole hero into one image.
const heroTitlePath = path.join(root, "design-reference/source/hero-title.jpg");

const titleArtwork = await sharp(heroTitlePath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let offset = 0; offset < titleArtwork.data.length; offset += 4) {
  const red = titleArtwork.data[offset];
  const green = titleArtwork.data[offset + 1];
  const blue = titleArtwork.data[offset + 2];
  const max = Math.max(red, green, blue);

  if (max <= 24) {
    titleArtwork.data[offset + 3] = 0;
  } else if (max <= 48) {
    titleArtwork.data[offset + 3] = Math.round(255 * ((max - 24) / 24));
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

// Square crop of Wave QR for card display
await sharp(path.join(root, "design-reference/source/qrcode_wave.jpeg"))
  .extract({ left: 72, top: 322, width: 496, height: 496 })
  .jpeg({ quality: 95 })
  .toFile(path.join(root, "public/qr/wave-card.jpeg"));

await sharp(
  path.join(root, "design-reference/source/qrcode_orange_money.jpeg"),
)
  .extract({ left: 390, top: 390, width: 300, height: 300 })
  .resize({ width: 150 })
  .webp({ quality: 92 })
  .toFile(path.join(root, "public/brand/orange-money.webp"));

console.log("Hero assets generated.");
