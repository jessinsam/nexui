import { Nav } from "@/components/nexui/nav"
import { Footer } from "@/components/nexui/footer"
import { DocsSidebar } from "@/components/nexui/docs-sidebar"

export const metadata = {
  title: "Docs — NexUI",
  description: "NexUI documentation — installation, theming, CLI, and usage guides.",
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="flex gap-12">
          <DocsSidebar />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
