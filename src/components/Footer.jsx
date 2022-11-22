import dukaanlogo from "../assets/images/dukaanlogo.png";
import flag from "../assets/images/flag.png";
import { Divider } from "./Divider";

const Footer = () => {
  return (
    <footer className="mt-80">
      <div className="container">
        <main className="footer-main">
          <img src={dukaanlogo} alt="dukaan-logo" className="logo-img" />

          <div className="footer-section">
            <p>Contact</p>
            <p>FAQ's</p>
          </div>
          <div className="footer-section">
            <p>Tutorials</p>
            <p>Blogs</p>
          </div>
          <div className="footer-section">
            <p>Privacy</p>
            <p>Banned items</p>
          </div>
          <div className="footer-section">
            <p>About</p>
            <p>
              Jobs<span className="badge-count">3</span>
            </p>
          </div>
          <div className="footer-section">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Linkedin</p>
          </div>
        </main>
        <Divider />
        <div className="footer-end">
          <p className="end-item">Dukaan 2020, All rights reserved</p>
          <p className="end-item">
            Made in <img src={flag} alt="india-icon" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
