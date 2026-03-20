import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#2563EB",
          borderRadius: 7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <div style={{ display: "flex", gap: 3 }}>
            <div style={{ width: 9, height: 9, background: "white", borderRadius: 2 }} />
            <div style={{ width: 9, height: 9, background: "white", borderRadius: 2 }} />
          </div>
          <div style={{ display: "flex", gap: 3 }}>
            <div style={{ width: 9, height: 9, background: "white", borderRadius: 2 }} />
            <div style={{ width: 9, height: 9, background: "white", borderRadius: 2 }} />
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
