import React from 'react'
import "./ServiceTechnical.css"

import serImg from "./ser_tech_img"

export const ServiceTechnical = () => {
  return (
   <>
   <section className="ser_technical">
    <div className="container">
        <div className="ser_technical_content">
            <span className="ser_technical_subtitle">Technical Support</span>
            <h2 className="ser_technical_title">Best in class tech support for your <br /> company. We become your tech <br />backbone </h2>

            <p className="ser_technical_text">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.c:\Users\abdus\Downloads\ser_tech_img.png</p>
        </div>
        <img src={serImg} alt="" className="ser_technical" />
    </div>
   </section>
   </>
  )
}
