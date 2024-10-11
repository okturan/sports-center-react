import React from 'react';
import logo from '/src/assets/logo.png';

const FooterIntro = () => {
  return (
    <div className="footer__intro">
      <img src={logo} alt="Sports Center Logo" className="footer__logo" />
      <p>
        At Sports Center, we are committed to providing top-notch facilities and expert guidance to help you achieve
        your fitness goals. Join our community and embark on a journey towards a healthier, happier you.
      </p>
    </div>
  );
};

export default FooterIntro;
