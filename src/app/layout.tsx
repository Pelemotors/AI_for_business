import type { Metadata } from 'next'
import { Rubik, Heebo } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const rubik = Rubik({ 
  subsets: ['hebrew', 'latin'],
  variable: '--font-rubik',
  display: 'swap',
})

const heebo = Heebo({ 
  subsets: ['hebrew'],
  variable: '--font-heebo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI לנוער - קורס חווייתי לפיתוח יצירתיות ותכנות',
  description: 'קורס AI לנוער שמפתח יצירתיות, חשיבה ביקורתית ויכולות תכנות. שיעור ניסיון חינם!',
  keywords: ['AI לנוער', 'קורס תכנות', 'למידה יצירתית', 'חשיבה ביקורתית', 'פיתוח מיומנויות'],
  authors: [{ name: 'AI לנוער' }],
  openGraph: {
    title: 'AI לנוער - קורס חווייתי לפיתוח יצירתיות ותכנות',
    description: 'קורס AI לנוער שמפתח יצירתיות, חשיבה ביקורתית ויכולות תכנות. שיעור ניסיון חינם!',
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
    <html lang="he" dir="rtl">
      <body className={`${rubik.variable} ${heebo.variable} font-heebo`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
