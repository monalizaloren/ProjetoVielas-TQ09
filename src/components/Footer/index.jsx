import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FooterContainer from "./FooterContainer";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="title-icon-social-footer">
        <h1 className="title-footer">VIELAS</h1>
        <section className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="icon-facebook">
              <FaFacebookF />
            </i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="icon-instagram">
              <FaInstagram />
            </i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="icon-twitter">
              <FaTwitter />
            </i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="icon-whatsapp">
              <FaWhatsapp />
            </i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="icon-linkedin">
              <FaLinkedinIn />
            </i>
          </a>
        </section>
      </div>
      <ul className="links-footer">
        <Link to="#">
          <li>Quem Somos</li>
        </Link>
        <Link to="#">
          <li>Equipe</li>
        </Link>
        <Link to="#">
          <li>Apoie</li>
        </Link>
        <Link to="#">
          <li>Fale Conosco</li>
        </Link>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
