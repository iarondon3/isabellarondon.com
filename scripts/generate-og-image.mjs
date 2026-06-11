import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

// Sharp/libvips reads the SVG's "Space Grotesk" font via fontconfig, which only
// picks it up if FONTCONFIG_FILE is set *before* the process starts (it's read
// once at libvips init, so setting process.env here is too late). If it's not
// set yet, write a fonts.conf pointing at scripts/fonts/ and re-exec ourselves
// with that env var set.
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fontsDir = path.join(__dirname, "fonts").replaceAll("\\", "/");
const fontsConf = path.join(__dirname, "fonts", "fonts.conf");

if (!process.env.FONTCONFIG_FILE) {
  fs.writeFileSync(
    fontsConf,
    `<?xml version="1.0"?>\n<!DOCTYPE fontconfig SYSTEM "fonts.dtd">\n<fontconfig>\n  <dir>${fontsDir}</dir>\n  <cachedir>${fontsDir}/.cache</cachedir>\n</fontconfig>\n`
  );
  fs.mkdirSync(path.join(__dirname, "fonts", ".cache"), { recursive: true });

  const result = spawnSync(process.execPath, [fileURLToPath(import.meta.url)], {
    stdio: "inherit",
    env: { ...process.env, FONTCONFIG_FILE: fontsConf },
  });
  process.exit(result.status ?? 1);
}

const sharp = (await import("sharp")).default;
const root = path.join(__dirname, "..");
await sharp(path.join(root, "public", "og-image.svg"))
  .png()
  .toFile(path.join(root, "public", "og-image.png"));

console.log("Generated public/og-image.png");
