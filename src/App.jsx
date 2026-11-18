import './App.css'
import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import projects from './data/projects'
import contact from './data/contact'

function App() {
  const contactLinks = [
    { label: 'Email', href: contact.email ? `mailto:${contact.email}` : '' },
    { label: 'GitHub', href: contact.github },
    { label: 'LinkedIn', href: contact.linkedin },
  ].filter((link) => link.href)

  return (
    <>
      <Navbar />

      <main className="container portfolio-layout">
        <aside className="profile-panel" aria-label="Profile">
          <img
            className="profile-photo"
            src="/ErUday.jpg"
            alt="Uday Alakunta"
          />

          <h1 className="profile-name">Er Uday</h1>
          <p className="profile-role">AI Automation Builder</p>

          <p className="profile-intro">
           I'm passionatects. about discovering how AI can simplify everyday work, improve productivity, and solve real-world problems. I enjoy experimenting with AI agents, automation workflows, and emerging technologies to turn innovative ideas into practical produ
          </p>

          <div className="profile-status">
            <span className="status-dot" aria-hidden="true" />
            Open to AI Automation Opportunities
          </div>

          {contactLinks.length > 0 && (
            <ul className="profile-social-links" aria-label="Social links">
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
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </aside>

        <div className="portfolio-content">
          <section id="projects" className="content-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SELECTED WORK</p>
                <h2 className="section-title">Projects</h2>
              </div>
              <span className="section-note">
                {projects.length} {projects.length === 1 ? 'project' : 'projects'}
              </span>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          <section id="about" className="content-section about-section">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2 className="section-title">Building useful things with technology.</h2>
            <p className="about-text">
              I'm a developer who enjoys building applications, websites, and
              digital products. I like exploring ideas and turning them into
              practical solutions.
            </p>
          </section>

          <section id="contact" className="content-section contact-section">
            <h2 className="section-title">Have an idea worth automating?</h2>
            <p className="about-text">
              Let's connect! I'm interested in collaborating on AI-powered products, automation solutions, and innovative ideas that make a difference.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
