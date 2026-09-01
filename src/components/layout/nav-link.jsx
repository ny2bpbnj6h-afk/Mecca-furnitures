import { NavLink } from 'react-router'

const activeClass =
  'border-b-2 border-secondary pb-1 font-body-md text-body-md text-secondary transition-all duration-200 hover:scale-105 active:scale-95'
const inactiveClass =
  'font-body-md text-body-md text-on-surface-variant transition-all duration-300 hover:scale-105 hover:text-secondary active:scale-95'

function NavLinkItem({ to, end, children }) {
  const className = ({ isActive }) => (isActive ? activeClass : inactiveClass)
  return (
    <NavLink to={to} end={end} className={className}>
      {children}
    </NavLink>
  )
}

export default NavLinkItem
