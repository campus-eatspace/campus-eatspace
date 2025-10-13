import logo from "../assets/logo.png";
import From from "../assets/from.png";
import To from "../assets/to.png";
import Crib from "../assets/crib.png";
import "../style/auth-footer.css"
import whatsapp from "../assets/whatsapp.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";

const Footer: React.FC = () => {
  return (
    <footer className="campus-footer">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="CampusEats Logo" className="logo-icon" />
        </div>
        {/* Logo and Main Content */}
        <div className="text-center campus mb-4">
          {/* Logo with vegetable icon */}
          <div className="d-flex align-items-center justify-content-center mb-4">
            <h2 className="campus-title">CampusEats</h2>
          </div>
          
          {/* From Cafeteria To Crib tagline */}
          <div className="tagline-container">
            <img 
              src={From}
              alt="From" 
              className="tagline-image"
            />
            <span className="cafeteria-text">Cafeteria</span>
            <img 
              src={To} 
              alt="To" 
              className="tagline-image"
            />
            <img 
              src={Crib}
              alt="Crib" 
              className="tagline-image"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row align-items-center footer-bottom">
          <div className="col-md-6">
            <p className="rights-text">All Rights Reserved</p>
          </div>
          <div className="col-md-6">
            <div className="social-section">
              <span className="social-label">Socials:</span>
              <br />
              <div className="social-icons">
                <a href="#" className="social-link">
                  <img src={whatsapp} alt="whatsapp" className="soc-img"/>
                </a>
                <a href="#" className="social-link">
                  <img src={twitter} alt="twitter" className="soc-img"/>
                </a>
                <a href="#" className="social-link">
                  <img src={linkedin} alt="linkedin" className="soc-img"/>
                </a>
              </div>
            </div>
            <div className="terms-section">
              <a href="#" className="terms-link">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;