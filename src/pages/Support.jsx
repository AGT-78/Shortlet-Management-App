import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Support.css";

const Support = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="support-container">
      {/* Header */}
      <nav className="support-navbar">
        <h2 onClick={() => navigate("/")}>Land-BNB Support</h2>
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      </nav>

      {/* Support Content */}
      <div className="support-content">
        <h1>How can we help you?</h1>
        <p>Our team is available 24/7 to assist you. Reach out through the form below or check our FAQs.</p>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          {submitted && <p className="success-message">Your message has been sent! 🎉</p>}
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" rows="5" required onChange={handleChange}></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Live Chat Section */}
        <div className="live-chat">
          <h2>Live Chat</h2>
          <p>Need instant help? Chat with our support team.</p>
          <button className="chat-btn">Start Live Chat</button>
        </div>

        {/* FAQ Section */}
        <div className="faq">
          <h2>Frequently Asked Questions</h2>
          <details>
            <summary>How do I cancel a booking?</summary>
            <p>You can cancel your booking from the "My Bookings" section of your profile.</p>
          </details>
          <details>
            <summary>What payment methods do you accept?</summary>
            <p>We accept credit/debit cards, PayPal, and cryptocurrency payments.</p>
          </details>
          <details>
            <summary>How do I contact the property owner?</summary>
            <p>Once you book a stay, you can message the property owner directly from your booking page.</p>
          </details>
        </div>

        {/* Support Contact Information */}
        <div className="contact-info">
          <h2>Other Ways to Contact Us</h2>
          <p>Email: support@landbnb.com</p>
          <p>Phone: +1 (800) 123-4567</p>
          <p>Available 24/7</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="support-footer">
        <p>&copy; 2025 Land-BNB | Your Comfort, Our Priority</p>
      </footer>
    </div>
  );
};

export default Support;
