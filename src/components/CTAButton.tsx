import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary',
  className = ''
}: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium px-6 py-3 rounded-lg transition-colors duration-200"
  
  const variantClasses = variant === 'primary' 
    ? "bg-electricBlue hover:bg-deepPurple text-white" 
    : "border-2 border-electricBlue text-electricBlue hover:bg-electricBlue hover:text-white"
  
  return (
    <Link 
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </Link>
  )
}
