import React from 'react';
import './ServiceOurservices.css';
import { MdArrowForward } from 'react-icons/md';

const ServiceOurservices = () => {
  // O'ng tomondagi ro'yxat uchun ma'lumotlar massivi
  const servicesList = [
    "Technical support",
    "Development",
    "AWS/Azure",
    "Consulting",
    "Information Technology"
  ];

  return (
    <section className="service_ourservices">
      <div className="container service_our_container">
        
        {/* Chap ustun: Ma'lumotlar va Tugma */}
        <div className="service_our_left">
          <span className="section_subtitle">OUR SERVICES</span>
          <h2 className="section_title">
            We Build Software Solution that Solve Clients Business Challenges
          </h2>
          <p className="service_our_desc">
            Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.
          </p>
          <button className="request_quote_btn">
            Request A Quote <MdArrowForward className="btn_arrow" />
          </button>
        </div>

        {/* O'ng ustun: Navigatsiya xizmatlar ro'yxati */}
        <div className="service_our_right">
          <ul className="service_links_list">
            {servicesList.map((service, index) => (
              <li key={index} className="service_link_item">
                <a href={`#${service.toLowerCase().replace(/\s+/g, '-')}`} className="service_nav_link">
                  <span className="link_text">{service}</span>
                  <MdArrowForward className="service_link_arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ServiceOurservices;