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
          background: "#0a0a0f",
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3.5L3 16.5L6.5 16.5L6.5 8.5L13.5 16.5L17 16.5L17 3.5L13.5 3.5L13.5 11.5L6.5 3.5L3 3.5Z"
            fill="white"
          />
        </svg>
      </div>
    ),
    { ...size }
  )
}
