
import React from 'react';
import ServiceOurservices from '../../Components/ServiceOurservices/ServiceOurservices';
import OurProcess from '../../Components/OurProcess/OurProcess';
import { ServiceTechnical } from '../../Components/ServiceTechnical/ServiceTechnical';
import { ServiceDevelopment } from '../../Components/ServiceDevelopment/ServiceDevelopment';
import { ServiceAws } from '../../Components/ServiceAws/ServiceAws';
import { ServiceConsulting } from '../../Components/ServiceConsulting/ServiceConsulting';
import { ServiceIt } from '../../Components/ServiceIt/ServiceIt';


const Service = () => {
  return (
    <>
    <ServiceOurservices />
    <OurProcess />
    <ServiceTechnical />
    <ServiceDevelopment />
    <ServiceAws />
    <ServiceConsulting />
    <ServiceIt />
    </>
  );
};

export default Service;