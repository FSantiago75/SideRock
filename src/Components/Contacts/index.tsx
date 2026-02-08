import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube, FaSpotify } from 'react-icons/fa';
import './styles.css';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="social-icons">
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaWhatsapp />
        </a>
        <a href="https://instagram.com/bandasiderock" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://facebook.com/sua-pagina" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook />
        </a>
        <a href="https://youtube.com/seu-canal" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaYoutube />
        </a>
        <a href="https://open.spotify.com/artist/sua-conta" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaSpotify />
        </a>
      </div>
    </div>
  );
};

export default Contacts; 