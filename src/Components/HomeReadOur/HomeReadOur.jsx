import React from 'react';
import './HomeReadOur.css';
import { MdArrowForward } from 'react-icons/md';

const HomeReadOur = () => {
  return (
    <section className="read_our">
      <div className="container">
        
        <div className="read_header">
          <div className="blue_square"></div>
          <h2 className="section_title">Read our latest blogs & news</h2>
        </div>

        <div className="blog_cards">
          
          <div className="blog_card">
            <div className="blog_img_placeholder">Img 1</div>
            <div className="blog_content">
              <span className="blog_date">Jan 19, 2021</span>
              <h4 className="blog_title">Today's best design trends for digital products</h4>
              <a href="#" className="blog_link">Read More <MdArrowForward /></a>
            </div>
          </div>

          <div className="blog_card">
            <div className="blog_img_placeholder">Img 2</div>
            <div className="blog_content">
              <span className="blog_date">Jan 19, 2021</span>
              <h4 className="blog_title">A practical guide to building a brand strategy</h4>
              <a href="#" className="blog_link">Read More <MdArrowForward /></a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeReadOur;