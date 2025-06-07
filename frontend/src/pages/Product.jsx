import React from 'react'
import MTO from '../assets/mto.png'
import YellowBaseOil from '../assets/baseoil.png'
import WhiteBaseOil from '../assets/whitebaseoil.png'
import LDO from '../assets/ldo.png'
import FuelOil from '../assets/fueloil.png'
import BioFuel from '../assets/biofuel.png'
import Solvent from '../assets/solvent.png'
import Briqutte from '../assets/beriqutte.png'
import CNSLResin from '../assets/cnslresin.png'
import LampOil from '../assets/lampoil.png'
import Hydrocarbon from '../assets/hydrocarbon.png'
import { Link } from 'react-router-dom'


export default function Product() {
  return (
   <div className='container max-w-6xl mx-auto sm:px-6 lg:px-8'>
    <div> <h1 className='w-full text-2xl font-bold  text-center py-7'>Our <span className='text-[#980000]'>Products</span></h1>
    </div> 

<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 '>

      <div className='flex gap-4 '>
        <div className='w-1/3 flex'>
          <Link to="/product/mto" className="text-center">
  <img
    src={MTO}
    alt="MTO"
    className="w-64 h-45 shadow-md mx-auto hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-shadow duration-300 "
  />
  <p className="mt-2 text-base font-semibold text-gray-800">MTO</p>
</Link>

        </div>
      <div className='w-1/3'>
         <Link to="/product/yellow-base-oil" className="text-center">
  <img
    src={YellowBaseOil}
    alt="Yellow Base Oil"
    className="w-64 h-45 shadow-md mx-auto hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-shadow duration-300 "
  />
  <p className="mt-2 text-base font-semibold text-gray-800">Yellow Base Oil</p>
</Link>
</div>

      <div className='w-1/3'>
         <Link to="/product/white-base-oil" className="text-center">
  <img
    src={WhiteBaseOil}
    alt="White Base Oil"
    className="w-64 h-45 shadow-md mx-auto hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-shadow duration-300 "
  />
  <p className="mt-2 text-base font-semibold text-gray-800">White Base Oil</p>
</Link></div>

      </div>

  <div className='flex gap-4'>
        <div className='w-1/3'>   <Link to="/product/ldo" className="text-center">
  <img
    src={LDO}
    alt="ldo"
    className="w-64 h-45 shadow-md mx-auto hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-shadow duration-300 "
  />
  <p className="mt-2 text-base font-semibold text-gray-800">LDO</p>
</Link></div>
      <div className='w-1/3'>   <Link to="/product/fuel-oil" className="text-center">
  <img
    src={FuelOil}
    alt="Fuel oil"
    className="w-64 h-45 shadow-md mx-auto hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-shadow duration-300 "
  />
  <p className="mt-2 text-base font-semibold text-gray-800">Fuel oil</p>
</Link></div>

      <div className='w-1/3'><Link to="/product/biofuel" className="text-center">
  <img
    src={BioFuel}
    alt="BioFuel"
    className="w-64 h-45 shadow-md mx-auto hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-shadow duration-300 "
  />
  <p className="mt-2 text-base font-semibold text-gray-800">Bio Fuel</p>
</Link></div>
      </div>

   <div className='flex gap-4'>
        <div className='w-1/3'>   <Link to="/product/solvent" className="text-center">
  <img
    src={Solvent}
    alt="Solvent"
    className="w-64 h-45 shadow-md mx-auto hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-shadow duration-300 "
  />
  <p className="mt-2 text-base font-semibold text-gray-800">Solvent</p>
</Link></div>

      <div className='w-1/3'>   <Link to="/product/briquette" className="text-center">
  <img
    src={Briqutte}
    alt="Briquette"
    className="w-64 h-45 shadow-md mx-auto hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-shadow duration-300 "
  />
  <p className="mt-2 text-base font-semibold text-gray-800">Briquette</p>
</Link></div>
      <div className='w-1/3'>   <Link to="/product/cnsl-resin" className="text-center">
  <img
    src={CNSLResin}
    alt="CNSL Resin"
    className="w-64 h-45 shadow-md mx-auto hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-shadow duration-300 "
  />
  <p className="mt-2 text-base font-semibold text-gray-800">CNSL Resin</p>
</Link></div>
      </div>

     <div className='flex justify-center gap-4'>
             <div className='w-1/3'>   <Link to="/product/lamp-oil" className="text-center">
  <img
    src={LampOil}
    alt="Lamp Oil"
    className="w-64 h-45 shadow-md mx-auto hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-shadow duration-300 "
  />
  <p className="mt-2 text-base font-semibold text-gray-800">Lamp Oil</p>
</Link></div>
      <div className='w-1/3'>   <Link to="/product/hydrocarbon" className="text-center">
  <img
    src={Hydrocarbon}
    alt="Hydrocarbon"
    className="w-64 h-45 shadow-md mx-auto hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-shadow duration-300 "
  />
  <p className="mt-2 text-base font-semibold text-gray-800">Hydrocarbon</p>
</Link></div>
    
      </div>
    </div>
   </div>
  )
}
