import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'

export default function LinkButton({ link, index = 0 }) {
  const IconComponent = LucideIcons[link.icon] || LucideIcons.Link

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      y: -4,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      y: -2,
    }
  }

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative flex items-center gap-4 p-5 md:p-6
        rounded-2xl border border-border
        bg-surface backdrop-blur-sm
        text-text-primary no-underline
        transition-all duration-200
        ${link.highlight 
          ? 'border-accent/50 shadow-glow bg-surface-hover' 
          : 'hover:border-border-hover hover:bg-surface-hover'
        }
        hover:shadow-card-hover
        focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
      `}
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      aria-label={`${link.title}${link.subtitle ? ` - ${link.subtitle}` : ''}`}
    >
      {/* Efecto de brillo al hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icono */}
      <div className={`
        flex-shrink-0 w-12 h-12 md:w-14 md:h-14
        rounded-xl flex items-center justify-center
        bg-accent/10 group-hover:bg-accent/20
        transition-colors duration-200
        ${link.highlight ? 'bg-accent/20' : ''}
      `}>
        <IconComponent 
          className="w-6 h-6 md:w-7 md:h-7 text-accent group-hover:text-accent-light transition-colors" 
          strokeWidth={2}
        />
      </div>

      {/* Contenido */}
      <div className="flex-1 min-w-0 relative z-10">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg md:text-xl font-semibold text-text-primary group-hover:text-text-primary transition-colors">
            {link.title}
          </h3>
          {link.category === 'pro' && (
            <span className="
              px-2 py-0.5 text-xs font-medium rounded-md
              bg-accent/10 text-accent border border-accent/20
              group-hover:bg-accent/20 group-hover:border-accent/30
              transition-colors
            ">
              Pro
            </span>
          )}
        </div>
        {link.subtitle && (
          <p className="text-sm md:text-base text-text-secondary group-hover:text-text-secondary transition-colors">
            {link.subtitle}
          </p>
        )}
      </div>

      {/* Flecha */}
      <div className="flex-shrink-0 relative z-10">
        <motion.div
          className="text-text-muted group-hover:text-accent transition-colors"
          initial={{ x: 0 }}
          whileHover={{ x: 6 }}
          transition={{ duration: 0.2 }}
        >
          <LucideIcons.ArrowRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
        </motion.div>
      </div>
    </motion.a>
  )
}

