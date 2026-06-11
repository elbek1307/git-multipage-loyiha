import React from 'react'
import "./ServiceConsulting.css"
import consultImg from "./consult_img.png"

export const ServiceConsulting = () => {
  return (
   <>
   <section className="ser_consulting">
    <div className="container">
        <img src={consultImg} alt="Consulting" className="ser_consulting_img" />
        
        <div className="ser_consulting_content">
            <span className="ser_consulting_subtitle">Consulting</span>
            <h2 className="ser_consulting_title">Get advice from world class professionals</h2>
            <p className="ser_consulting_text">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
        </div>
    </div>
   </section>
   </>
  )
}