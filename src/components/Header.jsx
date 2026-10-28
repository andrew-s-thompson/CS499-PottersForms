import logo from '../assets/pw-logo.webp'

function Header({onAdminClick}) {
  return (
    <header>
      <img src={logo} alt="Potter's Wheel" width="300" height="175" />
      <button type="button" className="header-button" onClick={onAdminClick}>Admin</button>
    </header>
  )
}

export default Header