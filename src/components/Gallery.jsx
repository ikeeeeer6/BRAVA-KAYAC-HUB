import React, { useState, useEffect } from 'react'

const IMAGES = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517821365211-15ed120cd8cd?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80',
]

export default function Gallery() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % IMAGES.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {IMAGES.map((src, i) => (
          <div key={i} className={`slide ${i === idx ? 'active' : ''}`} style={{ backgroundImage: `url(${src})` }} />
        ))}
      </div>
      <div className="carousel-controls">
        {IMAGES.map((_, i) => (
          <button key={i} className={`dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} aria-label={`Ir a imagen ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}
