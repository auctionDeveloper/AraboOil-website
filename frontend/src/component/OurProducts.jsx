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
import { Link } from 'react-router-dom';

/* swap these objects with your real data (image path + slug) */
const PRODUCTS = [
  {
    title: 'Biodiesel Oil',
    slug: '/product/biofuel/biodiesel',
    img: BioFuel,
  },
  { title: 'Base Oil SN150', slug: '/product/yellow-base-oil/base-oil-sn150', img: YellowBaseOil },
  { title: 'Mixed Hydrocarbon Oil', slug: '/product/hydrocarbon/mixed-oil', img: Hydrocarbon },
  { title: 'MTO Mineral Turpentine Oil', slug: 'product/mto', img: MTO },
  { title: 'Light Diesel Oil', slug: '/product/ldo/light-diesel-oil', img: LDO  },
  { title: 'N70 Base Oil', slug: '/product/white-base-oil/base-oil-n70' , img: WhiteBaseOil},
  { title: 'Furnace Oil', slug: '/product/fueloil/furnace-oil', img: FuelOil },
 { title: 'Industrial Solvent', slug: '/product/solvent/industrial-solvent', img: Solvent },
 { title: 'Clear Lamp Oil', slug: '/product/lamp-oil/clear-lamp-oil', img: LampOil },
 { title: 'Phenolic CNSL Resin', slug: '/product/cnsl-resin/phenolic-cnsl-resin', img: CNSLResin },
];

export default function OurProducts() {
  return (
    <section className="w-full mt-10">
      {/* heading */}
      <h2 className="text-center text-2xl font-bold py-6">
        Our <span className="text-red-700">Products</span>
      </h2>

      {/* blue outline box */}
      <div className=" p-2 max-w-6xl mx-auto">
        <div
          className="
            grid gap-3
            grid-cols-2           /* phones */
            sm:grid-cols-3        /* ≥640 px */
            md:grid-cols-4        /* ≥768 px */
            xl:grid-cols-5        /* ≥1280 px */
          "
        >
          {PRODUCTS.map((p, i) => (
            <Link
              key={p.slug}
              to={p.slug}
              className="
                group flex flex-col items-center text-center
                border
                hover:shadow-lg hover:scale-[1.02] transition
              "
            >
              {/* product image */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-36 object-cover sm:h-40 md:h-44"
              />

              {/* title + link */}
              <div className="py-3">
                <h3 className="text-[13px] font-semibold leading-tight">{p.title}</h3>
                <span
                  className="
                    mt-1 inline-block text-[11px] text-red-600
                    group-hover:underline
                  "
                >
                  View More&nbsp;→
                </span>
              </div>

              {/* invisible gap after 5th card to start new row like screenshot */}
              {i === 4 && <span className="col-span-full h-[1px] bg-transparent"></span>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
