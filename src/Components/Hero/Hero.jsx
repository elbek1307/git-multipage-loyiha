import React from 'react';
import './Hero.css';
import HeroImg from './hero-img.png'; 

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        
       
        <div className="hero_wrapper">
          <div className="hero_content">
            <h1 className="hero_title">
              Transform Your Idea Into Reality with Finsweet
            </h1>
            <p className="hero_desc">
              The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.
            </p>
            <button className="hero_btn">
              Request Quote <span>&rarr;</span>
            </button>
          </div>

          
            <img src={HeroImg} alt="Finsweet Meeting" className="hero_img" />
          
        </div>

        
        <div className="hero_clients">
          <div className="clients_text">
            <span>Our Clients</span>
            <h3>We've Worked with</h3>
          </div>
          <div className="clients_logos">
            
            <div className="logo_item">logoipsum</div>
            <div className="logo_item">logoipsum</div>
            <div className="logo_item">logoipsum</div>
            <div className="logo_item">logoipsum</div>
            <div className="logo_item">logoipsum</div>
          </div>
        </div>

      </div>
    </section>
  );
}