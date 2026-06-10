import React from 'react';
import './ServiceOurservices.css';
import { MdArrowForward } from 'react-icons/md';

const ServiceOurservices = () => {
  return (
    <section className="ser_ourservice">
      <div className="container">
        
        {/* Chap ustun */}
        <div className="ser_ourservice_left">
          <span className="ser_ourservice_subtitle">OUR SERVICES</span>
          <h2 className="ser_ourservice_title">
            We Build Software Solution that Solve Clients Business Challenges
          </h2>
          <p className="ser_ourservice_desc">
            Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.
          </p>
          <button className="ser_ourservice_btn">
            Request A Quote <MdArrowForward className="ser_ourservice_btn_icon" />
          </button>
        </div>

        {/* O'ng ustun - oddiy ro'yxat */}
        <div className="ser_ourservice_right">
          <ul className="ser_ourservice_list">
            
            <li className="ser_ourservice_item">
              <a href="#technical-support" className="ser_ourservice_link">
                <span className="ser_ourservice_link_text">Technical support</span>
                <MdArrowForward className="ser_ourservice_arrow" />
              </a>
            </li>

            <li className="ser_ourservice_item">
              <a href="#development" className="ser_ourservice_link">
                <span className="ser_ourservice_link_text">Development</span>
                <MdArrowForward className="ser_ourservice_arrow" />
              </a>
            </li>

            <li className="ser_ourservice_item">
              <a href="#aws-azure" className="ser_ourservice_link">
                <span className="ser_ourservice_link_text">AWS/Azure</span>
                <MdArrowForward className="ser_ourservice_arrow" />
              </a>
            </li>

            <li className="ser_ourservice_item">
              <a href="#consulting" className="ser_ourservice_link">
                <span className="ser_ourservice_link_text">Consulting</span>
                <MdArrowForward className="ser_ourservice_arrow" />
              </a>
            </li>

            <li className="ser_ourservice_item">
              <a href="#information-technology" className="ser_ourservice_link">
                <span className="ser_ourservice_link_text">Information Technology</span>
                <MdArrowForward className="ser_ourservice_arrow" />
              </a>
            </li>

          </ul>
        </div>

      </div>
    </section>
  );
};

export default ServiceOurservices;