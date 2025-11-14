const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        © {currentYear} Moviedux, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
