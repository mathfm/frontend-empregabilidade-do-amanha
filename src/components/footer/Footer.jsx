import './Footer.css'
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="footer">
      <figure className="img-footer">
        <img src="/src/assets/logo-site.svg" alt="" />
      </figure>
      <div className='group-info'>
        <div className='group-icon'>
          <a href="#">
            <FaInstagram className="icon-footer" />
          </a>
          <a href="#">
            <FaLinkedin className="icon-footer" />
          </a>
        </div>
        <p>© All coprights reserved to Squad 6 ❤️</p>
      </div>
      <div className='text-group-info'>
        <h3>Quem somos?</h3>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </div>
    </footer>
  )
}


