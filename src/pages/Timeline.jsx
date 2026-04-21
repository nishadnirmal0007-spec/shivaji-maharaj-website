import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Sword, Shield, Crown, Star, Anchor, Map } from 'lucide-react'

const events = [
  {
    year: '1630',
    title: 'The Birth of a Legend',
    icon: <Star size={20} />,
    color: '#ffd700',
    description: 'On February 19, 1630, Shivaji Bhonsale was born at Shivneri Fort near Junnar. His mother Jijabai, a woman of iron will and deep piety, raised him on tales of Rama and the Mahabharata warriors. His father Shahaji, a great Maratha noble, served the Adilshahi sultanate.',
    detail: 'Jijabai prayed to the goddess Shivai at Shivneri and named her son after the deity. From his earliest years, Shivaji showed exceptional leadership among his Maval friends in the hills and forests of the Sahyadri range.',
    location: 'Shivneri Fort, Pune',
  },
  {
    year: '1646',
    title: 'Conquest of Torna Fort',
    icon: <Sword size={20} />,
    color: '#ff6600',
    description: 'At the age of sixteen, the young Shivaji captured Torna Fort from the Bijapur Sultanate — his first military conquest. This bold act announced his arrival and the birth of his dream of Swarajya (self-rule).',
    detail: 'With a small, devoted band of Mavali warriors, Shivaji scaled the formidable Torna Fort at night. He reportedly said, "This is the first step of Swarajya." He used the treasure found within to build and strengthen more forts.',
    location: 'Torna Fort, near Pune',
  },
  {
    year: '1659',
    title: 'The Killing of Afzal Khan',
    icon: <Shield size={20} />,
    color: '#ff4400',
    description: 'The Bijapur Sultan sent the fearsome general Afzal Khan with 10,000 soldiers to crush Shivaji. In a legendary meeting at Pratapgad, Shivaji killed Afzal Khan with the wagh nakh (tiger claws), turning a trap into a triumph.',
    detail: 'Suspecting treachery, Shivaji wore armor beneath his robes and hid the wagh nakh in his hand. When Afzal Khan attempted to stab him, Shivaji struck first. His waiting army then launched a devastating ambush on the Bijapuri force, winning a decisive victory.',
    location: 'Pratapgad Fort, Satara',
  },
  {
    year: '1660',
    title: 'The Great Escape from Agra',
    icon: <Map size={20} />,
    color: '#ff9500',
    description: 'Aurangzeb summoned Shivaji to Agra and placed him under house arrest. In one of history\'s greatest escapes, Shivaji fled by hiding in large sweet boxes being sent out as religious charity.',
    detail: 'On August 19, 1666, Shivaji and his son Sambhaji escaped in large baskets or boxes of sweets and goods being distributed to temples and the poor — different accounts vary on the method. The Mughal Empire was stunned. Shivaji traveled disguised as a sanyasi, covering 1,500 miles back to the Deccan.',
    location: 'Agra, Mughal Empire',
  },
  {
    year: '1674',
    title: 'Coronation — The First Chhatrapati',
    icon: <Crown size={20} />,
    color: '#ffd700',
    description: 'On June 6, 1674, at Raigad Fort, Shivaji was crowned Chhatrapati — sovereign ruler — in a magnificent ceremony that declared the establishment of the Maratha Empire and the dream of Hindavi Swarajya.',
    detail: 'The coronation was conducted by the renowned scholar Gaga Bhatta of Varanasi. It was not just a royal ceremony but a political declaration — that the Deccan had a Hindu king of divine right. Thousands gathered at Raigad. Shivaji took the title "Chhatrapati" — Lord of the Umbrella.',
    location: 'Raigad Fort, Maharashtra',
  },
  {
    year: '1674–1680',
    title: 'Building a Just Empire',
    icon: <Anchor size={20} />,
    color: '#00b4ff',
    description: 'In the final years of his reign, Shivaji proved to be as great an administrator as he was a warrior. He built India\'s first organized navy, established a just revenue system, and protected women and citizens with strict laws.',
    detail: 'Shivaji was a visionary ruler. He created the first Maratha navy with over 200 warships to counter the Portuguese and Siddis. He employed people of all religions — Muslims served in his army and administration. His revenue system was fair, his justice swift, and his treatment of enemies humane.',
    location: 'Raigad Fort, Maharashtra',
  },
  {
    year: '1680',
    title: 'The Legend Never Dies',
    icon: <Star size={20} />,
    color: '#ffd700',
    description: 'On April 3, 1680, Chhatrapati Shivaji Maharaj died at Raigad Fort, aged 52. Though his earthly journey ended, his legend only grew stronger — inspiring generations across centuries.',
    detail: 'The cause of his death is debated — fever and dysentery, or possibly poisoning. His son Sambhaji continued the empire. Shivaji\'s legacy transcended his own era: he is revered as a god-like figure in Maharashtra, the embodiment of courage, justice, and the will to be free.',
    location: 'Raigad Fort, Maharashtra',
  },
]

