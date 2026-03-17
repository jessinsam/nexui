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
          background: "#0a0a0f",
          borderRadius: 7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3.5L3 16.5L6.5 16.5L6.5 8.5L13.5 16.5L17 16.5L17 3.5L13.5 3.5L13.5 11.5L6.5 3.5L3 3.5Z"
            fill="white"
          />
          <path
            d="M3 3.5L3 16.5L6.5 16.5L6.5 8.5L13.5 16.5L17 16.5L17 3.5L13.5 3.5L13.5 11.5L6.5 3.5L3 3.5Z"
            fill="url(#blue_glow)"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="blue_glow" x1="3" y1="3.5" x2="17" y2="16.5">
              <stop stopColor="#60a5fa" />
              <stop offset="1" stopColor="#818cf8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
    { ...size }
  )
}
