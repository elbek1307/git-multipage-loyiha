import React from 'react'
import "./Home.css";


import Hero from '../../Components/Hero/Hero';
import AboutUs from '../../Components/AboutUs/AboutUs';
import OurExpertise from '../../Components/OurExpertise/OurExpertise';
import HomeOurServices from '../../Components/HomeOurServices/HomeOurServices';
import OurProcess from '../../Components/OurProcess/OurProcess';
import HomeOurCustomers from '../../Components/HomeOurCustomers/HomeOurCustomers';
import HomeReadOur from '../../Components/HomeReadOur/HomeReadOur';


const Home = () => {
  return (
  <>
   <Hero />
    <AboutUs />
    <OurExpertise />
    <HomeOurServices />
    <OurProcess />
    <HomeOurCustomers />
    <HomeReadOur />
  </>
  );
};

export default Home;