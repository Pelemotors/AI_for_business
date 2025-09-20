'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Facebook, Instagram, Linkedin, Home, Users, BookOpen, Package, FileText, HelpCircle } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: Facebook,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 hover:bg-blue-200'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: Instagram,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100 hover:bg-pink-200'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: Linkedin,
      color: 'text-blue-700',
      bgColor: 'bg-blue-100 hover:bg-blue-200'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/972504650155?text=שלום, ראיתי את האתר שלכם ומעניין אותי ליווי AI לעסק שלי',
      icon: MessageCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100 hover:bg-green-200'
    }
  ]

  const navigationLinks = [
    { name: 'בית', href: '/', icon: Home },
    { name: 'למה לבחור בנו', href: '/#benefits', icon: Users },
    { name: 'מה לומדים', href: '/#program', icon: BookOpen },
    { name: 'חבילות ומחירים', href: '/plans', icon: Package },
    { name: 'בלוג ומאמרים', href: '/blog', icon: FileText },
    { name: 'שאלות נפוצות', href: '/#faq', icon: HelpCircle },
    { name: 'יצירת קשר', href: '/contact', icon: MessageCircle }
  ]

  return (
    <footer className="bg-slate-800">
      <div className="container-max py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Logo and Slogan */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-electricBlue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-bold">AI לעסקים קטנים</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              מכניסים את העסק שלך לעולם הדיגיטלי – צעד אחר צעד
            </p>
          </motion.div>

          {/* Middle Column - Navigation */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white text-lg font-bold">ניווט מהיר</h4>
            <div className="grid grid-cols-1 gap-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm group"
                >
                  <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Social Media */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white text-lg font-bold">רשתות חברתיות</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg ${social.bgColor} transition-all duration-200`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className={`h-6 w-6 ${social.color}`} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mb-6"></div>

        {/* Bottom Row - Copyright and Links */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © 2025 כל הזכויות שמורות – AI לעסקים קטנים
          </p>
          <div className="flex gap-6">
            <Link 
              href="/privacy" 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              מדיניות פרטיות
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              תנאי שימוש
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
