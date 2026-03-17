import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "NexUI — Beautifully designed components"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#09090b",
          display: "flex",
          flexDirection: "column",
          padding: "80px 90px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Blue glow accent top-right */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Logo mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 56 }}>
          <div
            style={{
              width: 52,
              height: 52,
              background: "#0f0f1a",
              border: "1.5px solid rgba(255,255,255,0.12)",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 20 20" fill="none">
              <path
                d="M3 3.5L3 16.5L6.5 16.5L6.5 8.5L13.5 16.5L17 16.5L17 3.5L13.5 3.5L13.5 11.5L6.5 3.5L3 3.5Z"
                fill="white"
              />
            </svg>
          </div>
          <span style={{ fontSize: 32, fontWeight: 700, color: "white", letterSpacing: "-0.5px" }}>
            NexUI
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.05,
            letterSpacing: "-2px",
            maxWidth: 800,
            marginBottom: 28,
          }}
        >
          Beautifully designed components.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.5,
            maxWidth: 680,
            marginBottom: 64,
          }}
        >
          Copy-paste UI components built with Tailwind CSS and React. Open source. Inspired by shadcn/ui.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            marginTop: "auto",
          }}
        >
          <span
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.3)",
              fontFamily: "monospace",
            }}
          >
            www.nexui.dev
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              paddingLeft: 32,
              borderLeft: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {["Accessible", "Open Source", "Tailwind CSS"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.4)",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 6,
                  padding: "5px 12px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
