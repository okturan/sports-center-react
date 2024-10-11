import React from 'react';
import SectionHeader from '../SectionHeader';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

const Contact = () => {
  return (
    <section id="contact" className="contact-wrapper">
      <SectionHeader
        title="Contact Us"
        text="We're here to help you with any questions or to schedule an appointment. Get in touch with us today!"
      />
      <div className="contact-content">
        <div className="contact__form">
          <ContactDetails />
          <h3>Make An Appointment</h3>
          <ContactForm />
        </div>
        <div className="contact__map">
          <ContactMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;
