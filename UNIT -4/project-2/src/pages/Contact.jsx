import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    setSubmitted(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  return (
    <section className="page-section">
      <div className="page-header">
        <p className="section-label">05 — CONTACT</p>
        <h1>
          Let's build something <span>together.</span>
        </h1>
        <p>
          Have a project idea, question or just want to say hello?
          Send me a message.
        </p>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">✉</div>
            <div>
              <h3>Email</h3>
              <p>bhuvana@gmail.com</p>
              <small>Replace this with your email</small>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">⌂</div>
            <div>
              <h3>Location</h3>
              <p>Tamil Nadu, India</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">✦</div>
            <div>
              <h3>Currently</h3>
              <p>Learning & building projects</p>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What would you like to discuss?"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="6"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message →
          </button>
          {submitted && (
            <div className="success-message">
              ✓ Thank you! Your message has been received.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
export default Contact;