import React from 'react';
import { Outlet } from 'react-router-dom';
import "./layout.css";
import Navbar from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import Subscribe from '../Subscribe/Subscribe';


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
      <Footer />
    </>
  );
}