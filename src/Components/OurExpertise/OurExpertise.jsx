import React from 'react';
import './OurExpertise.css';
// React Icons'dan mos keladigan ikonkalarni import qilamiz
import { MdRocketLaunch, MdWorkspacePremium, MdHeadsetMic } from 'react-icons/md'; 

const OurExpertise = () => {
  return (
    <section className="our_expertise">
      <div className="container">
        
        {/* Chap tomondagi matn */}
        <div className="expertise_content">
          <span className="section_subtitle">OUR EXPERTISE</span>
          <h2 className="section_title">
            We want to get local identification in every corner of the world in this era of global citizenship
          </h2>
          <p className="section_desc">
            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
          </p>
        </div>

        {/* O'ng tomondagi kartochkalar */}
        <div className="expertise_cards">
          
          {/* Card 1 */}
          <div className="expertise_card_item">
            <div className="card_icon_box">
              <MdRocketLaunch className="card_icon" />
            </div>
            <div className="card_text_box">
              <h4 className="card_title">On Time Delivery</h4>
              <p className="card_desc">
                Through True Rich Attended does no end it his mother since real had half every him.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="expertise_card_item">
            <div className="card_icon_box">
              <MdWorkspacePremium className="card_icon" />
            </div>
            <div className="card_text_box">
              <h4 className="card_title">Best Quality</h4>
              <p className="card_desc">
                Through True Rich Attended does no end it his mother since real had half every him.
              </p>
            </div>
          </div>

        
          <div className="expertise_card_item">
            <div className="card_icon_box">
              <MdHeadsetMic className="card_icon" />
            </div>
            <div className="card_text_box">
              <h4 className="card_title">Support Assist</h4>
              <p className="card_desc">
                Through True Rich Attended does no end it his mother since real had half every him.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurExpertise;