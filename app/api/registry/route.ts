import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

function toSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export async function GET() {
  // Dynamically import to avoid SSR issues with JSX preview nodes
  const { COMPONENTS } = await import("@/lib/components-registry")

  const list = (Array.isArray(COMPONENTS) ? COMPONENTS : []).map((c: {
    name: string
    description?: string
    category: string
    tags?: string[]
    code?: string
  }) => ({
    slug: toSlug(c.name),
    name: c.name,
    description: c.description ?? "",
    category: c.category,
    tags: c.tags ?? [],
    code: c.code ?? "",
  }))

  return NextResponse.json(
    {
      version: "1.0.0",
      updatedAt: new Date().toISOString(),
      components: list,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  )
}
