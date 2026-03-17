import type { Metadata } from "next"
import { InstallationClient } from "./client"

export const metadata: Metadata = {
  title: "Installation",
  description: "Install NexUI in your Next.js project. Copy components directly into your codebase — no package to install, no version conflicts.",
  alternates: { canonical: "https://www.nexui.dev/docs/installation" },
  openGraph: {
    title: "Installation — NexUI",
    description: "Install NexUI in your Next.js project. Copy components directly — no npm package needed.",
    url: "https://www.nexui.dev/docs/installation",
  },
}

export default function InstallationPage() {
  return <InstallationClient />
}
