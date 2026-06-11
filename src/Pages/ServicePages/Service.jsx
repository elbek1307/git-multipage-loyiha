
import React from 'react';
import ServiceOurservices from '../../Components/ServiceOurservices/ServiceOurservices';
import OurProcess from '../../Components/OurProcess/OurProcess';
import { ServiceTechnical } from '../../Components/ServiceTechnical/ServiceTechnical';
import { ServiceDevelopment } from '../../Components/ServiceDevelopment/ServiceDevelopment';

const Service = () => {
  return (
    <>
    <ServiceOurservices />
    <OurProcess />
    <ServiceTechnical />
    <ServiceDevelopment />
    </>
  );
};

export default Service;