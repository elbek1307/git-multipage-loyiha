import React from 'react'
import "./Company.css"
import { CompanyHero } from '../../Components/CompanyHero/CompanyHero'
import { CompanyOurstory } from '../../Components/CompanyOurstory/CompanyOurstory'
import OurExpertise from '../../Components/OurExpertise/OurExpertise'



const Company = () => {
  return (
    <>
     <CompanyHero />
     <CompanyOurstory />
     <OurExpertise />
    </>
  )
}

export default Company