import React from 'react'
import "./CompanyOurstory.css"

import { DiCreativecommons, DiIntellij, DiJqueryLogo, DiMeteor, DiSublime } from "react-icons/di";

export const CompanyOurstory = () => {
  return (
    <>
    <section className="com_story">
      <div className="container">
        
      
        <div className="com_story_left">
          <span className="com_story_subtitle">Our Story 👇</span>
          <h2 className="com_story_title">From Startups to Titans of Industry</h2>
          <p className="com_story_text">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic perceived do an a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up</p>
        </div>

       
        <div className="com_story_right">
          <div className="com_story_stats_box">
            
            <div className="com_story_stat_item">
              <h3 className="com_story_stat_num">1560+</h3>
              <span className="com_story_stat_name">Project Delivered</span>
            </div>

            <div className="com_story_stat_item">
              <h3 className="com_story_stat_num">100+</h3>
              <span className="com_story_stat_name">Professional</span>
            </div>

            <div className="com_story_stat_item">
              <h3 className="com_story_stat_num">950+</h3>
              <span className="com_story_stat_name">Happy Client</span>
            </div>

            <div className="com_story_stat_item">
              <h3 className="com_story_stat_num">10s yrs</h3>
              <span className="com_story_stat_name">Experience</span>
            </div>

          </div>
        </div>

      </div>

      
      <div className="com_story_logos_container">
        <div className="container">
          <div className="com_story_logos_wrapper">
            <div className="com_story_logo_item"><DiCreativecommons /> logoipsum</div>
            <div className="com_story_logo_item"><DiIntellij /> logoipsum</div>
            <div className="com_story_logo_item"><DiJqueryLogo /> logoipsum</div>
            <div className="com_story_logo_item"><DiMeteor /> logoipsum</div>
            <div className="com_story_logo_item"><DiSublime /> logoipsum</div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}