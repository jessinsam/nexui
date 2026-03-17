"use client"

import { useState } from "react"
import {
  ArrowRight,
  Eye,
  EyeOff,
  Github,
  ChevronRight,
  Send,
  Bot,
  User as UserIcon,
  LayoutGrid,
  ListIcon,
  Table,
  Kanban,
  TrendingUp,
} from "@/components/nexui/icons"
import { cn } from "@/lib/utils"

// ─── Auth Preview ────────────────────────────────────────────────────────────

function AuthPreview() {
  const [showPw, setShowPw] = useState(false)
  const [email, setEmail] = useState("")
  return (
    <div className="w-full max-w-[280px] mx-auto flex flex-col gap-2.5 text-left">
      <div className="mb-0.5">
        <p className="text-sm font-semibold text-foreground">Welcome back</p>
        <p className="text-xs text-muted-foreground">Sign in to your account</p>
      </div>
      <button className="flex items-center justify-center gap-2 w-full h-8 rounded-lg border border-border bg-secondary text-xs font-medium text-foreground hover:bg-secondary/80 transition-colors">
        <Github size={12} aria-hidden="true" />
        Continue with GitHub
      </button>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-border" />
        <span className="text-[10px] text-muted-foreground">or</span>
        <div className="flex-1 h-px bg-border" />
      </div>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="h-8 w-full rounded-lg border border-border bg-secondary px-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition"
      />
      <div className="relative">
        <input
          type={showPw ? "text" : "password"}
          placeholder="••••••••"
          readOnly
          className="h-8 w-full rounded-lg border border-border bg-secondary px-3 pr-8 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPw(v => !v)}
          aria-label="Toggle password"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {showPw ? <EyeOff size={11} aria-hidden="true" /> : <Eye size={11} aria-hidden="true" />}
        </button>
      </div>
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-1.5 cursor-pointer">
          <div className="w-3 h-3 rounded border border-border bg-secondary" />
          <span className="text-[10px] text-muted-foreground">Remember me</span>
        </label>
        <button className="text-[10px] text-primary hover:text-primary/80 transition-colors">Forgot password?</button>
      </div>
      <button className="flex items-center justify-center gap-1.5 h-8 w-full rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all">
        Sign in <ArrowRight size={11} aria-hidden="true" />
      </button>
    </div>
  )
}

// ─── Chat Preview ────────────────────────────────────────────────────────────

const CHAT_SEED = [
  { role: "assistant" as const, text: "Hey! How can I help you today?" },
  { role: "user" as const, text: "Can you show me a button component?" },
  { role: "assistant" as const, text: "Sure! Here's a simple primary button using NexUI classes." },
]

