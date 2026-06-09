import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
  return (
    <section className="subscribe_section">
      <div className="container">
        <div className="subscribe_banner">
          
          <div className="subscribe_left">
            <span className="sub_subtitle">NEWSLETTER</span>
            <h2 className="sub_title">Subscribe our News Letter to get Latest Updates.</h2>
          </div>
          
          <div className="subscribe_right">
            <form className="sub_form">
              <input type="email" placeholder="Paresh@Pixeto.com" className="sub_input" required />
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Subscribe;