export default function Timeline() {
  const [activeEvent, setActiveEvent] = useState(null)

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 z-10">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_20%,rgba(150,60,0,0.08),transparent)]" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="font-sans-custom text-xs text-[#ff9500] tracking-[0.4em] uppercase mb-4">The Epic Journey</div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient mb-4">Story Timeline</h1>
          <p className="font-body text-lg text-[#c8a870] max-w-xl mx-auto">
            Walk through the legendary life of the greatest Maratha king, from his birth in Shivneri to the founding of an empire.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[rgba(255,150,0,0.4)] to-transparent" />

          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0
                  ? 'sm:flex-row pl-12 sm:pl-0 sm:pr-[52%]'
                  : 'sm:flex-row-reverse pl-12 sm:pl-[52%] sm:pl-0'
              }`}
            >
              {/* Node */}
              <div
                className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-6 w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 cursor-pointer transition-all duration-300"
                style={{
                  borderColor: event.color,
                  background: 'rgba(8,3,0,0.9)',
                  boxShadow: `0 0 20px ${event.color}40`,
                  color: event.color,
                }}
                onClick={() => setActiveEvent(activeEvent === i ? null : i)}
              >
                {event.icon}
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveEvent(activeEvent === i ? null : i)}
                className="fort-card rounded-lg p-5 cursor-pointer w-full"
                style={{ borderColor: activeEvent === i ? `${event.color}40` : undefined }}
              >
                <div className="font-sans-custom text-xs tracking-widest mb-1" style={{ color: event.color }}>
                  {event.year}
                </div>
                <h3 className="font-display text-sm sm:text-base text-[#ffd700] mb-2">{event.title}</h3>
                <p className="font-body text-sm text-[#a08060] leading-relaxed">{event.description}</p>

                <AnimatePresence>
                  {activeEvent === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-[rgba(255,150,0,0.15)]">
                        <p className="font-body text-sm text-[#c8a870] leading-relaxed italic mb-3">
                          {event.detail}
                        </p>
                        <div className="flex items-center gap-2 text-[#6a5030]">
                          <span className="text-xs">📍</span>
                          <span className="font-sans-custom text-xs tracking-wider">{event.location}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-3 flex items-center gap-1 text-[#6a5030]">
                  <span className="font-sans-custom text-xs">
                    {activeEvent === i ? 'Click to collapse' : 'Click to read more'}
                  </span>
                  <motion.div animate={{ rotate: activeEvent === i ? 90 : 0 }}>
                    <ChevronRight size={12} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* End Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 py-8"
        >
          <div className="section-divider mb-8" />
          <div className="font-display text-2xl text-[#ffd700] mb-3">जय भवानी! जय शिवाजी!</div>
          <p className="font-body text-[#8a7050]">The story of Swarajya — a dream that lives forever.</p>
        </motion.div>
      </div>
    </div>
  )
}
