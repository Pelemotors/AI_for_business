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
  title: 'AI לעסקים קטנים – למדו להשתמש בבינה מלאכותית בעסק | ChatGPT בעברית',
  description: 'סדנאות והדרכות מעשיות לשימוש בבינה מלאכותית בעסקים קטנים. למדו ChatGPT, כלי AI ואוטומציה לעסק. בעברית פשוטה, בגובה העיניים.',
  keywords: 'ChatGPT, בינה מלאכותית, AI לעסקים קטנים, כלי AI, אוטומציה לעסקים, בינה מלאכותית בעברית, סדנת AI, ליווי AI, GPT לעסקים',
  authors: [{ name: 'AI לעסקים קטנים' }],
  robots: 'index, follow',
  // הוסף כאן את קוד Google Search Console Verification לאחר הרשמה
  // verification: {
  //   google: 'YOUR_VERIFICATION_CODE_HERE',
  // },
  openGraph: {
    title: 'AI לעסקים קטנים – סדנאות ChatGPT ובינה מלאכותית',
    description: 'למדו להשתמש בכלי AI בעסק שלכם - סדנאות מעשיות בעברית. מדריכים על ChatGPT, אוטומציה וכלי AI לעסקים קטנים.',
    type: 'website',
    locale: 'he_IL',
    url: 'https://ai-for-business-one.vercel.app',
    siteName: 'AI לעסקים קטנים',
  },
  alternates: {
    canonical: 'https://ai-for-business-one.vercel.app',
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