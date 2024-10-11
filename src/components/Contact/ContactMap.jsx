import React from 'react';

const ContactMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.8916520358334!2d28.96990927660938!3d41.02762631823246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab91ef219e13d%3A0x99c136f220088f3!2sPatika.dev%20-%20Bootcamp!5e0!3m2!1str!2sus!4v1728221004514!5m2!1str!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Location Map"
    ></iframe>
  );
};

export default ContactMap;
