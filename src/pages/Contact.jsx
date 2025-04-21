import React, { useState } from 'react';
import styles from '/src/components/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes('@')) newErrors.email = "Valid email required";
    if (!formData.message) newErrors.message = "Message can't be empty";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length === 0) {
      alert("Message sent!");
      // Reset form (or send data)
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className={styles.contactPage}>
      <h1>Contact Me</h1>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;

