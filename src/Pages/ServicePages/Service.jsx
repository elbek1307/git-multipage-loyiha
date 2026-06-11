
import React from 'react';
import ServiceOurservices from '../../Components/ServiceOurservices/ServiceOurservices';
import OurProcess from '../../Components/OurProcess/OurProcess';
import { ServiceTechnical } from '../../Components/ServiceTechnical/ServiceTechnical';
import { ServiceDevelopment } from '../../Components/ServiceDevelopment/ServiceDevelopment';
import { ServiceAws } from '../../Components/ServiceAws/ServiceAws';


const Service = () => {
  return (
    <>
    <ServiceOurservices />
    <OurProcess />
    <ServiceTechnical />
    <ServiceDevelopment />
    <ServiceAws />
    </>
  );
};

export default Service;