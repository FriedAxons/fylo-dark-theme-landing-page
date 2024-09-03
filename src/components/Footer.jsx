const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-section">
        <img src="/public/images/logo.svg" alt="Fylo logo" />
        <p className="logo-section-text">
          <div className="icon-container">
            <img
              src="/public/images/icon-location.svg"
              alt="Location icon"
              className="location-icon"
            />
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="contact-info-section">
        <div className="phone-number-container">
          <i className="fa-solid fa-phone-volume"></i>
          <p>+1-543-123-4567</p>
        </div>
        <div className="email-address-container">
          <i className="fa-solid fa-envelope"></i>
          <p>example@fylo.com</p>
        </div>
      </div>
      <div className="about-and-contact-us-section">
        <div className="about-section">
          <p>About Us</p>
          <p>Jobs</p>
          <p>Press</p>
          <p>Blog</p>
        </div>
        <div className="contact-section">
          <p>Contact Us</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
      </div>
      <div className="social-links-section">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
    </footer>
  );
};

export default Footer;
