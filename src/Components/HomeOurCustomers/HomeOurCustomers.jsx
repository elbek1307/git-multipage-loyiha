import React from 'react';
import './HomeOurCustomers.css';
import { RiDoubleQuotesR } from 'react-icons/ri';
// Rasmlarni o'zingizning assets papkangizdan chaqiring
// import User1 from '../../assets/user1.png'; 

const HomeOurCustomers = () => {
  return (
    <section className="our_customers">
      <div className="container customers_container">
        
        {/* Chap qism */}
        <div className="customers_left">
          <div className="blue_square"></div>
          <h2 className="section_title">Our customers love what we do</h2>
          <h4 className="customers_subtitle">Transform your idea into reality with finsweet</h4>
          <p className="customers_desc">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          
          <div className="customers_avatars_wrap">
            <div className="avatars_group">
              {/* Vaqtincha rasm o'rniga divlar, o'zingiz img ga almashtirasiz */}
              <div className="avatar_img"></div>
              <div className="avatar_img"></div>
              <div className="avatar_img"></div>
            </div>
            <span className="reviews_text"><strong>30+</strong> Customer Reviews</span>
          </div>
        </div>

        {/* O'ng qism - Karta */}
        <div className="customers_right">
          <div className="testimonial_card">
            <RiDoubleQuotesR className="quote_icon" />
            <h3 className="testimonial_text">
              Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!
            </h3>
            <div className="testimonial_author">
              <div className="author_info">
                <div className="author_avatar"></div>
                <div>
                  <h5 className="author_name">Johnny Andro</h5>
                  <span className="author_role">Director, Company</span>
                </div>
              </div>
              <div className="author_company_logo">logoipsum</div>
            </div>
          </div>
          {/* Pagination nuqtalari */}
          <div className="pagination_dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeOurCustomers;