import React from 'react'
import "./CompanyVision.css"
import visionImg from "./vision_img.png" 
export const CompanyVision = () => {
  return (
    <>
    <section className="com_vision">
      <div className="container">
        
        <div className="com_vision_content">
          <span className="com_vision_subtitle">OUR VISION</span>
          <h2 className="com_vision_title">
            We want to get local identification in every corner of the world in this era of global citizenship.
          </h2>
          <p className="com_vision_text">
            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
          </p>
        </div>

        <img src={visionImg} alt="Our Vision Office" className="com_vision_img" />

      </div>
    </section>
    </>
  )
}