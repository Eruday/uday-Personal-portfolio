import './Footer.css'
import contact from '../data/contact'

function Footer() {
  const year = new Date().getFullYear()

  const socialLinks = [
    { label: 'GitHub', href: contact.github },
    { label: 'LinkedIn', href: contact.linkedin },
    { label: 'Email', href: contact.email ? `mailto:${contact.email}` : '' },
  ].filter((link) => link.href)

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <a className="footer-brand" href="#" aria-label="ER UDAY home">
          <span className="footer-brand-mark">ER</span>
          <span>UDAY</span>
        </a>

        <p className="footer-tagline">
          Building useful things with technology.
        </p>

        <div className="footer-bottom">
          <p>© {year} Uday Alakunta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
