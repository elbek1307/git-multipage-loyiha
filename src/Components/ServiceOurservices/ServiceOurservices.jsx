import React from 'react';
import './ServiceOurservices.css';
import { MdArrowForward } from 'react-icons/md';

const ServiceOurservices = () => {
  const servicesList = [
    "Technical support",
    "Development",
    "AWS/Azure",
    "Consulting",
    "Information Technology"
  ];

  return (
    <section className="ser_ourservice">
      <div className="container">
        <div className="ser_ourservice_content">
          
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

          {/* O'ng ustun */}
          <div className="ser_ourservice_right">
            <ul className="ser_ourservice_list">
              {servicesList.map((service, index) => (
                <li key={index} className="ser_ourservice_item">
                  <a href={`#${service.toLowerCase().replace(/\s+/g, '-')}`} className="ser_ourservice_link">
                    <span className="ser_ourservice_link_text">{service}</span>
                    <MdArrowForward className="ser_ourservice_arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceOurservices;