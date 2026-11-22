import { NavLink } from 'react-router'
import logo from '../assets/pw-logo.webp'

function Header() {
  return (
    <header>
      <img src={logo} alt="Potter's Wheel" width="300" height="175" />
      <nav className="header-nav">
        <NavLink to="/forms">Forms</NavLink>
        <NavLink to="/admin">Admin View</NavLink>
      </nav>
    </header>
  )
}

export default Header
