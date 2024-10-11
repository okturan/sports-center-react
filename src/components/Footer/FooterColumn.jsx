import React from 'react';

const FooterColumn = ({ title, links }) => {
  return (
    <div className="footer__column">
      <h2>{title}</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
