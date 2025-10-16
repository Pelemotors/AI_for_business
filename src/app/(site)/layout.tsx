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
  description: 'מדריכים פשוטים ומעשיים לשימוש בבינה מלאכותית בעסק. למדו לבנות אתרים, ליצור תוכן ולהפעיל אוטומציות עם AI – בעברית ובגובה העיניים.',
  keywords: 'AI, בינה מלאכותית, עסקים קטנים, אתר, תוכן, אוטומציה, GPT, Next.js, ChatGPT, שיווק דיגיטלי',
  authors: [{ name: 'AI לעסקים קטנים' }],
  robots: 'index, follow',
  // הוסף כאן את קוד Google Search Console Verification לאחר הרשמה
  // verification: {
  //   google: 'YOUR_VERIFICATION_CODE_HERE',
  // },
  openGraph: {
    title: 'AI לעסקים קטנים – אתר, תוכן ואוטומציות ביום אחד',
    description: 'מדריכים פשוטים ומעשיים לשימוש בבינה מלאכותית בעסק. למדו לבנות אתרים, ליצור תוכן ולהפעיל אוטומציות עם AI.',
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