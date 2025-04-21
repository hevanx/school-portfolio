// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem 0' }}>
      <p>&copy; {new Date().getFullYear()} Ethan Greenfield. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
