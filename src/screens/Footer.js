import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'blue', color: 'white', padding: '25px', display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ flex: 1 }}>
        <h3>Company</h3>
        <p style={{ color: 'white'}}>Zones IT Solutions</p>
        <p style={{ color: 'white' }}>123 Street, City</p>
        <p style={{ color: 'white' }}>+123456789</p>
        <p style={{ color: 'white' }}>info@example.com</p>
      </div>
      <div style={{ flex: 1 }}>
        <h3>For Job Seeker</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Browse Job</li>
          <li>Browse Category</li>
          <li>Job Alert</li>
          <li>Candidate Dashboard</li>
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <h3>For Employer</h3>
        <ul style={{ listStyleType: 'none', padding: 0}}>
          <li>Browse Job</li>
          <li>Browse Category</li>
          <li>Post Job</li>
          <li>Employer Dashboard</li>
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <h3>Quick Links</h3>
        <ul style={{ listStyleType: 'none', padding: 0}}>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
      </div>

    </footer>
  );
};

export default Footer;
