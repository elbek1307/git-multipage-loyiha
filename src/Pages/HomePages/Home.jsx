
import React from 'react';
import Hero from '../../Components/Hero/Hero';
import AboutUs from '../../Components/AboutUs/AboutUs';
import OurExpertise from '../../Components/OurExpertise/OurExpertise';
import HomeOurServices from '../../Components/HomeOurServices/HomeOurServices';
import OurProcess from '../../Components/OurProcess/OurProcess';
import HomeOurCustomers from '../../Components/HomeOurCustomers/HomeOurCustomers';


const Home = () => {
  return (
  <>
   <Hero />
    <AboutUs />
    <OurExpertise />
    <HomeOurServices />
    <OurProcess />
    <HomeOurCustomers />
  </>
  );
};

export default Home;