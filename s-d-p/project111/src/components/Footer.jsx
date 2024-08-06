import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div style={footerContainerStyle}>
      <div style={contactStyle}>
        <p style={textStyle}>
          268 St, South Tamilnadu/chennai 98944, India 222-1800-2628
        </p>
        <p style={textStyle}>sowmyatechcompany@gmail.com</p>
        <div style={iconContainerStyle}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={iconWrapperStyle}>
            <FontAwesomeIcon icon={faFacebookF} style={iconStyle} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={iconWrapperStyle}>
            <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={iconWrapperStyle}>
            <FontAwesomeIcon icon={faYoutube} style={iconStyle} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={iconWrapperStyle}>
            <FontAwesomeIcon icon={faGithub} style={iconStyle} />
          </a>
        </div>
      </div>
      <div style={sectionStyle}>
        <h3 style={titleStyle}>HOT CATEGORIES</h3>
        <ul style={listStyle}>
          <li style={linkStyle}>Special Offers</li>
          <li style={linkStyle}>Performance</li>
          <li style={linkStyle}>Discounts</li>
          <li style={linkStyle}>Top Brands</li>
          <li style={linkStyle}>Online Exclusive</li>
        </ul>
      </div>
      <div style={sectionStyle}>
        <h3 style={titleStyle}>CUSTOMER SERVICE</h3>
        <ul style={listStyle}>
          <li style={linkStyle}>My Account</li>
          <li style={linkStyle}>About</li>
          <li style={linkStyle}>My Cart</li>
          <li style={linkStyle}>Wishlist</li>
          <li style={linkStyle}>Privacy Policy</li>
          <li style={linkStyle}>Theme FAQs</li>
          <li style={linkStyle}>Store Locations</li>
        </ul>
      </div>
      <div style={sectionStyle}>
        <h3 style={titleStyle}>SIGN UP TO NEWSLETTER</h3>
        <p style={textStyle}>
          Enter your email address to get $10 off your first order and free shipping. Updates information on Sales and Offers.
        </p>
        <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your Email"
            style={inputStyle}
            required
          />
          <Button title="Subscribe" class="bg-white text-black px-10 w-full" />
        </form>
      </div>
    </div>
  );
}

const footerContainerStyle = {
  padding: '20px 16px',
  marginTop: '96px',
  borderTop: '2px solid #dbdbdd',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const contactStyle = {
  flex: '1 1 200px',
  marginBottom: '20px',
};

const sectionStyle = {
  flex: '1 1 200px',
  marginBottom: '20px',
};

const titleStyle = {
  fontWeight: 'bold',
  fontSize: '1.25rem',
  marginBottom: '16px',
  color: 'black', // Added black color for title text
};

const textStyle = {
  opacity: 0.9,
  color: 'black', // Added black color for text
};

const iconContainerStyle = {
  display: 'flex',
  gap: '8px',
  marginTop: '16px',
};

const iconWrapperStyle = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: '2px solid #555555',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  color: '#555555',
};

const iconStyle = {
  fontSize: '1.25rem',
};

const listStyle = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  paddingLeft: '0',
};

const linkStyle = {
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'black', // Added black color for links
  transition: 'color 0.2s ease-in-out',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const inputStyle = {
  padding: '10px 8px',
  border: '2px solid black',
  width: '100%',
  borderRadius: '9999px',
};

export default Footer;
