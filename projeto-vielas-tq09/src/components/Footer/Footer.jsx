import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter,FaWhatsapp,FaLinkedinIn} from "react-icons/fa"
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='title-Icons'>
          <div className='titleV'>
            <h1>VIELAS</h1>
          </div>        
          <div className='footer-icons'>
            <a href="#"><i class="i-facebook"><FaFacebookF /></i></a>
            <a href="#"><i class="i-instagram"><FaInstagram /></i></a>
            <a href="#"><i class="i-twitter"><FaTwitter /></i></a>
            <a href="#"><i class="i-whatsapp"><FaWhatsapp /></i></a>
            <a href="#"><i class="i-linkedin"><FaLinkedinIn /></i></a>
          </div>
        </div>
        <div className='footer-text'>
          <ul className='footerL'>
            <li>Quem Somos</li>
            <li>Equipe</li>
            <li>Apoie</li>
            <li>Fale Conosco</li>
          </ul>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer