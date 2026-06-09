import React from 'react'
import "./Footer.css"
import footerLogo from "./footerLogo.svg"

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
     <footer>
        <div className="container">
         <div className="fut_content">
            <img src={footerLogo} alt="footer logo" className="fut_logo" />
         <span>©2021 Finsweet</span>
         </div>

         <div className="fut_box">
           <FaFacebook className='fut_icon fut_fac' />
           <FaTwitter className='fut_icon fut_twit' />
           <FaInstagram className='fut_icon fut_ins' />
           <FaLinkedin className='fut_icon fut_lin' />
         </div>
        </div>
     </footer>
    </>
  )
}
