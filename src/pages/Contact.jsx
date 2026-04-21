import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MessageSquare, User, Mail, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const quotes = [
    '"Do not think of the enemy as being greater or lesser. Think only of your duty." — Shivaji Maharaj',
    '"Freedom is a boon, which everyone has the right to receive." — Shivaji Maharaj',
    '"Never bend your head. Always hold it high." — Shivaji Maharaj',
  ]

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_10%,rgba(100,40,0,0.1),transparent)]" />
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="font-sans-custom text-xs text-[#ff9500] tracking-[0.4em] uppercase mb-4">Connect & Tribute</div>
          <h1 className="font-display text-3xl sm:text-5xl text-gradient mb-4">Contact</h1>
          <p className="font-body text-lg text-[#c8a870] max-w-xl mx-auto">Share your tribute, your story, or your devotion to the great Chhatrapati. Every voice adds to the legacy.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            {submitted ? (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-16 px-8 fort-card rounded-xl">
                <CheckCircle size={60} className="text-[#ffd700] mx-auto mb-6" />
                <h3 className="font-display text-xl text-[#ffd700] mb-3">Jai Shivaji!</h3>
                <p className="font-body text-[#c8a870] text-lg mb-2">Your tribute has been received.</p>
                <p className="font-body text-[#8a7050]">The spirit of Swarajya lives in hearts like yours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                  className="mt-8 px-6 py-2 border border-[rgba(255,150,0,0.3)] text-[#ff9500] font-sans-custom text-sm tracking-wider uppercase rounded-sm hover:bg-[rgba(255,100,0,0.08)] transition-colors">
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { icon: <User size={16} />, label: 'Your Name', key: 'name', type: 'text', placeholder: 'Enter your name...' },
                  { icon: <Mail size={16} />, label: 'Email Address', key: 'email', type: 'email', placeholder: 'your@email.com' },
                ].map(field => (
                  <div key={field.key}>
                    <label className="flex items-center gap-2 font-sans-custom text-xs text-[#8a7050] tracking-widest uppercase mb-2">
                      <span className="text-[#ff9500]">{field.icon}</span>{field.label}
                    </label>
                    <input
                      type={field.type}
                      value={form[field.key]}
                      onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-[rgba(255,100,0,0.05)] border border-[rgba(255,150,0,0.2)] rounded-sm text-[#e8d5a0] font-body placeholder-[#4a3820] focus:outline-none focus:border-[rgba(255,150,0,0.5)] focus:bg-[rgba(255,100,0,0.08)] transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="flex items-center gap-2 font-sans-custom text-xs text-[#8a7050] tracking-widest uppercase mb-2">
                    <span className="text-[#ff9500]"><MessageSquare size={16} /></span>Your Tribute / Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Share your thoughts, tribute, or message about Chhatrapati Shivaji Maharaj..."
                    className="w-full px-4 py-3 bg-[rgba(255,100,0,0.05)] border border-[rgba(255,150,0,0.2)] rounded-sm text-[#e8d5a0] font-body placeholder-[#4a3820] focus:outline-none focus:border-[rgba(255,150,0,0.5)] focus:bg-[rgba(255,100,0,0.08)] transition-all resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255,120,0,0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 text-black font-sans-custom font-bold tracking-widest uppercase rounded-sm flex items-center justify-center gap-2 disabled:opacity-70 transition-all"
                >
                  {loading ? (
                    <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />Sending...</>
                  ) : (
                    <><Send size={16} />Send Tribute</>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info Panel */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-6">
            {/* Big quote */}
            <div className="fort-card rounded-xl p-6 sm:p-8">
              <div className="font-display text-5xl text-[rgba(255,150,0,0.2)] mb-3 leading-none">"</div>
              <blockquote className="font-body text-lg text-[#c8a870] italic leading-relaxed">
                Even if there were a sword in the hands of everyone, it is the will which establishes power.
              </blockquote>
              <cite className="font-sans-custom text-xs text-[#6a5030] tracking-wider uppercase mt-4 block not-italic">— Chhatrapati Shivaji Maharaj</cite>
            </div>

            {/* Legacy facts */}
            <div className="fort-card rounded-xl p-6">
              <div className="font-display text-sm text-[#ffd700] mb-4">Legacy in Numbers</div>
              <div className="space-y-3">
                {[
                  ['360+', 'Forts across the Deccan'],
                  ['200+', 'Naval warships built'],
                  ['1674', 'Year of coronation as Chhatrapati'],
                  ['400M+', 'Lives inspired across generations'],
                ].map(([val, label], i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="font-display text-lg text-[#ff9500] w-16 shrink-0">{val}</span>
                    <span className="font-body text-sm text-[#8a7050]">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote cycling */}
            <div className="text-center py-4">
              <div className="font-sans-custom text-xs text-[#4a3820] tracking-widest uppercase">जय भवानी | जय शिवाजी</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
