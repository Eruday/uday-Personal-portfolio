import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import projects from './data/projects'
import contact from './data/contact'

function App() {
  const contactLinks = [
    {
      label: 'Email',
      href: contact.email ? `mailto:${contact.email}` : '',
    },
    { label: 'GitHub', href: contact.github },
    { label: 'LinkedIn', href: contact.linkedin },
  ].filter((link) => link.href)

  return (
    <>
      <Navbar />

      <main>
        {/* Introduction */}
        <section className="container hero">
          <h1 className="hero-title">Hi, I'm Uday.</h1>
          <p className="hero-text">
            I build apps, websites, browser extensions, and digital experiences.
          </p>
          <p className="hero-text">
            I enjoy turning ideas into useful products through technology.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="container section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="container section">
          <h2 className="section-title">About</h2>
          <p className="about-text">
            I'm a developer who enjoys building applications, websites, and
            digital products.
          </p>
          <p className="about-text">
            I like exploring ideas and turning them into practical solutions.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="container section">
          <h2 className="section-title">Contact</h2>
          {contactLinks.length > 0 && (
            <ul className="contact-links">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.label !== 'Email' && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App