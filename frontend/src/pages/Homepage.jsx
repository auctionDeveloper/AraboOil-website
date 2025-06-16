import React from 'react'
import Hero from '../component/Hero'
import OurProducts from '../component/OurProducts'
import RefiningsLogo from '../component/RefiningsLogo'
import MoreProducts from '../component/MoreProducts'
import Mission from '../component/Mission'

export default function Homepage() {
  return (
    <div className='w-full'>
      <Hero/>
      <OurProducts/>
      <RefiningsLogo/>
      <MoreProducts/>
      <Mission/>
    </div>
  )
}
