import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>
        If you'd like to get in touch with me, feel free to use the form below or
        email me directly at <a href="mailto:capangpanganliza@yahoo.com">capangpanganliza@yahoo.com</a>.
      </p>
      <p>Connect with me on LinkedIn: <a href="https://www.linkedin.com/in/liza-t%C3%A4llg%C3%A5rd-4967a122b/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;