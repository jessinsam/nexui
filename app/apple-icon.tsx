import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#2563EB",
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", gap: 14 }}>
            <div style={{ width: 52, height: 52, background: "white", borderRadius: 10 }} />
            <div style={{ width: 52, height: 52, background: "white", borderRadius: 10 }} />
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            <div style={{ width: 52, height: 52, background: "white", borderRadius: 10 }} />
            <div style={{ width: 52, height: 52, background: "white", borderRadius: 10 }} />
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
