import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";
const defaultField = {
  name: "",
  subject: "",
  email: "",
  message: "",
};

const ContactUsForm = () => {
  const [formFields, setFormFields] = useState(defaultField);
  const { name, subject, email, message } = formFields;

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_96y9mr1",
        "template_1z4xwg4",
        formFields,
        "GHAcj-X_o2y5wFjlE"
      )
      .then(
        (response) => {
          setSuccessMessage(
            "Message sent successfully!",
            response.status,
            response.text
          );
          setFormFields(defaultField);
        },
        (error) => {
          setErrorMessage("Failed to send message. Please try again.", error);
        }
      );
  };
  return (
    <div className="contactForm">
      <div className="w-100 m-auto align-items-center shadow bg-white contactForm-inner">
        <h2 className="mb-4">Contact Form</h2>
        <div></div>
        <form className="d-grid" action="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="w-100 ps-2"
              id="name"
              placeholder="Name"
              type="text"
              required
              value={name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="w-100 ps-2"
              id="subject"
              placeholder="Subject"
              type="text"
              required
              value={subject}
              name="subject"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="w-100 ps-2"
              id="email"
              placeholder="Email"
              type="email"
              required
              value={email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <textarea
              rows="5"
              className="w-100 ps-2"
              id="message"
              placeholder="message"
              type="text"
              required
              value={message}
              name="message"
              onChange={handleChange}
            />
          </div>

          <div className="contact-us-form-send-message">
            <button type="submit" className="btn btn-danger  mb-2">
              Send Message
            </button>

            {successMessage && <p className="text-success">{successMessage}</p>}
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
