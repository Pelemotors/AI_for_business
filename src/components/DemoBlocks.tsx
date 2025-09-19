import { motion } from 'framer-motion'
import { Clock, TrendingUp, Wallet } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

export default function DemoBlocks() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Hero Sample */}
      <motion.div
        className="bg-gradient-to-r from-electricBlue to-deepPurple text-white p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">
          אתר, תוכן ו־CTA—בפחות מכמה שעות
        </h2>
        <p className="text-xl text-blue-100 mb-6">
          דף מכירה מבוסס GPT + פריסה ל־Vercel בלייב
        </p>
        <CTAButton href="/demos" variant="secondary" className="text-lg px-8 py-4">
          צפו בפיילוט לדוגמה
        </CTAButton>
      </motion.div>

      {/* Benefits Sample */}
      <motion.div
        className="p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-ink mb-6 text-center">היתרונות</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-electricBlue/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="h-6 w-6 text-electricBlue" />
            </div>
            <h4 className="font-semibold text-ink mb-2">חסכון בזמן</h4>
            <p className="text-sm text-slate">90% פחות זמן על תפעול ידני</p>
          </div>
          <div className="text-center">
            <div className="bg-electricBlue/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-electricBlue" />
            </div>
            <h4 className="font-semibold text-ink mb-2">יותר פניות</h4>
            <p className="text-sm text-slate">CTA ברור ווואטסאפ זמין</p>
          </div>
          <div className="text-center">
            <div className="bg-electricBlue/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Wallet className="h-6 w-6 text-electricBlue" />
            </div>
            <h4 className="font-semibold text-ink mb-2">ללא עלויות</h4>
            <p className="text-sm text-slate">GitHub + Vercel חינמי</p>
          </div>
        </div>
      </motion.div>

      {/* CTA Sample */}
      <motion.div
        className="bg-gray-50 p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <CTAButton href="/contact" className="text-lg px-8 py-4">
          קבעו שיחת אבחון חינם
        </CTAButton>
      </motion.div>
    </div>
  )
}
