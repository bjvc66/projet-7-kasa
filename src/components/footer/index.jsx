import React from 'react';
import '../../style/components/footer.scss';
import logo from "../../assets/images/logo_footer.png"
function Footer()  {
    return (
      <footer className="Contfooter">
        <img src={logo} alt="footer" className="footer__logo" />
        <p className="footer__text-copyright">
          © 2020 Kasa. All rights reserved
        </p>
      </footer>
    );
}

export default Footer;
