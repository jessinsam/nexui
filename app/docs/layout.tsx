import { Nav } from "@/components/nexui/nav"
import { Footer } from "@/components/nexui/footer"
import { DocsSidebar, DocsMobileNav } from "@/components/nexui/docs-sidebar"

export const metadata = {
  title: "Docs — NexUI",
  description: "NexUI documentation — installation, theming, CLI, and usage guides.",
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      {/* Mobile docs nav strip — sits right below the fixed navbar */}
      <DocsMobileNav />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="flex gap-8 sm:gap-12">
          <DocsSidebar />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
