import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Search,
} from 'lucide-react'

const projects = [
  {
    title: 'Cafés Oviedo',
    type: 'Producto propio',
    status: 'Publicado',
    description:
      'Directorio editorial de cafeterías de especialidad en Oviedo. Un proyecto pequeño y completo para trabajar arquitectura web, contenido útil y posicionamiento local.',
    url: 'https://cafesoviedo.com/',
    image: '/projects/cafes-oviedo.png',
    tags: ['SEO local', 'Contenido', 'UX'],
  },
  {
    title: 'Mis Manitas',
    type: 'Marketplace de servicios',
    status: 'En desarrollo',
    description:
      'Plataforma para conectar necesidades domésticas con profesionales cercanos. El trabajo actual se centra en definir el producto, ordenar la información y reducir fricción.',
    url: 'https://mismanitas.vercel.app/',
    image: '/projects/mis-manitas.png',
    tags: ['React', 'Producto', 'Servicios'],
  },
  {
    title: 'Oviedo Tenis',
    type: 'Proyecto local',
    status: 'En preparación',
    description:
      'Sitio orientado a recopilar información útil para jugadores y aficionados al tenis en Oviedo. En fase de contenido, estructura y validación previa al despliegue.',
    image: '/projects/oviedo-tenis.jpg',
    tags: ['SEO local', 'Comunidad', 'Investigación'],
  },
]

const timeline = [
  {
    period: '2023 — actualidad',
    role: 'Responsable SEO',
    company: 'Grupo ATU',
    logo: '/logo-grupo-atu.png',
    logoClass: 'atu',
    description:
      'Trabajo sobre visibilidad orgánica, análisis de datos, investigación de mercados y mejora continua de activos digitales.',
    active: true,
  },
  {
    period: '2022 — actualidad',
    role: 'Consultoría tecnológica y SEO',
    company: 'Proyectos digitales y formación',
    description:
      'Estrategia digital, analítica y diseño web. Desarrollo de soluciones prácticas para mejorar la presencia online y ordenar procesos.',
    active: true,
  },
  {
    period: '2021',
    role: 'Gestión comercial y operativa',
    company: 'Banco Santander',
    logo: '/logo-santander.png',
    logoClass: 'santander',
    description:
      'Atención al cliente, gestión de cartera y trabajo diario con procesos, objetivos y necesidades financieras concretas.',
  },
  {
    period: '2020 — 2021',
    role: 'Community Manager',
    company: 'Magnadea Ingeniería Asturiana',
    logo: '/logo-magnadea.png',
    logoClass: 'magnadea',
    description:
      'Gestión de redes sociales, analítica, diseño web y campañas de Social Ads para reforzar la comunicación digital.',
  },
]

const education = [
  ['2023', 'Desarrollo de Aplicaciones Multiplataforma', 'Instituto Juan José Calvo Miguel'],
  ['2022', 'Transformación Digital e Industria 4.0', 'Escuela de Organización Industrial · 300 horas'],
  ['2021', 'Grado en Comercio y Marketing', 'Universidad de Oviedo · Facultad de Jovellanos'],
]

const skills = [
  ['Estrategia y análisis', ['SEO técnico', 'SEO local', 'Investigación de mercados', 'Analítica digital', 'Excel']],
  ['Producto digital', ['Arquitectura web', 'UX', 'WordPress', 'React', 'Vercel']],
  ['Comunicación', ['Contenido web', 'Social Ads', 'Gestión de RRSS', 'Microsoft Office']],
]

const technologies = [
  ['Java', '/technologies/java.svg'],
  ['JavaScript', '/technologies/javascript.svg'],
  ['SQL', '/technologies/sql.svg'],
  ['React', '/technologies/react.svg'],
  ['Spring', '/technologies/spring.svg'],
  ['Spring Boot', '/technologies/spring.svg'],
  ['HTML', '/technologies/html.svg'],
  ['CSS', '/technologies/css.svg'],
]

