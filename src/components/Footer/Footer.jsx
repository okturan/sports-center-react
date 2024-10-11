import React from 'react';
import FooterIntro from './FooterIntro';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <FooterIntro />
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;
