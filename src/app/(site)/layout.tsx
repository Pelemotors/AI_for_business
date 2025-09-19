import type { Metadata } from 'next'
import { Heebo, Rubik } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

const heebo = Heebo({
  subsets: ['hebrew'],
  variable: '--font-heebo',
})

const rubik = Rubik({
  subsets: ['hebrew'],
  variable: '--font-rubik',
})

export const metadata: Metadata = {
  title: 'AI לעסקים קטנים – אתר, תוכן ואוטומציות ביום אחד',
  description: 'מקימים דף מכירה חי ב־Next.js ומחברים טפסים ו־WhatsApp—בזמן שיחה אחת.',
  keywords: 'AI, עסקים קטנים, אתר, תוכן, אוטומציה, GPT, Next.js',
  authors: [{ name: 'AI לעסקים קטנים' }],
  openGraph: {
    title: 'AI לעסקים קטנים – אתר, תוכן ואוטומציות ביום אחד',
    description: 'מקימים דף מכירה חי ב־Next.js ומחברים טפסים ו־WhatsApp—בזמן שיחה אחת.',
    type: 'website',
    locale: 'he_IL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${rubik.variable}`}>
      <body className="font-heebo">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
