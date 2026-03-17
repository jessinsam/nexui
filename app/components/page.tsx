import type { Metadata } from "next"
import ComponentsClient from "./components-client"

export const metadata: Metadata = {
  title: "Components",
  description: "Browse 50+ hand-crafted, accessible React components built with Tailwind CSS. Copy-paste into your project. No npm install required.",
  alternates: { canonical: "https://www.nexui.dev/components" },
  openGraph: {
    title: "Components — NexUI",
    description: "Browse 50+ hand-crafted, accessible React components built with Tailwind CSS.",
    url: "https://www.nexui.dev/components",
  },
}

export default function ComponentsPage() {
  return <ComponentsClient />
}
