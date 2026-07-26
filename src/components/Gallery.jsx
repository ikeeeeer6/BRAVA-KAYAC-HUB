import React, { useState, useEffect } from 'react'
import gallery01 from '../assets/images/galeria/WhatsApp Image 2026-07-26 at 20.15.05 (1).jpeg'
import gallery02 from '../assets/images/galeria/WhatsApp Image 2026-07-26 at 20.15.05 (2).jpeg'
import gallery03 from '../assets/images/galeria/WhatsApp Image 2026-07-26 at 20.15.05.jpeg'
import gallery04 from '../assets/images/galeria/WhatsApp Image 2026-07-26 at 20.15.06.jpeg'
import gallery05 from '../assets/images/galeria/WhatsApp Image 2026-07-26 at 20.15.07 (1).jpeg'
import gallery06 from '../assets/images/galeria/WhatsApp Image 2026-07-26 at 20.15.07 (2).jpeg'
import gallery07 from '../assets/images/galeria/WhatsApp Image 2026-07-26 at 20.15.07.jpeg'

const IMAGES = [gallery01, gallery02, gallery03, gallery04, gallery05, gallery06, gallery07]

export default function Gallery() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % IMAGES.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="gallery-carousel">
      <div className="gallery-frame">
        {IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Vista de la Costa Brava ${i + 1}`}
            className={`gallery-image ${i === idx ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="gallery-controls">
        {IMAGES.map((_, i) => (
          <button key={i} className={`gallery-dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} aria-label={`Ir a imagen ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}
