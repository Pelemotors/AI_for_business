import Link from 'next/link'
import { Mail, Phone, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">AI לעסקים קטנים</h3>
            <p className="text-gray-300 text-sm">
              מקימים דף מכירה חי, מייצרים תכנים, ומחברים טופס לידים—בזמן שיחה אחת.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-md font-semibold mb-4">צור קשר</h4>
            <div className="space-y-2">
              <a 
                href="mailto:info@ai-small-business.com" 
                className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Mail className="h-4 w-4 mr-2" />
                info@ai-small-business.com
              </a>
              <a 
                href="tel:+972501234567" 
                className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Phone className="h-4 w-4 mr-2" />
                050-123-4567
              </a>
              <a 
                href="https://wa.me/972501234567?text=שלום, ראיתי את האתר שלכם ומעניין אותי ליווי AI לעסק שלי"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-md font-semibold mb-4">קישורים</h4>
            <div className="space-y-2">
              <Link href="/value" className="block text-gray-300 hover:text-white transition-colors text-sm">
                מה AI עושה
              </Link>
              <Link href="/demos" className="block text-gray-300 hover:text-white transition-colors text-sm">
                הדגמות
              </Link>
              <Link href="/plans" className="block text-gray-300 hover:text-white transition-colors text-sm">
                חבילות
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                צור קשר
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AI לעסקים קטנים. כל הזכויות שמורות.
            </p>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              מדיניות פרטיות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
