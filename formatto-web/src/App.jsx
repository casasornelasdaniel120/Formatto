import { useState, useEffect } from 'react'
import './App.css'

const IMG = {
  logo:        '/Logo.jpg',
  teamHero:    '/Equipo Fotos/515757296_18035882327656199_3046411195840030183_n.jpg',
  teamOnSite:  '/Equipo Fotos/469212262_18011641337656199_5646113753292267257_n.jpg',
  anaElena:    '/Equipo Fotos/481569930_660667933153851_5337905859087708030_n.jpg',
  teamGroup:   '/Equipo Fotos/515757296_18035882327656199_3046411195840030183_n.jpg',
  frozeExt:    '/Fotos frozee/655931098_18066514532656199_1377483130903858581_n.jpg',
  frozeInt:    '/Fotos frozee/656422864_18066514505656199_6538601295637958114_n.jpg',
  oficRecep:   '/royecto Arquitectonico y Ejecutivo Oficinas /563275381_18048005453656199_8735713940274222304_n.jpg',
  oficJuntas:  '/royecto Arquitectonico y Ejecutivo Oficinas /563366437_18048005471656199_8026139557101208584_n.jpg',
  casaBed:     '/Residencial - Proyecto de Casa Habitación QA101/475884521_18018681389656199_4730525062943821654_n.jpg',
}

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target
        const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal'))
        const idx = siblings.indexOf(el)
        el.style.transitionDelay = (idx * 90) + 'ms'
        el.classList.add('visible')
      })
    }, { threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const close = () => setOpen(false)
  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="nav-logo"><img src={IMG.logo} alt="FORMAtto" /></a>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        <li><a href="#servicios" onClick={close}>Servicios</a></li>
        <li><a href="#proyectos" onClick={close}>Proyectos</a></li>
        <li><a href="#nosotros" onClick={close}>Nosotros</a></li>
        <li><a href="#equipo" onClick={close}>Equipo</a></li>
        <li><a href="#contacto" onClick={close}>Contacto</a></li>
      </ul>
      <a href="#contacto" className="nav-cta">Iniciar proyecto</a>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menú">
        <span /><span /><span />
      </button>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-left reveal">
        <p className="hero-tag">Arquitectura · Diseño · Construcción</p>
        <h1 className="hero-title">Espacios que<br /><em>inspiran,</em><br />construidos<br />para perdurar</h1>
        <p className="hero-desc">Somos un estudio multidisciplinario comprometido con la calidad y el detalle. Desde el primer trazo hasta la entrega final, creamos espacios con carácter propio.</p>
        <div className="hero-btns">
          <a href="#proyectos" className="btn-dark">Ver proyectos</a>
          <a href="#contacto" className="btn-outline">Contáctanos</a>
        </div>
        <div className="hero-stats">
          <div><div className="stat-num">12+</div><div className="stat-label">Años de experiencia</div></div>
          <div><div className="stat-num">80+</div><div className="stat-label">Proyectos realizados</div></div>
          <div><div className="stat-num">6</div><div className="stat-label">Servicios especializados</div></div>
        </div>
      </div>
      <div className="hero-right">
        <img src={IMG.teamHero} alt="Equipo FORMAtto" />
        <div className="hero-badge">
          <div className="hero-badge-text">"El buen diseño se vive."</div>
          <div className="hero-badge-sub">Nuestro equipo — FORMAtto</div>
        </div>
      </div>
    </section>
  )
}

const SERVICIOS = [
  { num: '01', name: 'Diseño Arquitectónico y Ejecutivo', desc: 'Proyectos desde el concepto hasta los planos ejecutivos, integrando estética, funcionalidad y normatividad vigente.' },
  { num: '02', name: 'Construcción', desc: 'Ejecución de obras con los más altos estándares de calidad, supervisión técnica rigurosa y cumplimiento de tiempos y presupuesto.' },
  { num: '03', name: 'Remodelaciones', desc: 'Transformamos espacios existentes con intervenciones precisas que respetan la esencia del lugar y elevan su valor.' },
  { num: '04', name: 'Asesoría en Diseño y Construcción', desc: 'Orientación experta para la toma de decisiones informadas en cada etapa del proceso de tu proyecto.' },
  { num: '05', name: 'Interiorismo', desc: 'Diseño de ambientes interiores con coherencia estética y confort, donde cada detalle responde a la identidad del cliente.' },
  { num: '06', name: 'Diseño y Fabricación de Mobiliario', desc: 'Piezas a medida, diseñadas para integrarse al proyecto y fabricadas con materiales de primera calidad.' },
]

