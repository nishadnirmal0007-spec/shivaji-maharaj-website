import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/timeline', label: 'Story' },
  { path: '/forts', label: 'Forts' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(8,3,0,0.95)] backdrop-blur-xl border-b border-[rgba(255,150,0,0.2)] shadow-[0_4px_30px_rgba(255,100,0,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center text-black font-bold text-lg shadow-[0_0_20px_rgba(255,150,0,0.5)]">
              ॐ
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-sm text-[#ffd700] leading-tight">Chhatrapati</div>
              <div className="font-display text-xs text-[#ff9500] leading-tight">Shivaji Maharaj</div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link relative font-sans-custom text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#ffd700] active'
                    : 'text-[#c8a870] hover:text-[#ffd700]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/timeline">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-gradient-to-r from-orange-600 to-yellow-600 text-black font-sans-custom font-semibold text-sm rounded-sm tracking-wider uppercase shadow-[0_0_20px_rgba(255,120,0,0.4)] hover:shadow-[0_0_30px_rgba(255,120,0,0.7)] transition-shadow"
              >
                Start Story
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#ffd700] p-2"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[rgba(8,3,0,0.98)] border-t border-[rgba(255,150,0,0.2)]"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-sans-custom text-sm font-medium tracking-wider uppercase py-2 px-3 border-l-2 transition-all ${
                    location.pathname === link.path
                      ? 'text-[#ffd700] border-[#ffd700]'
                      : 'text-[#c8a870] border-transparent hover:border-[#ff9500] hover:text-[#ffd700]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/timeline">
                <button className="w-full mt-2 py-3 bg-gradient-to-r from-orange-600 to-yellow-600 text-black font-semibold rounded-sm tracking-wider uppercase text-sm">
                  Start Story
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
