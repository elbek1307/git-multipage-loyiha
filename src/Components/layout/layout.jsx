import React from 'react';
import "./layout.css";
import Navbar from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      

      <main>
        <Outlet /> 
      </main>
      
      <Footer />
    </>
  );
}