import React from 'react'
import HeroSection from '../../components/HeroSection'
import Pricing from '../../components/Pricing';
import { homeObjTwo } from './data';

function Products() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjTwo} />
    </>
  )
}

export default Products
