import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/img/OIP.png'
import './header.css'

function Header() {
  return (
    <header className='header-container'>
      <img id="logo" src={Logo} alt="logo" />
      <nav>
        <ul>
          <Link style={{ textDecoration: 'none' }} to="/">
            <li>Home</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/contato">
            <li>Contato</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/fotos">
            <li>Fotos</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/comentarios">
            <li>Comentários</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
export default Header
