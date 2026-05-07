import { navLinks } from '../content/landing'

export function Header() {
  return (
    <header className="site-header" aria-label="Основная навигация">
      <a className="brand" href="#top" aria-label="Analitex">
        <span className="brand-mark">A</span>
        <span>Analitex</span>
      </a>
      <nav className="nav-links" aria-label="Разделы страницы">
        {navLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#demo">Заказать демо</a>
    </header>
  )
}
