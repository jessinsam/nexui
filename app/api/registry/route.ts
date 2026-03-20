import { NextResponse } from "next/server"
import { COMPONENTS } from "@/lib/components-registry"

export const dynamic = "force-static"
export const revalidate = 3600

function toSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function GET() {
  const list = COMPONENTS.map((c) => ({
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
