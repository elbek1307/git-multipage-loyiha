import React from 'react'
import './CompanyHero.css'
import heroImg1 from './hero_img1.png' // 1-rasm (chapdagi)
import heroImg2 from './hero_img2.png' // 2-rasm (o'rtadagi)
import heroImg3 from './hero_img3.png' // 3-rasm (o'ngdagi)

export const CompanyHero = () => {
  return (
    <>
      <section className="com_hero">
        <div className="container">
          
          {/* Matn qismi */}
          <div className="com_hero_content">
            <span className="com_hero_subtitle">COMPANY</span>
            <h1 className="com_hero_title">Award-winning Company seen and used by millions around the world.</h1>
            <p className="com_hero_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized.</p>
          </div>

          {/* Rasmlar qatori */}
          <div className="com_hero_images">
            <img src={heroImg1} alt="Meeting 1" className="com_hero_img" />
            <img src={heroImg2} alt="Meeting 2" className="com_hero_img" />
            <img src={heroImg3} alt="Meeting 3" className="com_hero_img" />
          </div>

        </div>
      </section>
    </>
  )
}