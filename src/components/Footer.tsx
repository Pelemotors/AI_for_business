import Link from 'next/link'
import { Phone, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* מידע כללי */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">AI לנוער</h3>
            <p className="text-gray-300 mb-4">
              קורס חווייתי שמפתח יצירתיות, חשיבה ביקורתית ויכולות תכנות
            </p>
            <p className="text-gray-400 text-sm">
              העתיד כבר כאן – תלמדו להשתמש ב-AI עכשיו!
            </p>
          </div>

          {/* קישורים מהירים */}
          <div>
            <h4 className="text-lg font-semibold mb-4">קישורים מהירים</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/learn" className="text-gray-300 hover:text-primary-400 transition-colors">
                  מה לומדים
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  על המרצה
                </Link>
              </li>
              <li>
                <Link href="/why" className="text-gray-300 hover:text-primary-400 transition-colors">
                  למה זה חשוב
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-gray-300 hover:text-primary-400 transition-colors">
                  תוצרים
                </Link>
              </li>
            </ul>
          </div>

          {/* פרטי התקשרות */}
          <div>
            <h4 className="text-lg font-semibold mb-4">צור קשר</h4>
            <div className="space-y-3">
              <a
                href="tel:+972504650155"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Phone size={18} className="ml-2" />
                050-465-0155
              </a>
              <a
                href="mailto:galsamama@gmail.com"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Mail size={18} className="ml-2" />
                galsamama@gmail.com
              </a>
              <a
                href="https://wa.me/972504650155?text=שלום, אני מתעניין בחוג AI לנוער"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
              >
                <MessageCircle size={18} className="ml-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* קו תחתון */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 AI לנוער. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  )
}
