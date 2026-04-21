import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Layers, Shield, Calendar } from 'lucide-react'

const forts = [
  {
    name: 'Torna Fort', aka: 'Prachandagad', year: 'Captured 1646', elevation: '1,403 m',
    district: 'Pune, Maharashtra', significance: 'First fort captured by Shivaji at age 16 — the birth of Swarajya',
    color: '#ff6600', emoji: '⚔️',
    description: 'In 1646, the sixteen-year-old Shivaji seized Torna Fort from the Bijapur Sultanate — the spark that lit the Maratha Empire. The treasure found within funded the construction of Rajgad Fort.',
    features: ['Highest fort in Pune', 'Twin peaks', 'Ancient Mengai Devi temple', 'Panoramic Sahyadri views'],
    bg: 'from-[#3a1000] to-[#1a0800]',
  },
  {
    name: 'Raigad Fort', aka: 'Gibraltar of the East', year: 'Capital from 1674', elevation: '820 m',
    district: 'Raigad, Maharashtra', significance: 'Capital of the Maratha Empire — site of the coronation',
    color: '#ffd700', emoji: '👑',
    description: 'Raigad was the jewel of the Maratha Empire where Shivaji was crowned Chhatrapati on June 6, 1674. His samadhi (tomb) is here, making it a sacred pilgrimage site for millions.',
    features: ['Coronation throne site', 'Jagdishwar Temple', 'Shivaji\'s Samadhi', 'Ancient ropeway ruins', '300-shop market ruins'],
    bg: 'from-[#2a1800] to-[#120800]',
  },
  {
    name: 'Sinhagad Fort', aka: 'Lion\'s Fort', year: 'Battle of 1670', elevation: '1,294 m',
    district: 'Pune, Maharashtra', significance: 'Site of Tanaji Malusare\'s heroic sacrifice',
    color: '#ff4400', emoji: '🦁',
    description: 'In 1670, Tanaji Malusare led a daring night assault using a monitor lizard to scale the cliff. Though Tanaji died in the battle, the fort was won. Shivaji wept: "The fort is won, but the lion is gone."',
    features: ['Tanaji Malusare memorial', 'Devaki-Krishna Temple', 'Kalyan Darwaja gate', 'Historic water cisterns'],
    bg: 'from-[#2a0800] to-[#100400]',
  },
  {
    name: 'Pratapgad Fort', aka: 'Fort of Valor', year: 'Built 1656', elevation: '1,080 m',
    district: 'Satara, Maharashtra', significance: 'Site of the legendary killing of Afzal Khan (1659)',
    color: '#ff9500', emoji: '🗡️',
    description: 'Here in 1659, Shivaji killed Afzal Khan — the feared Bijapur general sent to destroy him. Wearing hidden armor and tiger-claw weapons, Shivaji turned the general\'s ambush into a decisive victory.',
    features: ['Bhavani Devi Temple', 'Afzal Khan meeting site', 'Afzal Khan\'s tomb nearby', 'Twin-tier fort design'],
    bg: 'from-[#2a1200] to-[#100800]',
  },
  {
    name: 'Rajgad Fort', aka: 'King of Forts', year: 'Capital 1648–1674', elevation: '1,376 m',
    district: 'Pune, Maharashtra', significance: 'Shivaji\'s first capital for 26 years',
    color: '#c0a000', emoji: '🏔️',
    description: 'Rajgad served as Shivaji\'s first capital for 26 years. One of Maharashtra\'s largest forts, it housed palaces, temples, and storage across three major ridges and was never fully captured.',
    features: ['Three machis (plateaus)', 'Pali Darwaja gate', 'Padmavati Temple', 'Shivaji\'s palace ruins'],
    bg: 'from-[#201800] to-[#0e0c00]',
  },
  {
    name: 'Murud-Janjira', aka: 'The Unconquered Fort', year: 'Never captured', elevation: 'Sea level',
    district: 'Raigad, Maharashtra', significance: 'The only fort Shivaji could never conquer',
    color: '#00b4d8', emoji: '⚓',
    description: 'An island fortress controlled by the Siddi rulers that withstood every Maratha assault. It inspired Shivaji to build India\'s first organized naval fleet and construct Sindhudurg as a rival sea fort.',
    features: ['22 bastions on an island', 'Freshwater wells inside', 'Never conquered in 350 years', 'Siddi clan history'],
    bg: 'from-[#001a20] to-[#000e14]',
  },
]

