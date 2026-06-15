import { ImageResponse } from "next/og";
import { brandColors } from "@/app/lib/brandColors";
import { siteConfig } from "@/app/lib/siteConfig";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, ${brandColors.primaryDark} 0%, ${brandColors.primary} 50%, ${brandColors.primaryLight} 100%)`,
          color: brandColors.base100,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
          <div
            style={{
              width: 48,
              height: 8,
              borderRadius: 999,
              backgroundColor: brandColors.accentRed,
            }}
          />
          <div
            style={{
              width: 48,
              height: 8,
              borderRadius: 999,
              backgroundColor: brandColors.secondary,
            }}
          />
          <div
            style={{
              width: 48,
              height: 8,
              borderRadius: 999,
              backgroundColor: brandColors.accentBlue,
            }}
          />
        </div>
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            letterSpacing: "-0.05em",
          }}
        >
          <span style={{ color: brandColors.white }}>U</span>
          <span style={{ color: brandColors.secondary }}>4</span>
          <span style={{ color: brandColors.accentBlue }}>G</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 36,
            fontWeight: 600,
            color: brandColors.accentBlue,
          }}
        >
          {siteConfig.name}
        </div>
      </div>
    ),
    size,
  );
}
