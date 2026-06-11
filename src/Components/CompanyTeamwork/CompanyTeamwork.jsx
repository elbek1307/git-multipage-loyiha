import React from 'react'
import "./CompanyTeamwork.css"
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa"


import team1 from "./team 1.png"
import team2 from "./team 2.png"
import team3 from "./team 3.png"
import team4 from "./team 4.png"
import team5 from "./team 5.png"
import team6 from "./team 6.png"
import team7 from "./team 7.png"
import team8 from "./team 8.png"

export const CompanyTeamwork = () => {
  return (
    <>
    <section className="com_team">
      <div className="container">
        
        <div className="com_team_content">
          <span className="com_team_subtitle">MEET OUR TEAM</span>
          <h2 className="com_team_title">Teamwork is the only way we work</h2>
          <p className="com_team_text">
            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
          </p>
        </div>

      </div>

     
      <div className="com_team_grid">
        
        {/* 1-Xodim */}
        <div className="com_team_member">
          <img src={team1} alt="Team member" className="com_team_img" />
          <div className="com_team_overlay">
            <h4 className="com_team_name">Javena Melo</h4>
            <span className="com_team_role">Support Assist</span>
            <div className="com_team_socials">
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* 2-Xodim */}
        <div className="com_team_member">
          <img src={team2} alt="Team member" className="com_team_img" />
          <div className="com_team_overlay">
            <h4 className="com_team_name">Alex Smith</h4>
            <span className="com_team_role">Developer</span>
            <div className="com_team_socials">
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* 3-Xodim */}
        <div className="com_team_member">
          <img src={team3} alt="Team member" className="com_team_img" />
          <div className="com_team_overlay">
            <h4 className="com_team_name">John Doe</h4>
            <span className="com_team_role">Designer</span>
            <div className="com_team_socials">
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* 4-Xodim */}
        <div className="com_team_member">
          <img src={team4} alt="Team member" className="com_team_img" />
          <div className="com_team_overlay">
            <h4 className="com_team_name">Michael Kors</h4>
            <span className="com_team_role">Manager</span>
            <div className="com_team_socials">
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* 5-Xodim */}
        <div className="com_team_member">
          <img src={team5} alt="Team member" className="com_team_img" />
          <div className="com_team_overlay">
            <h4 className="com_team_name">Sarah Connor</h4>
            <span className="com_team_role">QA Tester</span>
            <div className="com_team_socials">
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* 6-Xodim */}
        <div className="com_team_member">
          <img src={team6} alt="Team member" className="com_team_img" />
          <div className="com_team_overlay">
            <h4 className="com_team_name">David Miller</h4>
            <span className="com_team_role">Frontend Dev</span>
            <div className="com_team_socials">
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* 7-Xodim */}
        <div className="com_team_member">
          <img src={team7} alt="Team member" className="com_team_img" />
          <div className="com_team_overlay">
            <h4 className="com_team_name">Chris Evans</h4>
            <span className="com_team_role">Backend Dev</span>
            <div className="com_team_socials">
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* 8-Xodim */}
        <div className="com_team_member">
          <img src={team8} alt="Team member" className="com_team_img" />
          <div className="com_team_overlay">
            <h4 className="com_team_name">Anna White</h4>
            <span className="com_team_role">HR Manager</span>
            <div className="com_team_socials">
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

      </div>
      
     
      <div className="com_team_bottom_line"></div>
    </section>
    </>
  )
}