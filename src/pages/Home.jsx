import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sword, Crown, Shield, ChevronDown } from 'lucide-react'

const stats = [
  { icon: <Crown size={22} />, value: '1674', label: 'Coronation Year' },
  { icon: <Shield size={22} />, value: '360+', label: 'Forts Controlled' },
  { icon: <Sword size={22} />, value: '50+', label: 'Major Battles Won' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (

   
    <div ref={containerRef}>
      {/* HERO */}
       
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layers */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          {/* Deep space bg */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(180,70,0,0.25)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(100,40,0,0.3)_0%,transparent_70%)]" />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'linear-gradient(rgba(255,150,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,150,0,0.3) 1px, transparent 1px)', backgroundSize: '80px 80px' }}
          />
        </motion.div>

        {/* Decorative Sword Line */}
        <div className="absolute left-0 right-0 top-[30%] h-px bg-gradient-to-r from-transparent via-[rgba(255,150,0,0.15)] to-transparent" />

        <motion.div style={{ opacity }} className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(255,150,0,0.3)] bg-[rgba(255,100,0,0.08)] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff9500] animate-pulse" />
            <span className="font-sans-custom text-xs text-[#ff9500] tracking-[0.3em] uppercase">The Lion of Maharashtra</span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-gradient leading-[1.1] mb-2">
              Chhatrapati
            </h1>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-[#e8d5a0] leading-[1.1] mb-2">
              Shivaji
            </h1>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient leading-[1.2]">
              Maharaj
            </h1>

             <div className="text-center mt-10">
  <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-gradient leading-[1.1] mb-2">
    Developed
  </h1>

  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#e8d5a0] mb-2">
    by
  </h2>

  <h3 className="font-display text-4xl sm:text-5xl md:text-6xl text-gradient tracking-wide">
    Nishad Nirmal 🚀
  </h3>
</div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-lg sm:text-xl text-[#c8a870] mt-6 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Founder of the Maratha Empire. Warrior. Visionary. Protector of Dharma.
            A king whose courage carved an empire from the Sahyadri mountains.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/timeline">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,120,0,0.6)' }}
                whileTap={{ scale: 0.97 }}
                className="group px-8 py-4 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 text-black font-sans-custom font-bold text-sm tracking-widest uppercase rounded-sm shadow-[0_0_25px_rgba(255,120,0,0.4)] flex items-center gap-2"
              >
                <Sword size={18} className="group-hover:rotate-12 transition-transform" />
                Start The Story
              </motion.button>
            </Link>
            <Link to="/forts">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 border border-[rgba(255,200,0,0.4)] text-[#ffd700] font-sans-custom font-medium text-sm tracking-widest uppercase rounded-sm hover:bg-[rgba(255,150,0,0.08)] transition-colors flex items-center gap-2"
              >
                <Shield size={18} />
                Explore Forts
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 max-w-xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-2 py-4 px-2 rounded-lg border border-[rgba(255,150,0,0.15)] bg-[rgba(255,100,0,0.04)]"
              >
                <span className="text-[#ff9500]">{stat.icon}</span>
                <span className="font-display text-xl sm:text-2xl text-[#ffd700]">{stat.value}</span>
                <span className="font-sans-custom text-[10px] sm:text-xs text-[#8a7050] tracking-wider uppercase text-center">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6a5030]"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative z-10 py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Portrait Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-[rgba(255,150,0,0.25)] shadow-[0_0_60px_rgba(255,100,0,0.15)]">
                {/* Illustrated portrait using CSS art */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a0800] to-[#0a0400]">
                  {/* Decorative frame */}
                  <div className="absolute inset-3 border border-[rgba(255,180,0,0.2)] rounded-sm" />
                  <div className="absolute inset-6 border border-[rgba(255,180,0,0.1)] rounded-sm" />
                  {/* Central figure silhouette - stylized */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-64">
                      {/* Helmet/crown */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-6 bg-gradient-to-r from-[#d4a800] to-[#ff9500] rounded-t-full" />
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1 h-8 bg-[#ffd700]" />
                      {/* Head */}
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-24 bg-gradient-to-b from-[#8b5e3c] to-[#6b4328] rounded-full" />
                      {/* Mustache area */}
                      <div className="absolute top-22 left-1/2 -translate-x-1/2 w-12 h-2 bg-[#2a1000] rounded-full mt-20" />
                      {/* Body/armor */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-36 bg-gradient-to-b from-[#4a2800] to-[#2a1400] rounded-t-3xl" />
                      {/* Armor details */}
                      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-16 h-1 bg-[rgba(255,180,0,0.4)] rounded-full" />
                      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-[rgba(255,180,0,0.4)]" />
                    </div>
                  </div>
                  {/* Text overlay */}
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <div className="font-display text-xs text-[rgba(255,215,0,0.5)] tracking-widest">1630 – 1680</div>
                  </div>
                </div>
              </div>
              {/* Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-900/0 via-orange-800/10 to-orange-900/0 rounded-lg blur-xl -z-10" />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="font-display text-xs text-[#ff9500] tracking-[0.3em] uppercase mb-4">The Great King</div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#ffd700] mb-6 leading-tight">
                A Legend Born in the Sahyadris
              </h2>
              <div className="space-y-4 font-body text-base text-[#c8a870] leading-relaxed">
                <p>
                  Born on February 19, 1630, at Shivneri Fort, Shivaji Bhonsale would grow to become 
                  one of history's greatest warrior-kings. From childhood, he was deeply influenced 
                  by his mother Jijabai's teachings of righteousness and courage.
                </p>
                <p>
                  At just 16, he captured Torna Fort — the first of hundreds of victories that would
                  forge the Maratha Empire. His genius lay not just in warfare but in administration,
                  diplomacy, and his revolutionary navy — the first in Indian history.
                </p>
                <p>
                  Shivaji Maharaj established <em>Hindavi Swarajya</em> — self-rule for the people —
                  treating all religions with equal respect and his subjects with genuine care.
                </p>
              </div>
              <Link to="/timeline">
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-8 font-sans-custom text-sm text-[#ff9500] tracking-widest uppercase flex items-center gap-2 hover:text-[#ffd700] transition-colors"
                >
                  Read The Full Story →
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="relative z-10 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(150,60,0,0.12),transparent)]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <div className="font-display text-6xl text-[rgba(255,150,0,0.2)] mb-4">"</div>
          <blockquote className="font-body text-xl sm:text-2xl text-[#e8d5a0] italic leading-relaxed mb-6">
            Mountains that echo with valor, rivers that flow with courage — this is Maharashtra, 
            and this is where I built my dream of Swarajya.
          </blockquote>
          <cite className="font-sans-custom text-sm text-[#8a7050] tracking-widest uppercase not-italic">
            — Chhatrapati Shivaji Maharaj
          </cite>
        </motion.div>
      </section>

      {/* QUICK NAVIGATION CARDS */}
      <section className="relative z-10 pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-16" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-center text-2xl sm:text-3xl text-[#ffd700] mb-12"
          >
            Explore The Legacy
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { path: '/timeline', icon: '⚔️', title: 'Story Timeline', desc: 'From birth to coronation — the epic journey' },
              { path: '/forts', icon: '🏰', title: 'Mountain Forts', desc: 'Torna, Raigad, Sinhagad and more' },
              { path: '/gallery', icon: '🎨', title: 'Gallery', desc: 'Art, paintings and visual history' },
              { path: '/contact', icon: '📜', title: 'Connect', desc: 'Share your tribute to the great king' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={card.path}>
                  <div className="fort-card p-6 rounded-lg cursor-pointer h-full">
                    <div className="text-3xl mb-4">{card.icon}</div>
                    <h3 className="font-display text-sm text-[#ffd700] mb-2">{card.title}</h3>
                    <p className="font-body text-sm text-[#8a7050] leading-relaxed">{card.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