const seoTools = [
  ['WordPress', '/seo-tools/wordpress.svg'],
  ['Semrush', '/seo-tools/semrush.svg'],
  ['Screaming Frog', '/seo-tools/screamingfrog.jpg', 'frog'],
  ['Meta', '/seo-tools/meta.svg'],
  ['Search Console', '/seo-tools/search-console.svg'],
  ['Looker Studio', '/seo-tools/looker-studio.svg'],
  ['Figma', '/seo-tools/figma.svg'],
  ['Webflow', '/seo-tools/webflow.svg'],
]

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  )
}

export default function App() {
  return (
    <main>
      <div className="bg-grid" aria-hidden="true" />
      <div className="glow glow-purple" aria-hidden="true" />
      <div className="glow glow-blue" aria-hidden="true" />
      <header className="site-header">
        <div className="shell header-inner">
          <a href="#inicio" className="brand" aria-label="Volver al inicio">
            <span>LB</span>
            <span className="brand-name">Lucas Blanco</span>
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#proyectos">Proyectos</a>
            <a href="#trayectoria">Trayectoria</a>
            <a href="#perfil">Perfil</a>
          </nav>
          <a className="header-link" href="#contacto">
            Escribir <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <section id="inicio" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio profesional · 2026</p>
          <h1>
            Portfolio de
            <span> Lucas Blanco Álvarez.</span>
          </h1>
          <p className="hero-description">
            Soy Lucas Blanco. Combino formación en marketing y desarrollo para abordar proyectos
            digitales desde una perspectiva práctica: entender el contexto, ordenar la información
            y construir soluciones que puedan medirse y mejorar.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#trayectoria">
              Ver trayectoria <ArrowUpRight size={17} />
            </a>
            <a className="button secondary" href="#proyectos">Explorar proyectos</a>
          </div>
        </div>

        <aside className="profile-card" aria-label="Resumen profesional">
          <div className="terminal-bar">
            <span /><span /><span />
            <code>profile.json</code>
          </div>
          <div className="profile-photo">
            <img src="/lucas-profile.png" alt="Lucas Blanco Álvarez" />
            <span className="availability"><i /> Disponible para oportunidades</span>
          </div>
          <div>
            <p className="profile-label">Perfil</p>
            <p className="profile-title">SEO & Digital Product</p>
            <code className="profile-code">const focus = ['strategy', 'seo', 'web'];</code>
          </div>
          <div className="profile-meta">
            <span><MapPin size={15} /> Oviedo, Asturias</span>
            <span><BriefcaseBusiness size={15} /> Experiencia desde 2020</span>
          </div>
          <div className="profile-focus">
            <p>Áreas de trabajo</p>
            <div>
              <span><Search size={15} /> SEO</span>
              <span><Code2 size={15} /> Desarrollo</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="snapshot">
        <div className="shell snapshot-grid">
          <div><strong>03</strong><span>proyectos propios</span></div>
          <div><strong>2020</strong><span>inicio profesional</span></div>
          <div><strong>SEO + DEV</strong><span>perfil híbrido</span></div>
          <p>Una selección concisa para entender cómo trabajo y qué puedo aportar a un equipo.</p>
        </div>
      </section>

      <section id="proyectos" className="section shell">
        <SectionTitle
          eyebrow="01 · Proyectos seleccionados"
          title="Trabajo propio, explicado con contexto."
          text="Estos proyectos me sirven para aplicar conocimientos, detectar problemas reales y recorrer el proceso completo: desde la idea hasta la publicación."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-head">
                <span className="project-index">0{index + 1}</span>
                <span className="status">{project.status}</span>
              </div>
              <div className="project-visual">
                <img src={project.image} alt={`Vista previa de ${project.title}`} />
              </div>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              {project.url ? (
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                  Visitar proyecto <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="project-link muted">Publicación pendiente</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="trayectoria" className="section section-muted">
        <div className="shell trajectory-layout">
          <SectionTitle
            eyebrow="02 · Trayectoria"
            title="Una evolución entre negocio y tecnología."
            text="Mi recorrido parte del marketing y la atención al cliente, incorpora la estrategia digital y continúa ampliándose con desarrollo de software."
          />
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.role}`}>
                <div className={`timeline-marker${item.active ? ' active' : ''}`} />
                {item.logo && (
                  <div className={`company-logo ${item.logoClass || ''}`}>
                    <img src={item.logo} alt={`Logo de ${item.company}`} />
                  </div>
                )}
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-description">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="perfil" className="section shell">
        <SectionTitle
          eyebrow="03 · Formación y herramientas"
          title="Una base multidisciplinar."
          text="La combinación de marketing, transformación digital y programación me permite conversar con perfiles distintos y mantener una visión de conjunto."
        />
        <div className="profile-grid">
          <div className="education-panel">
            <div className="panel-heading">
              <GraduationCap size={19} />
              <h3>Formación</h3>
            </div>
            {education.map(([year, title, place]) => (
              <article className="education-item" key={title}>
                <span>{year}</span>
                <div>
                  <h4>{title}</h4>
                  <p>{place}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="skills-panel">
            {skills.map(([category, items]) => (
              <div className="skill-group" key={category}>
                <h3>{category}</h3>
                <div className="tag-list">
                  {items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tech-stack">
          <div className="tech-stack-copy">
            <p className="eyebrow">Stack técnico</p>
            <h3>Tecnologías con las que he trabajado.</h3>
            <p>
              Tengo nociones de Java, JavaScript, SQL, React, Spring, Spring Boot, HTML y CSS,
              además de otras bases relacionadas con desarrollo web.
            </p>
          </div>
          <div className="tech-marquee" aria-label="Tecnologías conocidas">
            <div className="tech-track">
              {[...technologies, ...technologies].map(([name, logo], index) => (
                <div className="tech-card" key={`${name}-${index}`} aria-hidden={index >= technologies.length}>
                  <img src={logo} alt="" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="tech-stack seo-stack">
          <div className="tech-stack-copy">
            <p className="eyebrow">SEO & no-code</p>
            <h3>Herramientas que forman parte de mi trabajo.</h3>
            <p>
              Trabajo con herramientas de análisis, auditoría, medición y construcción web como
              WordPress, Semrush, Screaming Frog, Meta, Search Console, Looker Studio, Figma y Webflow.
            </p>
          </div>
          <div className="tech-marquee" aria-label="Herramientas de SEO y producto web">
            <div className="tech-track reverse">
              {[...seoTools, ...seoTools].map(([name, logo, logoClass], index) => (
                <div className={`tech-card seo-tool ${logoClass || ''}`} key={`${name}-${index}`} aria-hidden={index >= seoTools.length}>
                  <img src={logo} alt="" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="note">
          <p className="eyebrow">En paralelo</p>
          <h2>Oviseo Digital</h2>
          <p>
            Proyecto profesional propio centrado en presencia digital, diseño web y SEO local para
            pequeños negocios. Es también un espacio donde seguir probando procesos y herramientas.
          </p>
          <a href="https://oviseodigital.es/" target="_blank" rel="noreferrer">
            Conocer el proyecto <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <section id="contacto" className="contact">
        <div className="shell contact-inner">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2>Hablemos.</h2>
            <p>Estoy abierto a conocer equipos y oportunidades donde aportar una mirada transversal.</p>
          </div>
          <div className="contact-links">
            <a href="mailto:lucasblancoalv14@gmail.com"><Mail size={18} /> Email</a>
            <a href="https://www.linkedin.com/in/lucas-blanco-%C3%A1lvarez/" target="_blank" rel="noreferrer"><Globe size={18} /> LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <span>Lucas Blanco Álvarez</span>
          <span>Portfolio profesional · 2026</span>
        </div>
      </footer>
    </main>
  )
}