function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <div className="services-top">
        <div className="reveal">
          <p className="section-tag">Lo que hacemos</p>
          <h2 className="section-title">Nuestros<br /><em>Servicios</em></h2>
        </div>
        <div className="reveal">
          <div className="divider" />
          <p className="section-desc">Acompañamiento integral desde la concepción del proyecto hasta su entrega, garantizando calidad, precisión y visión en cada etapa.</p>
        </div>
      </div>
      <div className="services-grid">
        {SERVICIOS.map(s => (
          <div className="service-card reveal" key={s.num}>
            <div className="service-num">{s.num}</div>
            <h3 className="service-name">{s.name}</h3>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const PROYECTOS = [
  { img: IMG.frozeExt,   cat: 'Diseño Comercial',    title: 'FROZÉ — Local Comercial' },
  { img: IMG.oficRecep,  cat: 'Proyecto Ejecutivo',   title: 'Oficinas Instrumatic' },
  { img: IMG.oficJuntas, cat: 'Interiorismo',         title: 'Sala de Juntas' },
  { img: IMG.casaBed,    cat: 'Residencial',          title: 'Casa QA101' },
  { img: IMG.frozeInt,   cat: 'Diseño de Interiores', title: 'FROZÉ — Interior' },
]

function Proyectos() {
  return (
    <section className="proyectos" id="proyectos">
      <div className="projects-top reveal">
        <div>
          <p className="section-tag">Portafolio</p>
          <h2 className="section-title">Proyectos <em>Destacados</em></h2>
        </div>
        <a href="#contacto" className="btn-outline">Iniciar un proyecto</a>
      </div>
      <div className="projects-grid">
        {PROYECTOS.map((p, i) => (
          <div className="proj reveal" key={i}>
            <img src={p.img} alt={p.title} />
            <div className="proj-overlay">
              <div>
                <p className="proj-cat">{p.cat}</p>
                <h3 className="proj-title">{p.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const VALORES = [
  { title: 'Precisión',   desc: 'Cada detalle importa. Nuestra disciplina técnica garantiza resultados impecables.' },
  { title: 'Creatividad', desc: 'Buscamos soluciones originales que sorprendan y perduren en el tiempo.' },
  { title: 'Confianza',   desc: 'Relaciones duraderas basadas en transparencia y resultados reales.' },
  { title: 'Compromiso',  desc: 'Cada proyecto se trata como si fuera propio, de inicio a fin.' },
]

function Nosotros() {
  return (
    <section className="nosotros" id="nosotros">
      <div className="nosotros-grid">
        <div className="reveal">
          <p className="section-tag">Quiénes somos</p>
          <h2 className="section-title">Diseño con<br /><em>propósito</em></h2>
          <div className="divider" />
          <p className="section-desc">Somos un estudio apasionado por crear espacios que trascienden lo estético. Cada proyecto nace de una escucha profunda, un proceso creativo riguroso y un compromiso genuino con la calidad.</p>
          <div className="nosotros-values">
            {VALORES.map(v => (
              <div key={v.title}>
                <h4 className="value-title">{v.title}</h4>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="nosotros-img-wrap reveal">
          <img src={IMG.teamOnSite} alt="Equipo FORMAtto en obra" />
          <div className="nosotros-quote"><p>"Construimos espacios que se convierten en hogar."</p></div>
        </div>
      </div>
    </section>
  )
}

function Equipo() {
  return (
    <section className="equipo" id="equipo">
      <div className="reveal">
        <p className="section-tag">Las personas detrás del trabajo</p>
        <h2 className="section-title">Nuestro <em>Equipo</em></h2>
        <div className="divider" />
        <p className="section-desc">Profesionales apasionadas, con formación multidisciplinaria y una visión compartida de la arquitectura y el diseño.</p>
      </div>
      <div className="equipo-grid">
        <div className="equipo-featured reveal">
          <img src={IMG.anaElena} alt="Ana Elena Ramos Rivera" />
          <h4 className="team-name">Ana Elena Ramos Rivera</h4>
          <p className="team-role">Licenciada en Arquitectura · Directora</p>
          <p className="team-contact"><a href="tel:8712415537">871 241 5537</a></p>
        </div>
        <div className="equipo-group reveal">
          <img className="equipo-group-img" src={IMG.teamGroup} alt="Equipo FORMAtto" />
          <div className="equipo-group-caption">
            <h4>Un equipo comprometido</h4>
            <p>En FORMAtto somos un grupo de profesionales unidas por la misma pasión: crear espacios que transformen la vida de las personas. Trabajamos con dedicación, cuidado y creatividad en cada proyecto que emprendemos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const PASOS = [
  { num: '01', title: 'Escucha',   desc: 'Comprendemos a fondo tus necesidades, estilo de vida y visión del proyecto.' },
  { num: '02', title: 'Concepto',  desc: 'Desarrollamos una propuesta creativa única, alineada con tu identidad y presupuesto.' },
  { num: '03', title: 'Diseño',    desc: 'Elaboramos planos, renders y especificaciones técnicas con total precisión.' },
  { num: '04', title: 'Ejecución', desc: 'Supervisamos cada etapa de la obra para garantizar calidad y cumplimiento.' },
  { num: '05', title: 'Entrega',   desc: 'Te entregamos un espacio que supera tus expectativas, listo para vivirse.' },
]

function Proceso() {
  return (
    <section className="proceso" id="proceso">
      <div className="proceso-top reveal">
        <p className="section-tag">Cómo trabajamos</p>
        <h2 className="section-title">Nuestro <em>Proceso</em></h2>
      </div>
      <div className="proceso-grid">
        {PASOS.map(p => (
          <div className="paso reveal" key={p.num}>
            <div className="paso-num">{p.num}</div>
            <h4 className="paso-title">{p.title}</h4>
            <p className="paso-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contacto() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); e.target.reset() }, 3000)
  }
  return (
    <section id="contacto" style={{ padding: 0 }}>
      <div className="contacto-wrap">
        <div className="contact-left reveal">
          <p className="section-tag">Hablemos</p>
          <h2 className="section-title">¿Tienes un<br /><em>proyecto</em><br />en mente?</h2>
          <div className="divider" />
          <p className="section-desc">Cuéntanos tu idea. Estaremos encantadas de acompañarte desde el primer trazo hasta la última piedra.</p>
          <div className="contact-details">
            <div><p className="c-label">Teléfono</p><p className="c-val"><a href="tel:8712415537">871 241 5537</a></p></div>
            <div><p className="c-label">Correo</p><p className="c-val"><a href="mailto:hola@formatto.mx">hola@formatto.mx</a></p></div>
            <div><p className="c-label">Instagram</p><p className="c-val"><a href="https://instagram.com/formatto" target="_blank" rel="noreferrer">@formatto</a></p></div>
            <div><p className="c-label">Ubicación</p><p className="c-val">México</p></div>
          </div>
        </div>
        <div className="contact-right reveal">
          <p className="section-tag" style={{ marginBottom: '30px' }}>Envíanos un mensaje</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group"><label>Nombre</label><input type="text" placeholder="Tu nombre" required /></div>
              <div className="form-group"><label>Correo</label><input type="email" placeholder="tu@correo.com" required /></div>
            </div>
            <div className="form-group">
              <label>Servicio de interés</label>
              <select>
                <option value="">Selecciona un servicio…</option>
                <option>Diseño Arquitectónico y Ejecutivo</option>
                <option>Construcción</option>
                <option>Remodelaciones</option>
                <option>Asesoría en Diseño y Construcción</option>
                <option>Interiorismo</option>
                <option>Diseño y Fabricación de Mobiliario</option>
              </select>
            </div>
            <div className="form-group"><label>Mensaje</label><textarea placeholder="Cuéntanos sobre tu proyecto…" /></div>
            <button type="submit" className={`form-submit${sent ? ' sent' : ''}`}>{sent ? '✓ Mensaje enviado' : 'Enviar mensaje'}</button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <img src={IMG.logo} alt="FORMAtto" />
      <p className="footer-copy">© 2025 FORMAtto. Todos los derechos reservados.</p>
      <ul className="footer-links">
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#equipo">Equipo</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </footer>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <Hero />
      <Servicios />
      <Proyectos />
      <Nosotros />
      <Equipo />
      <Proceso />
      <Contacto />
      <Footer />
    </>
  )
}
