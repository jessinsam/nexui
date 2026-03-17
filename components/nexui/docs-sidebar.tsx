"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "@/components/nexui/icons"

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

function SidebarLinks({ onNav }: { onNav?: () => void }) {
  const pathname = usePathname()
  return (
    <>
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
                  onClick={onNav}
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
    </>
  )
}

export function DocsSidebar() {
  return (
    <aside
      className="hidden md:block w-52 shrink-0 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pr-2"
      style={{ scrollbarWidth: "none" }}
    >
      <SidebarLinks />
    </aside>
  )
}

export function DocsMobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile bar — shown below nav */}
      <div className="md:hidden flex items-center gap-2 px-4 py-2.5 border-b border-border bg-background/80 backdrop-blur-sm sticky top-14 z-30">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Open docs navigation"
        >
          <Menu size={15} aria-hidden="true" />
          <span>On this page</span>
        </button>
      </div>

      {/* Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 w-64 bg-background border-r border-border h-full pt-6 px-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-semibold text-foreground">Documentation</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>
            <SidebarLinks onNav={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}
