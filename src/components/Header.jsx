import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <nav className="top-nav">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#tarifas">Tarifas</a>
        <a href="#galeria">Galería</a>
        <a href="#contacto">Contacto</a>
        <div className="lang-switch" aria-hidden>
          <button className="lang-btn active">ES</button>
          <button className="lang-btn">EN</button>
        </div>
      </nav>
    </header>
  )
}
