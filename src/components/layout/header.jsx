import { useState } from 'react'
import { Link } from 'react-router'
import NavLinkItem from './nav-link.jsx'
import HeaderActions from './header-actions.jsx'
import MobileMenu from './mobile-menu.jsx'
import Logo from './logo.jsx'
import { navLinks } from './nav-links.js'

const menuBtn = 'text-primary transition-colors hover:text-secondary md:hidden'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-surface-container-low/90 shadow-sm backdrop-blur-xl transition-all duration-300 relative">
      <div className="mx-auto flex h-20 w-full max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center gap-3">
          <button aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)} className={menuBtn}>
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
          <Link to="/" className="flex items-center">
            <Logo size={56} />
          </Link>
        </div>
        <div className="hidden items-center gap-gutter md:flex">
          {navLinks.map((l) => (
            <NavLinkItem key={l.to} to={l.to} end={l.end}>{l.label}</NavLinkItem>
          ))}
        </div>
        <HeaderActions />
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </nav>
  )
}

export default Header
