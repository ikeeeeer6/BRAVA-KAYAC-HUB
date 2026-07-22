import './App.css'
import principalImage from './assets/images/principal.jpg'
import heroLogo from './assets/images/logo_brava_kayak_hub.png'
import serviciosImage from './assets/images/nuestros_servicios.jpg'
import galleryImage from './assets/images/galeria.jpg'
import tarifasImage from './assets/images/tarifas.jpg'
import Header from './components/Header'
import WhatsAppFab from './components/WhatsAppFab'
import Gallery from './components/Gallery'
import ContactForm from './components/ContactForm'
import Reviews from './components/Reviews'

const whatsappLink = 'https://wa.me/34722261178?text=Hola%20Brava%20Kayak%20HUB%2C%20quiero%20informaci%C3%B3n'

const services = [
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
    title: 'Rutas guiadas',
    description: 'Próximamente: rutas especiales por la Costa Brava con guía experto.',
    soon: true,
  },
  {
    title: 'Excursiones con snorkel',
    description: 'Próximamente: descubre los fondos marinos en una actividad completa.',
    soon: true,
  },
]

const prices = [
  { activity: 'Kayak individual', duration: '1 hora', price: '30 €' },
  { activity: 'Kayak doble', duration: '1 hora', price: '45 €' },
  { activity: 'SUP', duration: '1 hora', price: '30 €' },
  { activity: 'Big SUP', duration: '1 hora', price: '60 €' },
]

const faqs = [
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
]

const testimonials = [
  {
    name: 'Laura, familia',
    text: 'Experiencia fantástica. El equipo fue muy amable y las tablas estaban en perfectas condiciones.',
  },
  {
    name: 'David, grupo de amigos',
    text: 'Una mañana increíble en la Costa Brava. Muy recomendable para disfrutar en grupo.',
  },
]

function App() {
  return (
    <div className="page">
      <Header />

      <main>
        <section
          id="inicio"
          className="hero"
          style={{ backgroundImage: `url(${principalImage})` }}
        >
          <div className="hero-overlay" />
          <div className="hero-logo-wrap">
            <img src={heroLogo} alt="Brava Kayak HUB" className="hero-logo" />
          </div>
        </section>

        <section id="sobre" className="section about-section">
          <div className="section-content">
            <div>
              <p className="section-label">Sobre nosotros</p>
              <h2>Una empresa nueva con experiencia consolidada</h2>
              <p>Brava Kayak HUB nace para ofrecer actividades náuticas en un espacio seguro y muy visual. Aunque la marca es reciente, nuestro equipo suma más de 20 años en turismo activo y excursiones acuáticas.</p>
              <p>Queremos transmitir aventura, diversión, seguridad y confianza con cada salida.</p>
            </div>
            <div className="info-grid">
              <div>
                <h3>Filosofía</h3>
                <p>Atención cercana, actividades adaptadas y servicio profesional desde el primer contacto.</p>
              </div>
              <div>
                <h3>Valores</h3>
                <p>Seguridad, sostenibilidad, calidad y experiencia.</p>
              </div>
              <div>
                <h3>Zona</h3>
                <p>Playa de Fenals, un entorno ideal para disfrutar del mar y la naturaleza de la Costa Brava.</p>
              </div>
              <div>
                <h3>Enfoque</h3>
                <p>Actividades accesibles para turistas nacionales, internacionales y grupos organizados.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="section services-section">
          <div className="section-header">
            <p className="section-label">Servicios</p>
            <h2>Todo lo que ofrecemos</h2>
          </div>
          <div className="cards-grid">
            {services.map((service) => (
              <article key={service.title} className={`service-card ${service.soon ? 'soon' : ''}`}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.soon && <span className="badge">Próximamente</span>}
              </article>
            ))}
          </div>
          <div className="section-image services-visual" style={{ backgroundImage: `url(${serviciosImage})` }} />
        </section>

        <section id="galeria" className="section gallery-section">
          <div className="section-header">
            <p className="section-label">Galería</p>
            <h2>Imagina tu día en el agua</h2>
          </div>
          <div className="gallery-grid">
            <Gallery />
          </div>
          <div className="section-image gallery-visual" style={{ backgroundImage: `url(${galleryImage})` }} />
        </section>

        <section id="tarifas" className="section pricing-section">
          <div className="section-header">
            <p className="section-label">Tarifas</p>
            <h2>Precios claros y competitivos</h2>
          </div>
          <div className="pricing-table">
            <div className="pricing-row pricing-header">
              <span>Actividad</span>
              <span>Duración</span>
              <span>Precio</span>
            </div>
            {prices.map((item) => (
              <div className="pricing-row" key={item.activity}>
                <span>{item.activity}</span>
                <span>{item.duration}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
          <div className="section-image pricing-visual" style={{ backgroundImage: `url(${tarifasImage})` }} />
          <p className="pricing-note">¿Viajas en grupo? Pregunta por tarifas especiales y opciones para colegios o empresas.</p>
        </section>

        <section className="section testimonials-section">
          <div className="section-header">
            <p className="section-label">Opiniones</p>
            <h2>Clientes satisfechos</h2>
          </div>
          <Reviews testimonials={testimonials} />
        </section>

        <section id="faq" className="section faq-section">
          <div className="section-header">
            <p className="section-label">Preguntas frecuentes</p>
            <h2>Respuestas rápidas</h2>
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
            <p className="section-label">Contacto</p>
            <h2>Habla con nosotros</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Teléfono</h3>
              <p>722 261 178</p>
            </div>
            <div className="contact-card">
              <h3>WhatsApp</h3>
              <a href={whatsappLink} target="_blank" rel="noreferrer">Enviar mensaje</a>
            </div>
            <div className="contact-card">
              <h3>Email</h3>
              <a href="mailto:info@bravakayakhub.com">info@bravakayakhub.com</a>
            </div>
            <div className="contact-card">
              <h3>Ubicación</h3>
              <p>Playa de Fenals, Lloret de Mar</p>
            </div>
          </div>
          <ContactForm />
          <div className="map-frame">
            <iframe
              title="Mapa de Playa de Fenals"
              src="https://www.google.com/maps?q=Playa+de+Fenals,+Lloret+de+Mar&output=embed"
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Brava Kayak HUB · Playa de Fenals · Lloret de Mar</p>
        <p>Reservas online y pago online disponibles próximamente.</p>
      </footer>
      <WhatsAppFab />
    </div>
  )
}

export default App
