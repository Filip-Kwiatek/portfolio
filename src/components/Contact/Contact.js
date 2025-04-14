import React, { useState } from "react";
import emailjs from "emailjs-com";
import classes from "./Contact.module.css";
import ConfirmButton from "../ConfirmButton/ConfirmButton";

const Contact = React.forwardRef((props, ref) => {
  const [hoverTriggered, setHoverTriggered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [error, setError] = useState(""); 

  const handleMouseEnter = () => {
    if (!hoverTriggered) {
      setHoverTriggered(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validations:
    if (!formData.email.includes("@") ||
        formData.subject.trim().length <= 4 ||
        formData.message.trim().length <= 12) {
      setError("Please fill all inputs!");
      return;
    }
    setError(""); // Clear error if validations pass

    emailjs
      .send(
        "YOUR_SERVICE_ID",   // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",  // Replace with your EmailJS template ID
        formData,
        "YOUR_USER_ID"       // Replace with your EmailJS user/public key
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert("Failed to send email.");
        }
      );
  };

  return (
    <div
      className={`${classes.wrapper} ${hoverTriggered ? classes.triggered : ""}`}
      onMouseEnter={handleMouseEnter}
    >
      <h1 className={classes.contactTitle} ref={ref}>
        Contact With Me!
      </h1>
      <div className={classes.grid}>
        <div className={classes.contactContainer}>
          {/* The image container mimicking a digital screen */}
          <span className={classes.imageContainer}>
            <div className={classes.overlay}>
              <div className={classes.overlayBottom}>
                <div className={classes.leftColumn}>
                  <h3 className={classes.overlayHeader}>
                    Nullam varius mi sit amet
                  </h3>
                  <div className={classes.infoBlock}>
                    <p className={classes.infoLabel}>Email</p>
                    <p className={classes.infoValue}>exampleMail@mail.com</p>
                  </div>
                  <div className={classes.infoBlock}>
                    <p className={classes.infoLabel}>Address</p>
                    <p className={classes.infoValue}>Filip Kwiatek, Poland</p>
                  </div>
                </div>
                <div className={classes.rightColumn}>
                  <div className={classes.infoBlock}>
                    <p className={classes.infoLabel}>Working Hours</p>
                    <p className={classes.infoValue}>8:00 AM - 3:00 PM</p>
                  </div>
                  <div className={classes.overlaySocial}>
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/path/to/github_icon.png" alt="GitHub" />
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/path/to/linkedin_icon.png" alt="LinkedIn" />
                    </a>
                    <a
                      href="https://twitter.com/username"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/path/to/twitter_icon.png" alt="Twitter" />
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/path/to/instagram_icon.png" alt="Instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </span>
          {/* Form with basic validations */}
          <form onSubmit={handleSubmit} className={classes.inputsContainer}>
            <li>
              Nullam varius mi sit amet mauris laoreet, ut tempus mauris scelerisque.
            </li>
            <li>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Filip Kwiatek"
                value={formData.name}
                onChange={handleChange}
              />
            </li>
            <li>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="FilipKwiatek@mail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </li>
            <li>
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Want to start testing journey!"
                value={formData.subject}
                onChange={handleChange}
              />
            </li>
            <li>
              <label>Message</label>
              <input
                type="text"
                name="message"
                placeholder="Looking for a good way to start testing"
                value={formData.message}
                onChange={handleChange}
              />
            </li>
            <li>
              <ConfirmButton
                type="submit"
                src="https://img.icons8.com/?size=100&id=86032&format=png&color=FFFFFF"
              >
                Submit
              </ConfirmButton>
            </li>
            <li style={{ minHeight: "0px", textAlign: "center" }}>
              {error && <span className={classes.notification}>{error}</span>}
            </li>
            <li>
              <div className={classes.line} />
            </li>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Contact;