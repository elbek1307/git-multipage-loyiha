import React from 'react';
import './AboutUs.css';
import AboutImg1 from './about-1.png'; 
import AboutImg2 from './about-2.png';
import AboutImg3 from './about-3.png';

const AboutUs = () => {
  return (
    <section className="about_us">
      <div className="container">
        
 
        <div className="about_header">
          <div className="about_header_left">
            <span className="section_subtitle">ABOUT US</span>
            <h2 className="section_title">
              The company leads entire webdesign process from concept to delivery.
            </h2>
          </div>
          <div className="about_header_right">
            <h3 className="section_small_title">The Era Of Technology.</h3>
            <p className="section_desc">
              Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>
        </div>

        <div className="about_gallery">
          <img src={AboutImg1} alt="Team Meeting 1" className="about_img" />
          <img src={AboutImg2} alt="Team Meeting 2" className="about_img" />
          <img src={AboutImg3} alt="Team Meeting 3" className="about_img" />
        </div>

        <div className="about_stats_wrapper">
          <div className="about_stats">
            <div className="stat_item">
              <span className="stat_num">1560+</span>
              <div className="stat_line stat_line_purple"></div>
              <span className="stat_text">Project Delivered</span>
            </div>
            <div className="stat_item">
              <span className="stat_num">100+</span>
              <div className="stat_line stat_line_blue"></div>
              <span className="stat_text">Professional</span>
            </div>
            <div className="stat_item">
              <span className="stat_num">950+</span>
              <div className="stat_line stat_line_orange"></div>
              <span className="stat_text">Happy Client</span>
            </div>
            <div className="stat_item">
              <span className="stat_num">10 yrs</span>
              <div className="stat_line stat_line_purple"></div>
              <span className="stat_text">Experience</span>
            </div>
          </div>
          
          <a href="#" className="about_read_more">
            Read about us <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;