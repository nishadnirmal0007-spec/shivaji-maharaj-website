import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-[#040200] border-t border-[rgba(255,150,0,0.15)] py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display text-lg text-[#ffd700] mb-3">Chhatrapati Shivaji Maharaj</div>
            <p className="text-[#8a7050] text-sm leading-relaxed font-body">
              Honoring the legacy of the great Maratha warrior-king who taught the world
              what courage, justice, and visionary leadership truly means.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-display text-sm text-[#ff9500] mb-4 tracking-wider">Explore</div>
            <div className="flex flex-col gap-2">
              {[['/', 'Home'], ['/timeline', 'Story Timeline'], ['/forts', 'Forts'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([path, label]) => (
                <Link key={path} to={path}
                  className="text-[#8a7050] hover:text-[#ffd700] transition-colors text-sm font-body"
                >
                  → {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div>
            <div className="font-display text-sm text-[#ff9500] mb-4 tracking-wider">Words of Wisdom</div>
            <blockquote className="text-[#c8a870] text-sm font-body italic leading-relaxed border-l-2 border-[rgba(255,150,0,0.4)] pl-4">
              "Even if there were a sword in the hands of everyone, it is the will which establishes power."
            </blockquote>
            <p className="text-[#6a5030] text-xs mt-2 font-sans-custom">— Chhatrapati Shivaji Maharaj</p>
          </div>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#4a3a20] text-xs font-sans-custom tracking-wider">
            JAY SHIVAJI | JAY BHAVANI
          </p>
          <p className="text-[#4a3a20] text-xs font-sans-custom">
            © 2024 Shivaji Maharaj Legacy. Built with respect & reverence.
          </p>
        </div>
      </div>
    </footer>
  )
}
