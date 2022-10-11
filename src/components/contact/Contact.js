import React from "react";
import { Container } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../../layout/Layout";

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6x6raxt', 'template_9mniltq', form.current, '6RmRA_6_P0WHD7W87')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();

  }
  return (
    <>
      <Layout />
      <Container>
        <div className="container">
          <h1>Contact us</h1>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" placeholder="Full Name"
              name="user_name" required />
            <input type="email"
              placeholder="Email"
              name="user_email" required />
            <input type="text"
              placeholder="Subject"
              name="subject" required />
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit" className="submit-btn">Send in</button>
          </form>
        </div>
      </Container>

    </>
  )
}

export default Contact;