import { motion } from 'framer-motion'

export default function ProfileHeader({ profile }) {
  if (!profile) return null

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.header
      className="text-center mb-12 md:mb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="inline-block mb-6 relative"
        variants={avatarVariants}
      >
        <div className="relative">
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-border shadow-card"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
        {!profile.avatarUrl && (
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-surface border-4 border-border flex items-center justify-center text-4xl">
            👤
          </div>
        )}
      </motion.div>

      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-text-primary via-text-secondary to-text-primary bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {profile.name}
      </motion.h1>

      {profile.handle && (
        <motion.p
          className="text-text-muted text-sm md:text-base mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {profile.handle}
        </motion.p>
      )}

      {profile.bio && (
        <motion.p
          className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {profile.bio}
        </motion.p>
      )}
    </motion.header>
  )
}

