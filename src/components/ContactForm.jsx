import React, { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="contact-form-wrap">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nombre
          <input name="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Mensaje
          <textarea name="message" rows={4} required />
        </label>
        <button className="button primary" type="submit">Enviar</button>
        {sent && <div className="sent-note">Mensaje enviado (simulado)</div>}
      </form>
    </div>
  )
}
