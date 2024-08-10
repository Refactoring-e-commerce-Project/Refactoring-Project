'use client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8ls8vkk', 'template_nqderih', form.current, {
        publicKey: 'Amp84BH5ABBXGcXjg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: "Thank You!",
            text: "Email sended!",
            icon: "success"
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-method">
          <i className="fas fa-phone-alt"></i>
          <h2>Call To Us</h2>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +55654746</p>
      
            <hr/>
          
        </div>

        <div className="contact-method">
          <i className="fas fa-envelope"></i>
          <h2>Write To Us</h2>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: raedqlfzouaoui1236@gmail.com.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>

      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
            <div style={{display: 'flex', gap: '8px'}}>
          <input type="text" placeholder="Your Name" required style={   { backgroundColor : '#f5f5f5'}} name='user_name'/>
          <input type="email" placeholder="Your Email" required  style={   { backgroundColor : '#f5f5f5'}} name='user_email'/>
          <input type="tel" placeholder="Your Phone" required  style={   { backgroundColor : '#f5f5f5'}} name='user_tel'/>
          </div>
          <textarea placeholder="Your Message" style={   { backgroundColor : '#f5f5f5' ,height: '200px'}} name='message'></textarea>
          <button type="submit" value="send ">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;