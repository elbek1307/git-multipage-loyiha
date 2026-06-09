import React from 'react';
import './OurProcess.css';
import { 
  MdOutlineLightbulb, 
  MdOutlineDesignServices, 
  MdCode, 
  MdOutlineBugReport, 
  MdRocketLaunch, 
  MdOutlineMiscellaneousServices 
} from 'react-icons/md';

const OurProcess = () => {
  return (
    <section className="our_process">
      <div className="container">
        
        {/* Header */}
        <div className="process_header">
          <span className="section_subtitle">OUR PROCESS</span>
          <h2 className="section_title">
            The process we are working With Our client Worldwide
          </h2>
          <p className="process_desc">
            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
          </p>
        </div>

        {/* 6 ta kartochka grid orqali */}
        <div className="process_grid">
          
          <div className="process_card">
            <span className="p_number">01</span>
            <div className="p_icon_box"><MdOutlineLightbulb className="p_icon"/></div>
            <div className="p_text">
              <h4 className="p_title">Discover</h4>
              <p className="p_desc">We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
            </div>
          </div>

          <div className="process_card">
            <span className="p_number">02</span>
            <div className="p_icon_box"><MdOutlineDesignServices className="p_icon"/></div>
            <div className="p_text">
              <h4 className="p_title">Designing</h4>
              <p className="p_desc">We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
            </div>
          </div>

          <div className="process_card">
            <span className="p_number">03</span>
            <div className="p_icon_box"><MdCode className="p_icon"/></div>
            <div className="p_text">
              <h4 className="p_title">Development</h4>
              <p className="p_desc">We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
            </div>
          </div>

          <div className="process_card">
            <span className="p_number">04</span>
            <div className="p_icon_box"><MdOutlineBugReport className="p_icon"/></div>
            <div className="p_text">
              <h4 className="p_title">Testing</h4>
              <p className="p_desc">We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
            </div>
          </div>

          <div className="process_card">
            <span className="p_number">05</span>
            <div className="p_icon_box"><MdRocketLaunch className="p_icon"/></div>
            <div className="p_text">
              <h4 className="p_title">Deployment</h4>
              <p className="p_desc">We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
            </div>
          </div>

          <div className="process_card">
            <span className="p_number">06</span>
            <div className="p_icon_box"><MdOutlineMiscellaneousServices className="p_icon"/></div>
            <div className="p_text">
              <h4 className="p_title">Maintenance</h4>
              <p className="p_desc">We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurProcess;