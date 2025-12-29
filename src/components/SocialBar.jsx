import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'

const iconMap = {
  Instagram: LucideIcons.Instagram,
  Linkedin: LucideIcons.Linkedin,
  Twitter: LucideIcons.Twitter,
  Github: LucideIcons.Github,
  Mail: LucideIcons.Mail,
  Globe: LucideIcons.Globe,
}

export default function SocialBar({ social = [] }) {
  if (!social || social.length === 0) return null

  return (
    <motion.div
      className="flex justify-center gap-4 mt-12 pt-8 border-t border-border-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      {social.map((item, index) => {
        const IconComponent = iconMap[item.platform] || LucideIcons.Link

        return (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-10 h-10 md:w-12 md:h-12
              rounded-full flex items-center justify-center
              bg-surface border border-border
              text-text-secondary hover:text-accent
              hover:border-accent hover:bg-surface-hover
              transition-all duration-200
              focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
            "
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={item.platform}
          >
            <IconComponent className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
          </motion.a>
        )
      })}
    </motion.div>
  )
}

