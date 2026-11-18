const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <nav className="container navbar-inner" aria-label="Main navigation">
        <a href="#" className="navbar-logo" aria-label="ER UDAY home">
          <span className="navbar-mark">ER</span>
          <span className="navbar-word">UDAY</span>
        </a>

        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