export default function Forts() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_10%,rgba(120,50,0,0.1),transparent)]" />
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <div className="font-sans-custom text-xs text-[#ff9500] tracking-[0.4em] uppercase mb-4">The Stone Guardians</div>
          <h1 className="font-display text-3xl sm:text-5xl text-gradient mb-4">Forts of the Maratha Empire</h1>
          <p className="font-body text-lg text-[#c8a870] max-w-2xl mx-auto">Each fort is a chapter in the story of Swarajya — carved from the Sahyadri mountains, built with sacrifice, defended with blood.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {forts.map((fort, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} onClick={() => setSelected(fort)} className="fort-card rounded-lg overflow-hidden cursor-pointer group">
              <div className={`relative h-40 bg-gradient-to-br ${fort.bg} flex items-center justify-center`}>
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 20px,rgba(255,150,0,0.4) 20px,rgba(255,150,0,0.4) 21px),repeating-linear-gradient(90deg,transparent,transparent 20px,rgba(255,150,0,0.4) 20px,rgba(255,150,0,0.4) 21px)' }} />
                <div className="text-center z-10">
                  <div className="text-5xl mb-2">{fort.emoji}</div>
                  <div className="font-sans-custom text-xs tracking-widest" style={{ color: fort.color }}>{fort.year}</div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base mb-0.5" style={{ color: fort.color }}>{fort.name}</h3>
                <div className="font-body italic text-[#6a5030] text-xs mb-2">{fort.aka}</div>
                <p className="font-body text-sm text-[#a08060] leading-relaxed mb-4">{fort.significance}</p>
                <div className="flex items-center gap-1 text-[#6a5030]">
                  <MapPin size={12} /><span className="font-sans-custom text-xs">{fort.district}</span>
                </div>
                <div className="mt-4 font-sans-custom text-xs tracking-wider uppercase flex items-center gap-1" style={{ color: fort.color }}>Read History →</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9 }} transition={{ type: 'spring', damping: 25 }} onClick={e => e.stopPropagation()} className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg border border-[rgba(255,150,0,0.3)] bg-[#0c0500] shadow-[0_0_80px_rgba(255,100,0,0.2)]">
              <div className={`relative h-32 bg-gradient-to-br ${selected.bg} flex items-center justify-center`}>
                <div className="text-center"><div className="text-5xl mb-1">{selected.emoji}</div><div className="font-sans-custom text-xs tracking-widest" style={{ color: selected.color }}>{selected.year}</div></div>
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-[#c8a870] hover:text-white transition-colors"><X size={16} /></button>
              </div>
              <div className="p-6 sm:p-8">
                <h2 className="font-display text-2xl mb-1" style={{ color: selected.color }}>{selected.name}</h2>
                <div className="font-body italic text-[#8a7050] mb-6">{selected.aka}</div>
                <p className="font-body text-base text-[#c8a870] leading-relaxed mb-6">{selected.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[['📍', 'Location', selected.district], ['⛰️', 'Elevation', selected.elevation], ['📅', 'Period', selected.year], ['🛡️', 'Significance', selected.significance]].map(([icon, label, val], i) => (
                    <div key={i} className="bg-[rgba(255,100,0,0.05)] border border-[rgba(255,150,0,0.1)] rounded-md p-3">
                      <div className="font-sans-custom text-xs tracking-wider uppercase text-[#6a5030] mb-1">{icon} {label}</div>
                      <div className="font-body text-sm text-[#c8a870]">{val}</div>
                    </div>
                  ))}
                </div>
                <div className="font-sans-custom text-xs text-[#ff9500] tracking-widest uppercase mb-3">Notable Features</div>
                <div className="flex flex-wrap gap-2">
                  {selected.features.map((f, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-sans-custom border border-[rgba(255,150,0,0.2)] text-[#a08060] bg-[rgba(255,100,0,0.05)]">{f}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
