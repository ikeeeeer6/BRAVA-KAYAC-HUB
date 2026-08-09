import './App.css'
import { useState } from 'react'
import portadaImage from './assets/images/foto_portada.png'
import serviciosImage from './assets/images/nuestros_servicios.jpg'
import galleryImage from './assets/images/galeria.jpg'
import tarifasImage from './assets/images/tarifas.jpg'
import kayakDobleImage from './assets/images/precios/kayak_doble.jpeg'
import kayakIndividualImage from './assets/images/precios/kayak_individual.webp'
import paddleSurfImage from './assets/images/precios/paddel_surf.jpeg'
import bigSupImage from './assets/images/precios/big_sup.jpeg'
import Header from './components/Header'
import WhatsAppFab from './components/WhatsAppFab'
import Gallery from './components/Gallery'
import ContactForm from './components/ContactForm'
import Reviews from './components/Reviews'

const whatsappLink = 'https://wa.me/34722261178?text=Hola%20Brava%20Kayak%20HUB%2C%20quiero%20informaci%C3%B3n'

const content = {
  es: {
    nav: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Sobre Nosotros', href: '#sobre' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Tarifas', href: '#tarifas' },
      { label: 'Galería', href: '#galeria' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contacto', href: '#contacto' },
    ],
    hero: {
      badge: 'Explora la Costa Brava',
      titleStart: 'Vive la',
      titleAccent: 'aventura',
      titleEnd: 'sobre el mar',
      tagline: 'Aventura. Mar. Costa.',
      text: 'Alquiler de kayaks y paddle surf en Playa de Fenals con material de calidad, rutas espectaculares y un equipo experto que te acompaña desde el primer paso.',
      primary: 'Reservar ahora',
      secondary: 'Hablar por WhatsApp',
    },
    highlights: [
      { title: 'Material de calidad', icon: '✓' },
      { title: 'Ubicación privilegiada', icon: '⌂' },
      { title: 'Equipo experto', icon: '⛵' },
      { title: 'Experiencias únicas', icon: '★' },
    ],
    about: {
      label: 'Sobre nosotros',
      title: 'Una empresa nueva con experiencia consolidada',
      paragraphs: [
        'Brava Kayak HUB nace para ofrecer actividades náuticas en un espacio seguro y muy visual. Aunque la marca es reciente, nuestro equipo suma más de 20 años en turismo activo y excursiones acuáticas.',
        'Queremos transmitir aventura, diversión, seguridad y confianza con cada salida.',
      ],
      cards: [
        { title: 'Filosofía', text: 'Atención cercana, actividades adaptadas y servicio profesional desde el primer contacto.' },
        { title: 'Valores', text: 'Seguridad, sostenibilidad, calidad y experiencia.' },
        { title: 'Zona', text: 'Playa de Fenals, un entorno ideal para disfrutar del mar y la naturaleza de la Costa Brava.' },
        { title: 'Enfoque', text: 'Actividades accesibles para turistas nacionales, internacionales y grupos organizados.' },
      ],
    },
    services: [
      {
        title: 'Kayak individual',
        description: 'Perfecto para explorar la costa a tu ritmo, con material nuevo y seguro.',
      },
      {
        title: 'Kayak doble',
        description: 'Comparte la aventura con tu pareja o amigo y disfruta del mar juntos.',
      },
      {
        title: 'Paddle Surf (SUP)',
        description: 'Actividad estable y divertida para todas las edades en la playa.',
      },
      {
        title: 'Big SUP para grupos',
        description: 'Ideal para familias y grupos que quieren disfrutar juntos sobre el agua.',
      },      
      {
        title: 'Ruta guida + Snorkel',
        description: 'Explora calas y rincones escondidos con un guía mientras descubres la vida marina haciendo snorkel.',
      },
    ],
    servicesTitle: 'Todo lo que ofrecemos',
    servicesLabel: 'Servicios',
    soonBadge: 'Próximamente',
    prices: [
      { activity: 'Kayak doble', duration: 'Ideal para compartir', price: '1 h - 25 €', image: kayakDobleImage },
      { activity: 'Kayak individual', duration: 'Libertad y ritmo propio', price: '1 h - 20 €', image: kayakIndividualImage },
      { activity: 'Paddle Surf (SUP)', duration: 'Perfecto para empezar', price: '1 h - 20 €', image: paddleSurfImage },
      { activity: 'Big SUP', duration: 'Para grupos y familias', price: '1h - 60 €', image: bigSupImage },
      { activity: 'Ruta guida + Snorkel', duration: 'Por persona (mínimo 4 personas)', price: '1.5h - 35 €', image: kayakDobleImage },
    ],
    pricingLabel: 'Tarifas',
    pricingTitle: 'Precios claros y competitivos',
    pricingNote: '¿Viajas en grupo? Pregunta por tarifas especiales y opciones para colegios o empresas.',
    galleryLabel: 'Galería',
    faqLabel: 'Preguntas frecuentes',
    faqTitle: 'Respuestas rápidas',
    faqs: [
      {
        question: '¿Puedo hacerlo sin experiencia?',
        answer: 'Sí, ofrecemos material seguro y personal que te explicará todo antes de salir.',
      },
      {
        question: '¿Hay una edad mínima?',
        answer: 'No hay edad mínima, pero los niños deben ir acompañados por un adulto.',
      },
      {
        question: '¿Qué material está incluido?',
        answer: 'Incluimos kayak/SUP, remo, chaleco salvavidas y una breve formación inicial.',
      },
      {
        question: '¿Es necesario reservar?',
        answer: 'Recomendamos reservar para garantizar tu plaza, especialmente en temporada alta.',
      },
      {
        question: '¿Qué ocurre si hace mal tiempo?',
        answer: 'Si las condiciones no son seguras, te proponemos cambiar la fecha o solicitar el reembolso.',
      },
      {
        question: '¿Pueden participar niños?',
        answer: 'Sí, la actividad es apta para familias y niños siempre acompañados por un adulto.',
      },
    ],
    contactLabel: 'Contacto',
    contactTitle: 'Habla con nosotros',
    contactItems: [
      { title: 'Teléfono', value: '722 261 178' },
      { title: 'WhatsApp', value: 'Enviar mensaje', link: whatsappLink },
      { title: 'Email', value: 'bravakayak@gmail.com', link: 'mailto:bravakayak@gmail.com' },
      { title: 'Ubicación', value: 'Playa de Fenals, Lloret de Mar' },
    ],
    reserveButton: 'Reserva ya',
    footerLine: 'Brava Kayak HUB · Playa de Fenals · Lloret de Mar',
    footerSubline: 'Reservas online y pago online disponibles próximamente.',
  },
  en: {
    nav: [
      { label: 'Home', href: '#inicio' },
      { label: 'About', href: '#sobre' },
      { label: 'Services', href: '#servicios' },
      { label: 'Prices', href: '#tarifas' },
      { label: 'Gallery', href: '#galeria' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contacto' },
    ],
    hero: {
      badge: 'Explore the Costa Brava',
      titleStart: 'Live the',
      titleAccent: 'adventure',
      titleEnd: 'on the sea',
      tagline: 'Adventure. Sea. Coast.',
      text: 'Kayak and paddle surf rental in Playa de Fenals with quality gear, spectacular routes and an expert team guiding you from the first step.',
      primary: 'Book now',
      secondary: 'Talk on WhatsApp',
    },
    highlights: [
      { title: 'Quality gear', icon: '✓' },
      { title: 'Prime location', icon: '⌂' },
      { title: 'Expert team', icon: '⛵' },
      { title: 'Unique experiences', icon: '★' },
    ],
    about: {
      label: 'About us',
      title: 'A new company with solid experience',
      paragraphs: [
        'Brava Kayak HUB was created to offer nautical activities in a safe and highly visual setting. Although the brand is new, our team brings over 20 years of active tourism and water excursions experience.',
        'We want to deliver adventure, fun, safety and confidence on every outing.',
      ],
      cards: [
        { title: 'Philosophy', text: 'Close attention, tailored activities and professional service from the first contact.' },
        { title: 'Values', text: 'Safety, sustainability, quality and experience.' },
        { title: 'Area', text: 'Playa de Fenals, an ideal setting to enjoy the sea and nature of the Costa Brava.' },
        { title: 'Approach', text: 'Activities accessible to national and international tourists as well as organized groups.' },
      ],
    },
    services: [
      {
        title: 'Single kayak',
        description: 'Perfect for exploring the coast at your own pace with new and safe gear.',
      },
      {
        title: 'Double kayak',
        description: 'Share the adventure with your partner or friend and enjoy the sea together.',
      },
      {
        title: 'Paddle Surf (SUP)',
        description: 'A stable and fun activity for all ages on the beach.',
      },
      {
        title: 'Group Big SUP',
        description: 'Ideal for families and groups who want to enjoy the water together.',
      },
      {
        title: 'Guided Kayak Tour + Snorkeling',
        description: 'Explore hidden coves with an experienced guide and discover the vibrant marine life while snorkeling.',
      }
    ],
    servicesTitle: 'Everything we offer',
    servicesLabel: 'Services',
    soonBadge: 'Coming soon',
    prices: [
      { activity: 'Double kayak', duration: 'Great for sharing', price: '1 h - 25 €', image: kayakDobleImage },
      { activity: 'Single kayak', duration: 'Freedom at your own pace', price: '1 h - 20 €', image: kayakIndividualImage },
      { activity: 'Paddle Surf (SUP)', duration: 'Perfect for beginners', price: '1 h - 20 €', image: paddleSurfImage },
      { activity: 'Big SUP', duration: 'For groups and families', price: '1 h - 60 €', image: bigSupImage },
      {activity: 'Guided Kayak Tour + Snorkeling', duration: 'For person (minimum 4 participants)', price: '1.5h - 35 €', image: kayakDobleImage },
    ],
    pricingLabel: 'Prices',
    pricingTitle: 'Clear and competitive prices',
    pricingNote: 'Traveling as a group? Ask about special rates and options for schools or companies.',
    galleryLabel: 'Gallery',
    faqLabel: 'Frequently asked questions',
    faqTitle: 'Quick answers',
    faqs: [
      {
        question: 'Can I do it without experience?',
        answer: 'Yes, we provide safe equipment and staff who will explain everything before you go out.',
      },
      {
        question: 'Is there a minimum age?',
        answer: 'There is no minimum age, but children must be accompanied by an adult.',
      },
      {
        question: 'What equipment is included?',
        answer: 'We include the kayak/SUP, paddle, life jacket and a short initial briefing.',
      },
      {
        question: 'Is booking necessary?',
        answer: 'We recommend booking to guarantee your spot, especially during peak season.',
      },
      {
        question: 'What happens if the weather is bad?',
        answer: 'If conditions are not safe, we will suggest changing the date or refunding you.',
      },
      {
        question: 'Can children join?',
        answer: 'Yes, the activity is suitable for families and children as long as they are accompanied by an adult.',
      },
    ],
    contactLabel: 'Contact',
    contactTitle: 'Talk to us',
    contactItems: [
      { title: 'Phone', value: '+34 722 261 178' },
      { title: 'WhatsApp', value: 'Send a message', link: whatsappLink },
      { title: 'Email', value: 'info@bravakayakhub.com', link: 'mailto:info@bravakayakhub.com' },
      { title: 'Location', value: 'Playa de Fenals, Lloret de Mar' },
    ],
    reserveButton: 'Book now',
    footerLine: 'Brava Kayak HUB · Playa de Fenals · Lloret de Mar',
    footerSubline: 'Online booking and online payment coming soon.',
  },
}

function App() {
  const [language, setLanguage] = useState('es')
  const t = content[language]
  const hero = t.hero
  const about = t.about
  const services = t.services
  const prices = t.prices
  const faqs = t.faqs
  const highlights = t.highlights
  const contact = t.contactItems

  return (
    <div className="page">
      <main>
        <section id="inicio" className="relative isolate min-h-screen overflow-hidden bg-slate-950">
          <img
            src={portadaImage}
            alt="Kayak en la Costa Brava"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-[1.5px]"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-900/20 to-slate-950/75" />

          <div className="relative z-10 flex min-h-screen flex-col">
            <Header language={language} setLanguage={setLanguage} navLinks={t.nav} reserveLabel={t.reserveButton} />

            <div className="flex flex-1 items-center px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
              <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
                <div className="hero-fade-up max-w-4xl">
                  <p className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-slate-100 backdrop-blur-md">
                    {hero.badge}
                  </p>
                  <h1 className="mb-6 text-5xl font-black leading-[0.9] text-white sm:text-6xl lg:text-8xl">
                    {hero.titleStart} <span className="text-[#f58220]">{hero.titleAccent}</span> {hero.titleEnd}
                  </h1>
                  <p className="mb-4 text-2xl font-semibold tracking-[0.2em] text-white/95 sm:text-3xl" style={{ fontFamily: 'Brush Script MT, Segoe Script, cursive' }}>
                    {hero.tagline}
                  </p>
                  <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-200/90 sm:text-xl">
                    {hero.text}
                  </p>

                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <a
                      href="#contacto"
                      className="hero-btn-primary inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-base font-semibold text-white shadow-[0_20px_45px_rgba(245,130,32,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(245,130,32,0.35)]"
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10M7 7v10m10-10v10M7 17h10" />
                      </svg>
                      {hero.primary}
                    </a>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-3 rounded-full border border-white/70 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20"
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M17.6 14.5c-.3-.2-1.7-.9-2-.9-.2-.1-.4-.2-.6.1-.2.2-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.5-1.6-1-1-1.6-2.1-1.8-2.4-.1-.3 0-.5.2-.7.2-.2.3-.3.4-.5.1-.1.1-.3.2-.5.1-.2 0-.4-.1-.5-.1-.1-.9-2.2-1.2-3-.3-.8-.6-.7-.8-.7h-.7c-.2 0-.5.1-.8.3-.3.2-1 .9-1 2.3 0 1.4.9 2.8 1 3 .2.2 2.2 3.4 5.2 4.8 3 1.4 3 1 3.6 1 .6 0 1.7-.7 2-1.4.4-.7.4-1.2.3-1.3-.1-.1-.3-.2-.6-.4Z" />
                      </svg>
                      {hero.secondary}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-8 lg:px-12">
          <section id="sobre" className="section about-section">
            <div className="section-content">
              <div>
                <p className="section-label">{about.label}</p>
                <h2>{about.title}</h2>
                <br/>
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="info-grid">
                {about.cards.map((card) => (
                  <div key={card.title}>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="servicios" className="section services-section">
          <div className="section-header">
            <p className="section-label">{t.servicesLabel}</p>
            <h2>{t.servicesTitle}</h2>
            <br/>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className={`service-card w-full ${service.soon ? 'soon' : ''}`}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.soon && <span className="badge">{t.soonBadge}</span>}
              </article>
            ))}
          </div>
        </section>

        <section id="tarifas" className="section pricing-section">
          <div className="section-header">
            <p className="section-label">{t.pricingLabel}</p>
            <h2>{t.pricingTitle}</h2>
            <br/>
          </div>
          <div className="pricing-cards">
            {prices.map((item) => (
              <article key={item.activity} className="pricing-card">
                <div className="pricing-image-wrap">
                  <img src={item.image} alt={item.activity} className="pricing-image" />
                  <div className="pricing-image-label">{item.activity}</div>
                </div>
                <div className="pricing-content">
                  <p>{item.duration}</p>
                  <span>{item.price}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="pricing-note">{t.pricingNote}</p>
        </section>


        <section id="galeria" className="section gallery-section">
          <div className="section-header">
            <p className="section-label">{t.galleryLabel}</p>
          </div>
          <div className="gallery-grid">
            <Gallery />
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="section-header">
            <p className="section-label">{t.faqLabel}</p>
            <h2>{t.faqTitle}</h2>
            <br/>
          </div>
          <div className="faq-grid">
            {faqs.map((item) => (
              <article key={item.question} className="faq-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="section contact-section">
          <div className="section-header">
            <p className="section-label">{t.contactLabel}</p>
            <h2>{t.contactTitle}</h2>
            <br/>
          </div>
          <div className="contact-grid">
            {contact.map((item) => (
              <div key={item.title} className="contact-card">
                <h3>{item.title}</h3>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer">{item.value}</a>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>
            ))}
          </div>
          <div className="map-frame">
            <iframe
              title="Mapa de Brava Kayak Hub"
              src="https://www.google.com/maps?q=Brava+Kayak+Hub,+Lloret+de+Mar&z=17&output=embed"
              loading="lazy"
            />
          </div>
        </section>
          </div>
      </main>

      <footer className="site-footer">
        <p>{t.footerLine}</p>
        <p>{t.footerSubline}</p>
      </footer>
      <WhatsAppFab />
    </div>
  )
}

export default App
