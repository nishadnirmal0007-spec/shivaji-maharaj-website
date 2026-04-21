import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const artworks = [
  { title: 'The Warrior King', category: 'Portrait', year: '1674', desc: 'Chhatrapati Shivaji in royal coronation attire, draped in saffron and gold.', bg: 'from-[#3a1500] via-[#1a0800] to-[#0a0400]', emoji: '👑', accent: '#ffd700' },
  { title: 'Battle of Pratapgad', category: 'Battle Scene', year: '1659', desc: 'The legendary confrontation between Shivaji and Afzal Khan in the hills of Satara.', bg: 'from-[#2a0a00] via-[#180500] to-[#0a0200]', emoji: '⚔️', accent: '#ff4400' },
  { title: 'Torna Conquest', category: 'Historical', year: '1646', desc: 'The sixteen-year-old Shivaji plants the Maratha flag atop Torna Fort at dawn.', bg: 'from-[#1a1000] via-[#100800] to-[#060400]', emoji: '🚩', accent: '#ff6600' },
  { title: 'Raigad Coronation', category: 'Ceremony', year: '1674', desc: 'The grand coronation ceremony — Shivaji is crowned the first Chhatrapati Maratha king.', bg: 'from-[#2a1800] via-[#150e00] to-[#080500]', emoji: '✨', accent: '#ffcc00' },
  { title: 'Escape from Agra', category: 'Adventure', year: '1666', desc: 'The daring escape from Aurangzeb\'s Mughal court hidden in sweet-boxes.', bg: 'from-[#0a1800] via-[#050f00] to-[#020800]', emoji: '🌙', accent: '#00c4ff' },
  { title: 'The Sahyadri Mountains', category: 'Landscape', year: 'Eternal', desc: 'The rugged Sahyadri range — the home of the Maratha spirit and countless forts.', bg: 'from-[#101a10] via-[#080e08] to-[#030703]', emoji: '🏔️', accent: '#60b060' },
  { title: 'The Maratha Navy', category: 'Naval', year: '1660s', desc: 'Shivaji\'s revolutionary fleet — the first organized Indian navy — patrols the Konkan coast.', bg: 'from-[#001020] via-[#000a14] to-[#00060e]', emoji: '⚓', accent: '#0090c0' },
  { title: 'Jijabai & Young Shivaji', category: 'Portrait', year: '1635', desc: 'A tender depiction of Jijabai telling young Shivaji the tales of Rama and the great warriors.', bg: 'from-[#200a20] via-[#120514] to-[#080308]', emoji: '🙏', accent: '#cc88ff' },
  { title: 'The Tiger Claws (Wagh Nakh)', category: 'Artefact', year: '1659', desc: 'The legendary weapon hidden in Shivaji\'s palm — iron claws that changed history.', bg: 'from-[#1a0000] via-[#0e0000] to-[#060000]', emoji: '🐯', accent: '#ff2200' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Portrait', 'Battle Scene', 'Historical', 'Ceremony', 'Naval', 'Landscape', 'Artefact', 'Adventure']
  const filtered = filter === 'All' ? artworks : artworks.filter(a => a.category === filter)

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_10%,rgba(100,40,0,0.1),transparent)]" />
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="font-sans-custom text-xs text-[#ff9500] tracking-[0.4em] uppercase mb-4">Art & Visual History</div>
          <h1 className="font-display text-3xl sm:text-5xl text-gradient mb-4">Gallery</h1>
          <p className="font-body text-lg text-[#c8a870] max-w-2xl mx-auto">A visual journey through the life, battles, and legacy of Chhatrapati Shivaji Maharaj.</p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full font-sans-custom text-xs tracking-wider uppercase transition-all duration-300 border ${
                filter === cat
                  ? 'bg-[rgba(255,120,0,0.2)] border-[rgba(255,150,0,0.5)] text-[#ffd700]'
                  : 'border-[rgba(255,150,0,0.15)] text-[#6a5030] hover:border-[rgba(255,150,0,0.3)] hover:text-[#c8a870]'
              }`}
            >{cat}</button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((art, i) => (
              <motion.div
                key={art.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelected(art)}
                className="gallery-item rounded-lg cursor-pointer group relative overflow-hidden"
              >
                {/* Artwork area */}
                <div className={`relative h-52 bg-gradient-to-br ${art.bg} flex items-center justify-center overflow-hidden`}>
                  {/* Art frame decoration */}
                  <div className="absolute inset-2 border border-[rgba(255,150,0,0.1)] rounded pointer-events-none" />
                  <div className="absolute inset-4 border border-[rgba(255,150,0,0.05)] rounded pointer-events-none" />
                  {/* Texture */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,150,0,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,100,0,0.15) 0%, transparent 50%)' }} />
                  {/* Main visual */}
                  <div className="text-center z-10">
                    <div className="text-6xl mb-3 drop-shadow-lg">{art.emoji}</div>
                    <div className="font-sans-custom text-xs tracking-widest" style={{ color: art.accent }}>{art.year}</div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end justify-center pb-4">
                    <div className="flex items-center gap-2 text-white">
                      <ZoomIn size={16} />
                      <span className="font-sans-custom text-xs tracking-wider">View Details</span>
                    </div>
                  </div>
                </div>
                {/* Info */}
                <div className="p-4 bg-[rgba(12,5,0,0.95)]">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-sm text-[#ffd700] mb-1">{art.title}</h3>
                      <div className="font-sans-custom text-xs text-[#6a5030]">{art.category}</div>
                    </div>
                  </div>
                  <p className="font-body text-xs text-[#806040] mt-2 leading-relaxed line-clamp-2">{art.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} transition={{ type: 'spring', damping: 25 }} onClick={e => e.stopPropagation()} className="relative w-full max-w-lg rounded-xl overflow-hidden border border-[rgba(255,150,0,0.3)] bg-[#0c0500] shadow-[0_0_100px_rgba(255,100,0,0.2)]">
              <div className={`h-64 bg-gradient-to-br ${selected.bg} flex items-center justify-center relative`}>
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `radial-gradient(circle at 30% 30%, ${selected.accent}30 0%, transparent 60%), radial-gradient(circle at 70% 70%, ${selected.accent}20 0%, transparent 60%)` }} />
                <div className="text-8xl z-10">{selected.emoji}</div>
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-[#c8a870] hover:text-white"><X size={18} /></button>
                <div className="absolute bottom-4 left-4 px-2 py-1 rounded text-xs font-sans-custom tracking-wider" style={{ background: `${selected.accent}20`, color: selected.accent, border: `1px solid ${selected.accent}40` }}>{selected.category}</div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="font-display text-xl text-[#ffd700]">{selected.title}</h2>
                  <span className="font-sans-custom text-xs text-[#8a7050]">{selected.year}</span>
                </div>
                <p className="font-body text-base text-[#c8a870] leading-relaxed">{selected.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
