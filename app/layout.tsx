import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/nexui/scroll-to-top'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'NexUI — Beautifully designed components',
  description:
    'A set of beautifully designed, accessible components you can customize, extend, and build on. Open source. Open code. Inspired by shadcn/ui.',
  metadataBase: new URL('https://www.nexui.dev'),
  openGraph: {
    title: 'NexUI — Beautifully designed components',
    description: 'Copy-paste UI components built with Tailwind CSS and React. Inspired by shadcn/ui.',
    url: 'https://www.nexui.dev',
    siteName: 'NexUI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexUI',
    description: 'Copy-paste UI components built with Tailwind CSS and React.',
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
