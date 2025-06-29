import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const allProducts = [
  { product: 'mto', name: 'Thiner', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1748328939/5b62951035ebb705128047bc_jkd9hn.webp' },
  { product: 'white-base-oil', name: 'BASE OIL N70', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1749885780/ChatGPT_Image_Jun_14_2025_12_30_54_PM_kdwbzh.png' },
  { product: 'ldo', name: 'Light Diesel Oil', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1748330244/5feaba0cc682dc0001bfad02_cev84l.jpg' },
  { product: 'fuel-oil', name: 'Marine Fuel Oil', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1748331061/FO10_x0twll.jpg' },
  { product: 'biofuel', name: 'Biodiesel', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1749209057/images_2_irxjoq.jpg' },
  { product: 'solvent', name: 'Paint Thinner Solvent', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1749886072/ChatGPT_Image_Jun_14_2025_11_03_18_AM_hevx7e.png' },
  { product: 'briquette', name: 'Charcoal Briquette', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1748330664/natural-biomass-briquettes-500x500_s6rvom.webp' },
  { product: 'cnsl-resin', name: 'Friction Grade CNSL Resin', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1749885946/ChatGPT_Image_Jun_14_2025_11_55_33_AM_takxwa.png' },
  { product: 'lamp-oil', name: 'Clear Lamp Oil', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1749277254/WhatsApp_Image_2025-05-29_at_6.53.48_PM_l9i7jj.jpg' },
  { product: 'hydrocarbon', name: 'Mix Hdrocarbon oil', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1748331312/images_3_gdkybk.jpg' },
  { product: 'mto', name: 'Reducer', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1748328939/bbcdd4_5517a20d622f4cb3872ef50c2d44b842_mv2_teafuk.webp' },
  { product: 'white-base-oil', name: 'BASE OIL N150', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1749885780/ChatGPT_Image_Jun_14_2025_12_29_02_PM_g8yqpp.png' },
  { product: 'ldo', name: 'Boiler LDO', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1748330355/light-diesel-oils_pzd3rh.jpg' },
  { product: 'fuel-oil', name: 'Heavy Fuel oil', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1748331057/crude-oil-surface-background-textured-pollution-oil-products-rude-oil-surface-background-textured-mineral-oil-hands-171674329_d81ihj.jpg' },
  { product: 'biofuel', name: 'Bioethanol E85', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1749209058/mineral-oils_ol7iw1.jpg' },
  { product: 'solvent', name: 'Aliphatic Solvent', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1749886072/ChatGPT_Image_Jun_14_2025_11_05_33_AM_hytxqu.png' },
  { product: 'briquette', name: 'Coconut Shell Briquette', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1748330663/img-20201006-wa0004-jpg_itxisx.jpg' },
  { product: 'cnsl-resin', name: 'Epoxy Modified CNSL Resin', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1749885947/ChatGPT_Image_Jun_14_2025_12_12_32_PM_jt5enw.png' },
  { product: 'lamp-oil', name: 'Scented Lamp Oil', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1749277255/WhatsApp_Image_2025-05-29_at_11.18.36_AM_zws33t.jpg' },
  { product: 'hydrocarbon', name: 'Industrial Hydrocarbon', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1748331322/images_uoxdvd.jpg' },
  { product: 'white-base-oil', name: 'High Viscosity White Base Oil', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1749885782/ChatGPT_Image_Jun_14_2025_12_50_42_PM_uwghr2.png' },
  { product: 'white-base-oil', name: 'White Oil', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1749885781/ChatGPT_Image_Jun_14_2025_12_40_56_PM_ezuner.png' },
  { product: 'hydrocarbon', name: 'Processing oil', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1748331335/product-jpeg-500x500_wypvyz.webp' },
  { product: 'briquette', name: 'Low-Moisture Briquette', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1748330664/natural-biomass-briquettes-500x500_s6rvom.webp' },
  { product: 'white-base-oil', name: 'BASE OIL N220', image: 'https://res.cloudinary.com/daqlatcsr/image/upload/v1749885780/ChatGPT_Image_Jun_14_2025_12_32_34_PM_vev4zh.png' }
];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

function toSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default function MoreProducts() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-10">
      <h2 className="text-center text-3xl font-bold mb-10">
        More <span className="text-red-700">Products</span>
      </h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {allProducts.map((item, index) => (
          <motion.div
            key={index}
            className="aspect-square w-full rounded-xl overflow-hidden shadow-md border border-gray-200"
            variants={imageVariants}
          >
            <Link to={`/product/${item.product}/${toSlug(item.name)}`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}