import React from 'react';
import './CareerHero.css';
import { MdArrowForward } from 'react-icons/md';

import carHeroBanner from './career_hero_bg.svg';

const CareerHero = () => {
  return (
    <section className="car_hero">
      <div className="container">
        

        <div className="car_hero_content">
          <span className="car_hero_subtitle">CAREER</span>
          <h1 className="car_hero_title">Join our team & help shape the future</h1>
          <p className="car_hero_text">
            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving.
          </p>
          <button className="car_hero_btn">
            View Openings <MdArrowForward className="car_hero_btn_icon" />
          </button>
        </div>

        
        <div className="car_hero_img_box">
          <img src={carHeroBanner} alt="Career Banner" className="car_hero_img" />
        </div>

      </div>
    </section>
  );
};

export default CareerHero;