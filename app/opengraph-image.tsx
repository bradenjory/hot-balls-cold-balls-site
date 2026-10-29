import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Hot Balls Cold Balls. Hot balls, cold balls, boba in between. Coming to Utah.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const symbol = await readFile(join(process.cwd(), "public/brand/hbcb-symbol.png"));
  const src = `data:image/png;base64,${symbol.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#141019", alignItems: "center", padding: 80, gap: 64 }}>
        <img src={src} width={420} height={420} alt="" />
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2 }}>
          <span style={{ color: "#FF7A1A" }}>Hot balls.</span>
          <span style={{ color: "#1ED6C6" }}>Cold balls.</span>
          <span style={{ color: "#FFF4E2" }}>Coming to Utah.</span>
        </div>
      </div>
    ),
    size,
  );
}
