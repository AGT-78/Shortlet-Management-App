import { assets } from '../../assets/assets'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import '../styles/Footer.css'



const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <p>Stay connected with us on social media!</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section about">
          <h3>Land-BNB</h3>
          <p>
            Your best finds of Apartments for Your Vacation
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>My Bookins</li>
            <li>Top Rated Apartments</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>
            <MdLocationOn /> 123 Twelveth Street, Gotham City
          </p>
          <p>
            <MdEmail /> support@gamehub.com
          </p>
          <p>
            <MdPhone /> +123 456 7890
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GameHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;