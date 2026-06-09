import React from 'react';
import { Outlet } from 'react-router-dom';
import "./layout.css";
import Navbar from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import Subscribe from '../Subscribe/Subscribe';
import FooterTop from '../FooterTop/FooterTop';


export const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
       
      </header>
      
      <main>
        <Outlet /> 
      </main>
      <Subscribe />
      <FooterTop />
      <Footer />
    </>
  );
}