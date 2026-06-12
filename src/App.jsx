import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Layout } from './Components/layout/layout'; 
import Home from './Pages/HomePages/Home';
import Service from './Pages/ServicePages/Service'; 
import Company from './Pages/CompanyPages/Company';
import Career from './Pages/CareerPages/Career';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Layout />}>
            <Route path='home' index element={<Home />} /> 
            <Route path="service" element={<Service />} />
            <Route path="company" element={<Company />} />
            <Route path="career" element={<Career />} />
        
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;