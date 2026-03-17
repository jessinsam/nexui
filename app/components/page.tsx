"use client"

import type { Metadata } from "next"

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

import { useState, useMemo, Suspense, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { CATEGORIES, COMPONENTS } from "@/lib/components-registry"
import type { ComponentEntry } from "@/lib/components-registry"
import {
  Search, ArrowUpRight, X, SlidersHorizontal, Copy, Check, Code2, Eye,
} from "@/components/nexui/icons"

function Sidebar({
  activeCategory, onCategory, counts,
}: {
  activeCategory: string; onCategory: (c: string) => void; counts: Record<string, number>
}) {
  return (
    <aside className="w-36 shrink-0 flex flex-col gap-px sticky top-11 self-start max-h-[calc(100vh-3.5rem)] overflow-y-auto pr-1">
      <p className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground px-2 mb-1">Categories</p>
      {CATEGORIES.map((cat) => {
        const count = cat === "All" ? COMPONENTS.length : (counts[cat] ?? 0)
        return (
          <button key={cat} onClick={() => onCategory(cat)}
            className={cn(
              "flex items-center justify-between px-2 py-[5px] rounded text-[11px] font-medium transition-colors w-full text-left",
              activeCategory === cat ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}>
            <span>{cat}</span>
            <span className={cn("text-[9px] font-mono px-1 py-px rounded",
              activeCategory === cat ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
            )}>{count}</span>
          </button>
        )
      })}
    </aside>
  )
}

function ComponentCard({ comp }: { comp: ComponentEntry }) {
  const [tab, setTab] = useState<"preview" | "code">("preview")
  const [copied, setCopied] = useState(false)
  function copy() {
    navigator.clipboard.writeText(comp.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="rounded-lg border border-border bg-card hover:border-primary/30 transition-all duration-200 flex flex-col">
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-border gap-2 rounded-t-lg overflow-hidden">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="text-[11px] font-semibold text-foreground truncate">{comp.name}</span>
          <span className="text-[9px] font-medium px-1.5 py-px rounded-full bg-secondary text-muted-foreground shrink-0">{comp.category}</span>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          {comp.href && (
            <a href={comp.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${comp.name} full page`}
              className="hidden sm:flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowUpRight size={11} aria-hidden="true" />
            </a>
          )}
          <div className="flex items-center rounded border border-border overflow-hidden bg-secondary">
            <button onClick={() => setTab("preview")} aria-label="Show preview"
              className={cn("flex items-center gap-1 px-2 py-[3px] text-[10px] font-medium transition-colors",
                tab === "preview" ? "bg-card text-foreground" : "text-muted-foreground hover:text-foreground")}>
              <Eye size={10} aria-hidden="true" />
              <span className="hidden sm:inline">Preview</span>
            </button>
            <button onClick={() => setTab("code")} aria-label="Show code"
              className={cn("flex items-center gap-1 px-2 py-[3px] text-[10px] font-medium transition-colors",
                tab === "code" ? "bg-card text-foreground" : "text-muted-foreground hover:text-foreground")}>
              <Code2 size={10} aria-hidden="true" />
              <span className="hidden sm:inline">Code</span>
            </button>
          </div>
          <button onClick={copy} aria-label={copied ? "Copied" : "Copy code"}
            className="flex items-center gap-1 px-2 py-[3px] rounded border border-border bg-secondary text-[10px] font-medium text-muted-foreground hover:text-foreground transition-colors">
            {copied ? <Check size={10} aria-hidden="true" className="text-emerald-400" /> : <Copy size={10} aria-hidden="true" />}
            <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span>
          </button>
        </div>
      </div>
      {tab === "preview" ? (
        <div className={cn("flex items-center justify-center bg-background/40 overflow-hidden",
          comp.fullWidth ? "p-2.5 md:p-3" : "p-3 md:p-5")}>
          <div className={cn("w-full", comp.fullWidth ? "max-w-full" : "max-w-xl")}>{comp.preview}</div>
        </div>
      ) : (
        <div className="relative bg-[var(--code-bg)]">
          <pre className="overflow-x-auto p-3 text-[10px] font-mono leading-relaxed text-muted-foreground max-h-[360px] overflow-y-auto">
            <code>{comp.code}</code>
          </pre>
        </div>
      )}
      <div className="px-3 py-1.5 border-t border-border rounded-b-lg overflow-hidden">
        <p className="text-[10px] text-muted-foreground leading-relaxed">{comp.description}</p>
      </div>
    </div>
  )
}

function ComponentGrid({ filtered, query, onClear }: { filtered: ComponentEntry[]; query: string; onClear: () => void }) {
  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3">
          <Search size={16} className="text-muted-foreground" aria-hidden="true" />
        </div>
        <p className="text-xs font-medium text-foreground">No results</p>
        <p className="text-[11px] text-muted-foreground mt-1">Try a different search term or category.</p>
        <button onClick={onClear} className="mt-3 text-[11px] text-primary hover:text-primary/80 transition-colors">Clear filters</button>
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-3">
      {filtered.map((comp) => <ComponentCard key={comp.name} comp={comp} />)}
    </div>
  )
}

function GridSkeleton() {
  return (
    <div className="flex flex-col gap-3" aria-hidden="true">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-lg border border-border bg-card animate-pulse" style={{ height: 180 }} />
      ))}
    </div>
  )
}

export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [query, setQuery] = useState("")
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const gridTopRef = useRef<HTMLDivElement>(null)

  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }) }, [])

  const handleCategory = useCallback((cat: string) => {
    setActiveCategory(cat)
    setTimeout(() => { gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }) }, 20)
  }, [])

  const counts = useMemo(() => {
    const map: Record<string, number> = {}
    for (const c of COMPONENTS) { map[c.category] = (map[c.category] ?? 0) + 1 }
    return map
  }, [])

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return COMPONENTS.filter((c) => {
      const categoryMatch = activeCategory === "All" || c.category === activeCategory
      const searchMatch = !q || c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.tags.some((t) => t.includes(q))
      return categoryMatch && searchMatch
    })
  }, [activeCategory, query])

  function clearFilters() { setQuery(""); setActiveCategory("All") }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-11 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-1.5 shrink-0" aria-label="NexUI home">
            <span className="w-5 h-5 rounded flex items-center justify-center bg-primary">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="5" height="5" rx="1" fill="white" />
                <rect x="8" y="1" width="5" height="5" rx="1" fill="white" opacity="0.6" />
                <rect x="1" y="8" width="5" height="5" rx="1" fill="white" opacity="0.6" />
                <rect x="8" y="8" width="5" height="5" rx="1" fill="white" />
              </svg>
            </span>
            <span className="font-semibold text-xs tracking-tight text-foreground">Nex<span className="text-primary">UI</span></span>
          </Link>
          <div className="flex-1 max-w-xs relative">
            <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" aria-hidden="true" />
            <input type="search" value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Search components..." aria-label="Search components"
              className="w-full h-7 rounded-md border border-border bg-secondary pl-7 pr-7 text-[11px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-all" />
            {query && (
              <button onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                <X size={11} aria-hidden="true" />
              </button>
            )}
          </div>
          <button className="md:hidden flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileSidebarOpen((v) => !v)} aria-label="Toggle category filter">
            <SlidersHorizontal size={13} aria-hidden="true" /> Filter
          </button>
          <nav className="hidden md:flex items-center gap-3" aria-label="Top navigation">
            <Link href="/" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <a href="https://github.com/jessinsam/nexui" target="_blank" rel="noopener noreferrer"
              className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            <Link href="/docs" className="text-[11px] bg-primary text-primary-foreground px-2.5 py-1 rounded hover:bg-primary/90 transition-colors font-medium">Docs</Link>
          </nav>
        </div>
      </header>

      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={() => setMobileSidebarOpen(false)} />
          <div className="relative z-10 w-56 bg-background border-r border-border h-full pt-16 px-3 flex flex-col gap-px overflow-y-auto">
            <p className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground px-2 mb-1.5">Categories</p>
            {CATEGORIES.map((cat) => {
              const count = cat === "All" ? COMPONENTS.length : (counts[cat] ?? 0)
              return (
                <button key={cat} onClick={() => { handleCategory(cat); setMobileSidebarOpen(false) }}
                  className={cn("flex items-center justify-between px-2 py-[5px] rounded text-[11px] font-medium transition-colors w-full text-left",
                    activeCategory === cat ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary")}>
                  <span>{cat}</span>
                  <span className={cn("text-[9px] font-mono px-1 py-px rounded",
                    activeCategory === cat ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground")}>{count}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-12">
        <div className="mb-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-1">Library</p>
          <h1 className="text-xl sm:text-2xl font-semibold text-foreground text-balance">Components</h1>
          <p className="mt-1 text-muted-foreground max-w-lg leading-relaxed text-[11px]">
            {COMPONENTS.length} accessible, dark-mode-ready components built with Tailwind CSS. Copy the code and own it.
          </p>
        </div>

        <div className="flex gap-6">
          <div className="hidden md:block">
            <Sidebar activeCategory={activeCategory} onCategory={handleCategory} counts={counts} />
          </div>
          <div className="flex-1 min-w-0">
            <div ref={gridTopRef} style={{ scrollMarginTop: "3.5rem" }} />
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] text-muted-foreground">
                {filtered.length === 0 ? "No components found" : `${filtered.length} component${filtered.length !== 1 ? "s" : ""}`}
                {query && <span className="ml-1">for <span className="text-foreground font-medium">&ldquo;{query}&rdquo;</span></span>}
              </p>
              {(query || activeCategory !== "All") && (
                <button onClick={clearFilters} className="text-[11px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <X size={10} aria-hidden="true" /> Clear
                </button>
              )}
            </div>
            <Suspense fallback={<GridSkeleton />}>
              <ComponentGrid filtered={filtered} query={query} onClear={clearFilters} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
