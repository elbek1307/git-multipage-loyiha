import React from 'react';
import './FooterTop.css';
import { MdArrowForward } from 'react-icons/md';

const FooterTop = () => {
  return (
    <footer className="footer_top">
      <div className="container footer_container">
        
        {/* Chap qism */}
        <div className="footer_left">
          <div className="footer_logo_decor">
            <div className="decor_box orange"></div>
            <div className="decor_box yellow"></div>
          </div>
          <h2 className="footer_title">Let's make something special</h2>
          <h4 className="footer_lets_talk">Let's talk! 🤙</h4>
          <p className="footer_contact_info">
            020 7993 2905 <br />
            hi@finsweet.com
          </p>
          <hr className="footer_line" />
          <p className="footer_address">
            DLF Cybercity, Bhubaneswar,<br />
            India, &52050
          </p>
        </div>

        {/* O'ng qism - Menyular */}
        <div className="footer_right">
          <div className="footer_links_col">
            <a href="#">Home</a>
            <a href="#">Service</a>
            <a href="#">Company</a>
            <a href="#">Career</a>
            <a href="#">News</a>
          </div>
          <div className="footer_links_col">
            <h4>Service</h4>
            <a href="#">Technical support</a>
            <a href="#">Testing</a>
            <a href="#">Development</a>
            <a href="#">AWS/Azure</a>
            <a href="#">Consulting</a>
            <a href="#">Information Technology</a>
          </div>
          <div className="footer_links_col">
            <h4>Resources</h4>
            <a href="#">About Us</a>
            <a href="#">Testimonial</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of use</a>
            <a href="#">Blog</a>
          </div>
        </div>

      </div>

      <div className="container contact_us_wrap">
        <a href="#" className="contact_us_btn">
          Contact Us <MdArrowForward />
        </a>
      </div>
    </footer>
  );
};

export default FooterTop;