function ChatPreview() {
  const [msgs, setMsgs] = useState(CHAT_SEED)
  const [input, setInput] = useState("")

  function send() {
    const t = input.trim()
    if (!t) return
    setMsgs(m => [...m, { role: "user", text: t }, { role: "assistant", text: "Got it! Let me look that up for you." }])
    setInput("")
  }

  return (
    <div className="w-full max-w-[300px] mx-auto flex flex-col rounded-xl border border-border bg-card overflow-hidden" style={{ height: 260 }}>
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-secondary/40 shrink-0">
        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
          <Bot size={11} className="text-primary" aria-hidden="true" />
        </div>
        <span className="text-xs font-semibold text-foreground">NexAI</span>
        <span className="ml-auto flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] text-muted-foreground">Online</span>
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-2 px-3 py-2" style={{ scrollbarWidth: "none" }}>
        {msgs.map((m, i) => (
          <div key={i} className={cn("flex gap-1.5 items-end", m.role === "user" ? "flex-row-reverse" : "flex-row")}>
            <div className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
              m.role === "assistant" ? "bg-primary/15" : "bg-secondary border border-border"
            )}>
              {m.role === "assistant"
                ? <Bot size={10} className="text-primary" aria-hidden="true" />
                : <UserIcon size={10} className="text-muted-foreground" aria-hidden="true" />
              }
            </div>
            <div className={cn(
              "max-w-[80%] rounded-xl px-2.5 py-1.5 text-[11px] leading-relaxed",
              m.role === "assistant"
                ? "bg-secondary text-foreground rounded-bl-sm"
                : "bg-primary text-primary-foreground rounded-br-sm"
            )}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-1.5 px-2 py-2 border-t border-border bg-secondary/30 shrink-0">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          placeholder="Type a message..."
          className="flex-1 h-7 rounded-lg bg-background border border-border px-2.5 text-[11px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 transition"
        />
        <button
          onClick={send}
          className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors shrink-0"
          aria-label="Send"
        >
          <Send size={11} className="text-primary-foreground" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

// ─── Data Views Preview ──────────────────────────────────────────────────────

const MINI_TASKS = [
  { title: "Design tokens",    status: "Done",        priority: "High",   tag: "Design" },
  { title: "Auth flow",        status: "In Progress", priority: "High",   tag: "Dev" },
  { title: "Fix layout",       status: "In Review",   priority: "Medium", tag: "Dev" },
  { title: "Write API docs",   status: "Todo",        priority: "Medium", tag: "Docs" },
]

const STATUS_COLORS: Record<string, string> = {
  "Done":        "text-emerald-400",
  "In Progress": "text-blue-400",
  "In Review":   "text-yellow-400",
  "Todo":        "text-muted-foreground",
}

const PRIORITY_COLORS: Record<string, string> = {
  "High":   "text-red-400",
  "Medium": "text-yellow-400",
  "Low":    "text-muted-foreground",
}

type DataViewMode = "kanban" | "cards" | "list" | "table"

const VIEW_TABS: { id: DataViewMode; icon: React.ReactNode; label: string }[] = [
  { id: "kanban", icon: <Kanban size={11} />,      label: "Kanban" },
  { id: "cards",  icon: <LayoutGrid size={11} />,  label: "Cards"  },
  { id: "list",   icon: <ListIcon size={11} />,    label: "List"   },
  { id: "table",  icon: <Table size={11} />,        label: "Table"  },
]

function DataViewsPreview() {
  const [view, setView] = useState<DataViewMode>("kanban")

  return (
    <div className="w-full flex flex-col gap-2.5">
      {/* Tab switcher */}
      <div className="flex items-center gap-1 p-1 rounded-lg bg-secondary border border-border self-start">
        {VIEW_TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setView(t.id)}
            className={cn(
              "flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors",
              view === t.id
                ? "bg-background text-foreground shadow-sm border border-border/50"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      {/* Kanban */}
      {view === "kanban" && (
        <div className="grid grid-cols-4 gap-1.5">
          {["Todo", "In Progress", "In Review", "Done"].map(col => {
            const colTasks = MINI_TASKS.filter(t => t.status === col)
            return (
              <div key={col} className="flex flex-col gap-1.5 rounded-lg bg-secondary/50 p-1.5">
                <span className={cn("text-[10px] font-semibold px-1", STATUS_COLORS[col])}>{col}</span>
                {colTasks.map((t, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-2">
                    <p className="text-[10px] font-medium text-foreground leading-snug mb-1.5">{t.title}</p>
                    <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border">{t.tag}</span>
                  </div>
                ))}
                {colTasks.length === 0 && (
                  <div className="rounded-lg border border-dashed border-border h-10 flex items-center justify-center">
                    <span className="text-[9px] text-muted-foreground/40">Empty</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Cards */}
      {view === "cards" && (
        <div className="grid grid-cols-2 gap-1.5">
          {MINI_TASKS.map((t, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-2.5 flex flex-col gap-1.5">
              <div className="flex items-start justify-between gap-1">
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-secondary border border-border text-muted-foreground">{t.tag}</span>
              </div>
              <p className="text-xs font-semibold text-foreground leading-snug">{t.title}</p>
              <span className={cn("text-[10px] font-medium", STATUS_COLORS[t.status])}>{t.status}</span>
              <div className="flex items-center justify-between mt-0.5">
                <span className={cn("text-[10px]", PRIORITY_COLORS[t.priority])}>{t.priority}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List */}
      {view === "list" && (
        <div className="flex flex-col gap-1">
          {MINI_TASKS.map((t, i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
              <div className={cn("w-1.5 h-1.5 rounded-full shrink-0", {
                "bg-emerald-400": t.status === "Done",
                "bg-blue-400": t.status === "In Progress",
                "bg-yellow-400": t.status === "In Review",
                "bg-border": t.status === "Todo",
              })} />
              <p className="text-[11px] font-medium text-foreground flex-1 truncate">{t.title}</p>
              <span className={cn("text-[10px] shrink-0", PRIORITY_COLORS[t.priority])}>{t.priority}</span>
              <span className="text-[10px] text-muted-foreground shrink-0 font-medium px-1.5 py-0.5 rounded bg-secondary border border-border">{t.tag}</span>
            </div>
          ))}
        </div>
      )}

      {/* Table */}
      {view === "table" && (
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-[11px]">
            <thead>
              <tr className="border-b border-border bg-secondary/60">
                <th className="text-left px-3 py-1.5 font-semibold text-muted-foreground">Task</th>
                <th className="text-left px-2 py-1.5 font-semibold text-muted-foreground">Status</th>
                <th className="text-left px-2 py-1.5 font-semibold text-muted-foreground">Priority</th>
                <th className="text-left px-2 py-1.5 font-semibold text-muted-foreground">Tag</th>
              </tr>
            </thead>
            <tbody>
              {MINI_TASKS.map((t, i) => (
                <tr key={i} className={cn("border-b border-border last:border-0", i % 2 === 1 && "bg-secondary/20")}>
                  <td className="px-3 py-1.5 font-medium text-foreground truncate max-w-[100px]">{t.title}</td>
                  <td className={cn("px-2 py-1.5 font-medium", STATUS_COLORS[t.status])}>{t.status}</td>
                  <td className={cn("px-2 py-1.5", PRIORITY_COLORS[t.priority])}>{t.priority}</td>
                  <td className="px-2 py-1.5 text-muted-foreground">{t.tag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

// ─── Charts Preview ──────────────────────────────────────────────────────────

const CHART_DATA = [
  { label: "Jan", a: 32, b: 18 },
  { label: "Feb", a: 48, b: 27 },
  { label: "Mar", a: 41, b: 35 },
  { label: "Apr", a: 63, b: 44 },
  { label: "May", a: 55, b: 38 },
  { label: "Jun", a: 74, b: 52 },
]

const MAX_VAL = 80

function ChartsPreview() {
  const [type, setType] = useState<"bar" | "line">("bar")

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Toggle */}
      <div className="flex items-center gap-1 p-1 rounded-lg bg-secondary border border-border self-start">
        <button
          onClick={() => setType("bar")}
          className={cn(
            "flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors",
            type === "bar" ? "bg-background text-foreground shadow-sm border border-border/50" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <LayoutGrid size={11} aria-hidden="true" /> Bar
        </button>
        <button
          onClick={() => setType("line")}
          className={cn(
            "flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors",
            type === "line" ? "bg-background text-foreground shadow-sm border border-border/50" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <TrendingUp size={11} aria-hidden="true" /> Line
        </button>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-3">
        {[
          { label: "Revenue", color: "bg-primary" },
          { label: "Costs",   color: "bg-[oklch(0.6_0.18_300)]" },
        ].map(s => (
          <span key={s.label} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
            <span className={cn("w-2 h-2 rounded-sm", s.color)} />
            {s.label}
          </span>
        ))}
      </div>

      {/* Chart area */}
      <div className="relative w-full" style={{ height: 120 }}>
        <svg viewBox={`0 0 ${CHART_DATA.length * 48} 100`} className="w-full h-full overflow-visible" aria-label="Chart">
          {type === "bar" ? (
            /* Bar chart */
            CHART_DATA.map((d, i) => (
              <g key={i}>
                <rect
                  x={i * 48 + 2}
                  y={100 - (d.a / MAX_VAL) * 86}
                  width={18}
                  height={(d.a / MAX_VAL) * 86}
                  rx={3}
                  className="fill-primary opacity-90"
                />
                <rect
                  x={i * 48 + 24}
                  y={100 - (d.b / MAX_VAL) * 86}
                  width={18}
                  height={(d.b / MAX_VAL) * 86}
                  rx={3}
                  fill="oklch(0.6 0.18 300)"
                  className="opacity-80"
                />
              </g>
            ))
          ) : (
            /* Line chart */
            <>
              {/* Area fills */}
              <defs>
                <linearGradient id="ga" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.6 0.2 250)" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="oklch(0.6 0.2 250)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="gb" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.6 0.18 300)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="oklch(0.6 0.18 300)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline
                points={CHART_DATA.map((d, i) => `${i * 48 + 11},${100 - (d.a / MAX_VAL) * 86}`).join(" ")}
                fill="none"
                stroke="oklch(0.6 0.2 250)"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <polyline
                points={CHART_DATA.map((d, i) => `${i * 48 + 11},${100 - (d.b / MAX_VAL) * 86}`).join(" ")}
                fill="none"
                stroke="oklch(0.6 0.18 300)"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeDasharray="4 2"
              />
              {CHART_DATA.map((d, i) => (
                <g key={i}>
                  <circle cx={i * 48 + 11} cy={100 - (d.a / MAX_VAL) * 86} r="3" fill="oklch(0.6 0.2 250)" />
                  <circle cx={i * 48 + 11} cy={100 - (d.b / MAX_VAL) * 86} r="2.5" fill="oklch(0.6 0.18 300)" />
                </g>
              ))}
            </>
          )}

          {/* X-axis labels */}
          {CHART_DATA.map((d, i) => (
            <text key={i} x={i * 48 + 20} y={112} textAnchor="middle" fontSize="9" className="fill-muted-foreground/60">{d.label}</text>
          ))}
        </svg>
      </div>
    </div>
  )
}

// ─── Component showcase cards ─────────────────────────────────────────────────

const SHOWCASE_ITEMS = [
  {
    name: "Authentication",
    description: "Sign-in, sign-up, and multi-step account creation flows with OAuth, password strength validation, and 2FA.",
    category: "Auth",
    tag: "Auth",
    preview: <AuthPreview />,
  },
  {
    name: "Chat Interfaces",
    description: "Full-screen, sidebar, floating widget, and voice chat UIs with streaming replies and file attachments.",
    category: "Chat",
    tag: "Chat",
    preview: <ChatPreview />,
  },
  {
    name: "Data Views",
    description: "Kanban, Cards, List, and Table views sharing a unified filter/sort toolbar with drag-and-drop support.",
    category: "Data Views",
    tag: "Data Views",
    preview: <DataViewsPreview />,
  },
  {
    name: "Charts",
    description: "Area, bar, line, pie, radar, and radial progress charts with interactive toggles and animation.",
    category: "Charts",
    tag: "Charts",
    preview: <ChartsPreview />,
  },
]

// ─── Gallery section ──────────────────────────────────────────────────────────

export function Gallery() {
  return (
    <section id="components" className="py-14 sm:py-20 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Component Showcase</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Everything you need.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed text-sm">
            Hand-crafted, accessible components inspired by the shadcn/ui copy-paste philosophy. Drop any component straight into your project and own every line.
          </p>
        </div>

        {/* Showcase — single column stacked */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {SHOWCASE_ITEMS.map((item) => (
            <div
              key={item.name}
              className="group rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-200 overflow-hidden flex flex-col"
            >
              {/* Preview */}
              <div className="flex-1 flex items-center justify-center p-4 sm:p-5 bg-background/40 min-h-[200px] overflow-x-auto">
                {item.preview}
              </div>

              {/* Info */}
              <div className="px-4 py-3 border-t border-border flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span className="text-sm font-semibold text-foreground">{item.name}</span>
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore more */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-border bg-secondary/30 px-5 sm:px-6 py-5">
          <div>
            <p className="text-sm font-semibold text-foreground">Explore all components</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              50+ components across Auth, Chat, Data Views, Charts, Forms, Carousel, and more.
            </p>
          </div>
          <a
            href="/components"
            className="flex items-center gap-2 shrink-0 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
          >
            Browse components <ChevronRight size={14} aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  )
}
