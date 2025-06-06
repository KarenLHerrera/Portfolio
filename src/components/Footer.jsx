import React from 'react';
import { FaInstagramSquare, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import '../css/Footer.css'
import useStore from '../store/useStore';

const Footer = () => {
  const darkMode = useStore((state) => state.darkMode);
  return (
    <footer className={`footer ${darkMode ? "footer dark" : "footer light"}`}>
      <a
        href="https://www.instagram.com/karenherrera.bd?igsh=MW9ncGgxNWRqeDhoNg=="
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
        className="footer-icon"
      >
        <FaInstagramSquare />
      </a>
      <a
        href="https://www.facebook.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
        className="footer-icon"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        className="footer-icon"
      >
        <CiLinkedin />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=543813541077"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
        className="footer-icon"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;
