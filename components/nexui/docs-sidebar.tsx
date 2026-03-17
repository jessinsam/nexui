"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const sections = [
  {
    title: "Getting started",
    links: [
      { label: "Introduction", href: "/docs" },
      { label: "Installation", href: "/docs/installation" },
      { label: "CLI", href: "/docs/cli" },
      { label: "Theming", href: "/docs/theming" },
    ],
  },
  {
    title: "Components",
    links: [
      { label: "Browse all", href: "/components" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "GitHub", href: "https://github.com/jessinsam/nexui" },
      { label: "Changelog", href: "https://github.com/jessinsam/nexui/releases" },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:block w-52 shrink-0 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pr-2" style={{ scrollbarWidth: "none" }}>
      {sections.map((section) => (
        <div key={section.title} className="mb-6">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-2 mb-1.5">
            {section.title}
          </p>
          <div className="flex flex-col gap-0.5">
            {section.links.map((link) => {
              const isExternal = link.href.startsWith("http")
              const isActive = !isExternal && pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={cn(
                    "text-sm px-2 py-1.5 rounded-md transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </aside>
  )
}
