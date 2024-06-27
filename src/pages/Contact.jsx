import { useState } from "react";
import { send } from "emailjs-com";

import { Container, Row, Col } from "react-bootstrap";
import cameraClipart from "../assets/images/cameraClipart.png"
import { FaMailBulk } from "react-icons/fa";

import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    // Very basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const templateParams = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: formData.message,
      };

      if (formData.company) {
        templateParams.company = formData.company;
      }

      // Send email using EmailJS
      send(
        "service_18mue07",
        "template_cfjw3yl",
        templateParams,
        "nkbfmoPkd4Tr3OQNX"
      )
        .then((response) => {
          console.log("Email sent successfully:", response);
          setSuccessMessage("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          setSuccessMessage("");
          // You can set an error message here if needed
        });
    }
  };

  return (
    <Container
      fluid
      className=" p-0 justify-content-center text-center contactBackground align-items-center"
    >
      <Row className="justify-content-center">
        <Col lg={4} xs={12} className="contactHalf text-center justify-content-center pb-3 mt-5">
      <Row className="titleDiv">
        <h2 className="m-0 mb-3 pt-3">Message Us!  <FaMailBulk className="mailIcon"/></h2>
      </Row>
      <Row>
        <h4 className="text-center m-auto contactDescription pb-2">
          If you'd like to contact me about a shoot, collaborations, or other
          services, use the form below.
        </h4>
      </Row>
 

      <form onSubmit={handleSubmit} className="text-left pt-3">
        <Row className="mb-3 justify-content-center">
          <Col md={4}>
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <div className="invalid-feedback">{errors.firstName}</div>
            )}
          </Col>
          <Col md={4}>
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <div className="invalid-feedback">{errors.lastName}</div>
            )}
          </Col>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Col md={4}>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </Col>
          <Col md={4}>
            <label htmlFor="company" className="form-label">
              Company (optional)
            </label>
            <input
              type="text"
              className="form-control"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Col md={8}>
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback">{errors.message}</div>
            )}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <button type="submit" className="sendMessage p-3">
              Send Message
            </button>
          </Col>
        </Row>
        {successMessage && (
          <div className="alert alert-success mt-3">{successMessage}</div>
        )}
      </form>
      </Col>
      <Col lg={6} xs={12} className="pt-5 pb-5">
      <img src={cameraClipart}
      alt="transparent clipart photo of photgrapher" 
      className="contactImg"/>
      </Col>
      </Row>
      <Footer />
    </Container>
  );
}
