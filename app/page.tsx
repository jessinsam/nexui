import { Nav } from "@/components/nexui/nav"
import { Hero } from "@/components/nexui/hero"
import { Installation } from "@/components/nexui/installation"
import { CLI } from "@/components/nexui/cli"
import { Gallery } from "@/components/nexui/gallery"
import { Theming } from "@/components/nexui/theming"
import { CodeSnippets } from "@/components/nexui/code-snippets"
import { Footer } from "@/components/nexui/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Gallery />
      <Installation />
      <CLI />
      <Theming />
      <CodeSnippets />
      <Footer />
    </main>
  )
}
