import React from 'react'
import "./ServiceDevelopment.css"
import devImg from "./dev_img.png" // O'zingizning rasmingizni qo'yasiz

export const ServiceDevelopment = () => {
  return (
   <>
   <section className="ser_development">
    <div className="container">
        {/* Rasm chapda bo'lgani uchun birinchi yoziladi */}
        <img src={devImg} alt="Development" className="ser_development_img" />
        
        <div className="ser_development_content">
            <span className="ser_development_subtitle">Development</span>
            <h2 className="ser_development_title">Bring your ideas to reality with certified team of developers, working with latest technologies</h2>
            <p className="ser_development_text">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
        </div>
    </div>
   </section>
   </>
  )
}