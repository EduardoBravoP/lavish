import React from 'react'
import HeroSection from '../../components/HeroSection'
import Pricing from '../../components/Pricing';
import { homeObjOne } from './data';

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  )
}

export default Services
