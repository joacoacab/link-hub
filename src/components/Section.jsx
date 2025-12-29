import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'

export default function Section({ title, subtitle, category, children, className = '' }) {
  if (!children || (Array.isArray(children) && children.length === 0)) {
    return null
  }

  const IconComponent = category === 'personal' 
    ? LucideIcons.User 
    : category === 'profesional' 
    ? LucideIcons.Briefcase 
    : null

  return (
    <motion.section
      className={`mb-10 md:mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          {IconComponent && (
            <div className={`
              w-8 h-8 rounded-lg flex items-center justify-center
              ${category === 'personal' 
                ? 'bg-accent/20 text-accent' 
                : 'bg-accent/20 text-accent'
              }
            `}>
              <IconComponent className="w-4 h-4" strokeWidth={2} />
            </div>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="text-text-secondary text-sm md:text-base ml-11">
            {subtitle}
          </p>
        )}
        {/* Línea divisoria elegante */}
        <div className={`
          mt-4 h-px w-full
          ${category === 'personal' 
            ? 'bg-gradient-to-r from-transparent via-accent/30 to-transparent' 
            : 'bg-gradient-to-r from-transparent via-accent/30 to-transparent'
          }
        `} />
      </div>
      <div className="space-y-3 md:space-y-4">
        {children}
      </div>
    </motion.section>
  )
}
