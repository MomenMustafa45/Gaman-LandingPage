import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logoImage from "../../images/footericon.png";

const Footer = () => {
  return (
    <footer className="footer-parent">
      <div className="main-footer-container">
        <div className="logo-footer-container">
          <div>
            <img src={logoImage} alt="this is logo img" />
            <p>GAMAN</p>
          </div>
          <p>
            Made with <i class="bi bi-heart-fill"></i> in India
          </p>
        </div>

        {/* Links */}

        <div className="footer-links-parent">
          <div className="links-container">
            <Link>About us</Link>
            <Link>Privacy policy</Link>
            <Link>Terms & condition</Link>
            <Link>Careers</Link>
            <Link>Creator zone</Link>
          </div>
          <div className="contact-container">
            <div className="social-container">
              <p>Follow us on</p>
              <div className="social-icons">
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-youtube"></i>
              </div>
            </div>

            <div className="contact-us">
              <p>support@gaman.in</p>
              <Link to="/">CONTACT US</Link>
            </div>
          </div>
        </div>

        {/* Social Icons for responsive */}
        {/* Social Icons for responsive */}
        <div className="social-container-responsive">
          <p>Follow us on</p>
          <div className="social-icons">
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-youtube"></i>
          </div>
        </div>
      </div>

      {/*  */}
      {/*  */}

      <div className="copyright-container">
        <p>Copyright © 2023 Gaman Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
