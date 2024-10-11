import React from 'react';
import FooterColumn from './FooterColumn';

const FooterLinks = () => {
  const infoLinks = [
    { text: 'About Us', href: '#contact' },
    { text: 'Classes', href: '#classes' },
    { text: 'Blog', href: '#' },
    { text: 'Contact', href: '#contact' },
  ];

  const helpfulLinks = [
    { text: 'Services', href: '#' },
    { text: 'Support', href: '#' },
    { text: 'Terms & Conditions', href: '#' },
    { text: 'Privacy Policy', href: '#' },
  ];

  return (
    <div className="footer__links">
      <FooterColumn title="Information" links={infoLinks} />
      <FooterColumn title="Helpful Links" links={helpfulLinks} />
    </div>
  );
};

export default FooterLinks;
