import React from 'react'
import heroLogo from '../assets/images/logo_brava_kayak_hub.png'

const whatsappLink = 'https://wa.me/34722261178?text=Hola%20Brava%20Kayak%20HUB%2C%20quiero%20informaci%C3%B3n'

export default function Header({ language, setLanguage, navLinks, reserveLabel }) {
  return (
    <header className="w-full px-4 py-5 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-white/10 px-3 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:px-5">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={heroLogo} alt="Brava Kayak HUB" className="h-11 w-11 rounded-full object-cover" />
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-white sm:text-base">
            Brava Kayak HUB
          </span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-100 transition hover:text-[#f58220]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden rounded-full border border-white/15 bg-white/10 p-1 sm:flex">
            <button
              type="button"
              onClick={() => setLanguage('es')}
              className={`rounded-full px-3 py-1 text-sm font-semibold transition ${language === 'es' ? 'bg-white text-slate-900' : 'text-white/90 hover:text-white'}`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`rounded-full px-3 py-1 text-sm font-semibold transition ${language === 'en' ? 'bg-white text-slate-900' : 'text-white/90 hover:text-white'}`}
            >
              EN
            </button>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#f58220] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#df6f1a]"
          >
            {reserveLabel}
          </a>
        </div>
      </div>
    </header>
  )
}
