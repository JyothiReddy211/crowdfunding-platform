import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div>
            <Link className="brand-logo footer-brand" to="/">
              <span className="brand-mark" aria-hidden="true">
                CF
              </span>
              <span>CrowdFund</span>
            </Link>
            <p className="footer-copy">
              A modern crowdfunding platform for people building brighter
              futures through education, healthcare, innovation, and community
              action.
            </p>
            <div className="social-links" aria-label="Social links">
              <a href="https://twitter.com" aria-label="Twitter">
                X
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                IG
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                in
              </a>
            </div>
          </div>

          <div>
            <h2 className="footer-title">Platform</h2>
            <div className="footer-links">
              <Link to="/">Explore Campaigns</Link>
              <Link to="/create">Create Campaign</Link>
              <Link to="/my-campaigns">My Campaigns</Link>
            </div>
          </div>

          <div>
            <h2 className="footer-title">Account</h2>
            <div className="footer-links">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          </div>

          <div>
            <h2 className="footer-title">Contact</h2>
            <div className="footer-links">
              <a href="mailto:support@crowdfund.app">support@crowdfund.app</a>
              <a href="tel:+911234567890">+91 12345 67890</a>
              <span>Hyderabad, India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          Copyright {new Date().getFullYear()} CrowdFund. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
