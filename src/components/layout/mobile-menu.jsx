import { Link, useLocation } from 'react-router'
import Logo from './logo.jsx'
import { navLinks } from './nav-links.js'

const linkStyle = (active) =>
  `block py-4 font-headline-lg text-headline-md transition-colors border-b border-outline-variant/30 ${
    active ? 'text-secondary font-semibold' : 'text-primary hover:text-secondary'
  }`

function MobileMenu({ open, onClose }) {
  const { pathname } = useLocation()

  if (!open) return null

  return (
    <div className="absolute inset-x-0 top-full z-50 bg-surface-container-lowest/98 backdrop-blur-xl shadow-lg animate-slideDown md:hidden">
      <div className="px-margin-mobile py-4 border-b border-outline-variant/30">
        <Logo size={44} />
      </div>
      <nav className="px-margin-mobile py-2">
        {navLinks.map((l) => {
          const active = l.end ? pathname === l.to : pathname.startsWith(l.to)
          return (
            <Link key={l.to} to={l.to} end={l.end} onClick={onClose} className={linkStyle(active)}>
              {l.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default MobileMenu
