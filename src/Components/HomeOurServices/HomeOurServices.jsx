import React from 'react';
import './HomeOurServices.css';
import { MdHeadsetMic, MdOutlineSettings, MdCode } from 'react-icons/md';

const HomeOurServices = () => {
  return (
    <section className="home_services">
      <div className="container">
        
        {/* Yuqori qism: Matn va Tugma */}
        <div className="services_header">
          <div className="services_text">
            <span className="section_subtitle">OUR SERVICES</span>
            <h2 className="section_title">
              We build software solutions that solve client's business challenges
            </h2>
          </div>
          <div className="services_action">
            <button className="start_project_btn">
              Start a Project <span>&rarr;</span>
            </button>
          </div>
        </div>

        {/* Kartochkalar */}
        <div className="services_cards">
          
          <div className="service_card">
            <div className="s_icon_box">
              <MdHeadsetMic className="s_icon" />
            </div>
            <h4 className="s_card_title">Technical support</h4>
            <p className="s_card_desc">
              We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service
            </p>
            <a href="#" className="s_read_more">Read more &rarr;</a>
          </div>

          <div className="service_card">
            <div className="s_icon_box">
              <MdOutlineSettings className="s_icon" />
            </div>
            <h4 className="s_card_title">Testing Management</h4>
            <p className="s_card_desc">
              We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service
            </p>
            <a href="#" className="s_read_more">Read more &rarr;</a>
          </div>

          <div className="service_card">
            <div className="s_icon_box">
              <MdCode className="s_icon" />
            </div>
            <h4 className="s_card_title">Development</h4>
            <p className="s_card_desc">
              We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service
            </p>
            <a href="#" className="s_read_more">Read more &rarr;</a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeOurServices;