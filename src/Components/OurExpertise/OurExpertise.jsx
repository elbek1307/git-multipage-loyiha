import React from 'react'
import './OurExpertise.css';
import { MdRocketLaunch, MdWorkspacePremium, MdHeadsetMic } from 'react-icons/md'; 

const OurExpertise = () =>{
  return (
    <>
    <section className="expertise">
      <div className="container">
        
       
        <div className="expertise_left">
          <span className="expertise_subtitle">OUR EXPERTISE</span>
          <h2 className="expertise_title">
            We want to get local identification in every corner of the world in this era of global citizenship
          </h2>
          <p className="expertise_text">
            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
          </p>
        </div>


        <div className="expertise_right">
          
          <div className="expertise_card">
            <div className="expertise_card_icon">
              <MdRocketLaunch />
            </div>
            <div className="expertise_card_content">
              <h4 className="expertise_card_title">On Time Delivery</h4>
              <p className="expertise_card_text">Through True Rich Attended does no end it his mother since real had half every him.</p>
            </div>
          </div>

          <div className="expertise_card">
            <div className="expertise_card_icon">
              <MdWorkspacePremium />
            </div>
            <div className="expertise_card_content">
              <h4 className="expertise_card_title">Best Quality</h4>
              <p className="expertise_card_text">Through True Rich Attended does no end it his mother since real had half every him.</p>
            </div>
          </div>

          <div className="expertise_card">
            <div className="expertise_card_icon">
              <MdHeadsetMic />
            </div>
            <div className="expertise_card_content">
              <h4 className="expertise_card_title">Support Assist</h4>
              <p className="expertise_card_text">Through True Rich Attended does no end it his mother since real had half every him.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  );
};


export default OurExpertise;