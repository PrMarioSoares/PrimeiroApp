import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/OIP.png'
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <img id="logo" src={Logo} alt="logo" />
        <span>Todos os direitos reservados © </span>
        <span>Desenvolvido por: Lucimário Soares</span>
        <div >
            <nav className="footer-navigation">
              <ul className="footer-list">
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
        </div>
      </footer>
    </>
  )
}

export default Footer
