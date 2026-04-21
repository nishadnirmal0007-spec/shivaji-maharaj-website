import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

export default function MusicToggle({ playing, toggleMusic }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center bg-[rgba(20,8,0,0.85)] border border-[rgba(255,180,0,0.4)] backdrop-blur-md shadow-[0_0_20px_rgba(255,100,0,0.3)] hover:shadow-[0_0_30px_rgba(255,150,0,0.5)] transition-all duration-300"
      title={playing ? "Mute music" : "Play ambient music"}
    >
      <motion.div
        animate={playing ? { rotate: [0, 10, -10, 0] } : {}}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {playing ? (
          <Volume2 size={20} className="text-[#ffd700]" />
        ) : (
          <VolumeX size={20} className="text-[#c8a870]" />
        )}
      </motion.div>

      {playing && (
        <div className="absolute inset-0 rounded-full border-2 border-[#ffd700] opacity-30 animate-ping" />
      )}
    </motion.button>
  )
}