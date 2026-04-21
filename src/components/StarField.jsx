import { useMemo } from 'react'

export default function StarField() {
  const stars = useMemo(() => {
    return Array.from({ length: 120 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 4}s`,
      delay: `${Math.random() * 4}s`,
      size: Math.random() > 0.8 ? '3px' : '2px',
      opacity: 0.3 + Math.random() * 0.5,
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map(star => (
        <div
          key={star.id}
          className="star absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            '--tw-duration': star.duration,
            animationDelay: star.delay,
            animationDuration: star.duration,
            background: 'rgba(255, 210, 120, 0.8)',
          }}
        />
      ))}
    </div>
  )
}
