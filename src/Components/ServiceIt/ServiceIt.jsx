import React from 'react'
import "./ServiceIt.css"
import itImg from "./it_img.png"

export const ServiceIt = () => {
  return (
   <>
   <section className="ser_it">
    <div className="container">
        <div className="ser_it_content">
            <span className="ser_it_subtitle">Information Technology</span>
            <h2 className="ser_it_title">We want to get local identification in every corner of the world in this era of global citizenship.</h2>
            <p className="ser_it_text">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
        </div>

        <img src={itImg} alt="Information Technology" className="ser_it_img" />
    </div>
   </section>
   </>
  )
}