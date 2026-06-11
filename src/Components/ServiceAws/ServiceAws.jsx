import React from 'react'
import "./ServiceAws.css"
import awsImg from "./aws_img.png"

export const ServiceAws = () => {
  return (
   <>
   <section className="ser_aws">
    <div className="container">
       
        <div className="ser_aws_content">
            <span className="ser_aws_subtitle">AWS/Azure</span>
            <h2 className="ser_aws_title">We help you deploy, manage and secure your application on leading web services</h2>
            <p className="ser_aws_text">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
        </div>

        <img src={awsImg} alt="AWS/Azure" className="ser_aws_img" />
    </div>
   </section>
   </>
  )
}