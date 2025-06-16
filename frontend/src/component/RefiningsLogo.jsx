// components/RefiningLogos.jsx
import React from 'react';

import ONGC from '../assets/ongc.png'
import Cpsl from   '../assets/cpsl.png'
import HP from '../assets/hp.png'
import Reliance from '../assets/reliance.png'
import IndianOil from '../assets/iocl.png'
import Nayara from '../assets/nayara.png'
import HMEL from '../assets/hmel.png'
import Tata from '../assets/tata.png'

/* swap these paths for your real SVG / PNG assets */
const LOGOS = [
  { src: ONGC , alt:'ongc'},
  { src: Cpsl,    alt: 'CPSL' },
  { src: HP  ,    alt: 'HP' },
  { src: Reliance,alt: 'Reliance' },
  { src: IndianOil,    alt: 'Indian Oil' },
  { src: Nayara,  alt: 'Nayara' },
  { src: HMEL,    alt: 'HMEL' },
  { src:Tata,    alt: 'Tata Petrodyne' },
];

export default function RefiningsLogo() {
  return (
    <section className="w-full mt-5">
      {/* heading */}
      <h2 className="text-center text-2xl font-bold text-[#043563] py-10">
        Refining&nbsp;Logos
      </h2>

      {/* light-blue strip */}
      <div className="bg-[#e8eefb] py-8">
        <div
          className="
            max-w-6xl mx-auto
            grid gap-6
            grid-cols-2        /* phones  */
            sm:grid-cols-3     /* ≥640 px */
            md:grid-cols-4     /* ≥768 px */
          "
        >
          {LOGOS.map((logo) => (
            <div
              key={logo.alt}
              className="
                flex items-center justify-center
                w-32 h-32 sm:w-36 sm:h-36
                mx-auto
                rounded-full border border-gray-400
                bg-white
                overflow-hidden
              "
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
