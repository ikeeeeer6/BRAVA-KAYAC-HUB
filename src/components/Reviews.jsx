import React from 'react'

export default function Reviews({ testimonials = [] }) {
  return (
    <div>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <article key={t.name} className="testimonial-card">
            <p>“{t.text}”</p>
            <strong>{t.name}</strong>
          </article>
        ))}
      </div>
      <p className="review-note">Integración con Google Reviews próximamente.</p>
    </div>
  )
}
