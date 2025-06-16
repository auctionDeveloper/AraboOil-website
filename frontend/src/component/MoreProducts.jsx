import React from 'react';
import { motion } from 'framer-motion';

const products = [
  [
    "https://res.cloudinary.com/daqlatcsr/image/upload/v1748328939/5b62951035ebb705128047bc_jkd9hn.webp",
    "https://res.cloudinary.com/daqlatcsr/image/upload/v1749209057/images_2_irxjoq.jpg",
    "https://res.cloudinary.com/daqlatcsr/image/upload/v1748329182/a_xrzvj5.webp",
    "https://res.cloudinary.com/daqlatcsr/image/upload/v1748328940/Mineral-Turpentine-Oil_nen7pk.jpg"
  ],
  [
    "https://res.cloudinary.com/daqlatcsr/image/upload/v1749287236/WhatsApp_Image_2025-05-28_at_7.53.33_PM_tfurlm.jpg",
    "https://res.cloudinary.com/daqlatcsr/image/upload/v1748329440/base-oil-500x500_tvpbek.jpg",
    "https://res.cloudinary.com/daqlatcsr/image/upload/v1748330354/LDO4_ewem0r.jpg",
    "https://res.cloudinary.com/daqlatcsr/image/upload/v1748331061/FO10_x0twll.jpg"
  ],
  [
    "https://res.cloudinary.com/daqlatcsr/image/upload/v1748330928/CARDANOL01_pgcd6u.jpg",
    "https://res.cloudinary.com/daqlatcsr/image/upload/v1748331323/mineral-hydrocarbon-oil-mho_uj40cd.jpg",
    "https://res.cloudinary.com/daqlatcsr/image/upload/v1749277255/WhatsApp_Image_2025-05-29_at_11.18.36_AM_zws33t.jpg",
    "https://res.cloudinary.com/daqlatcsr/image/upload/v1749209058/Bio-Diesel-Oil_xghn8k.jpg"
  ]
];

const rowVariants = {
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const imageVariants = (dir) => ({
  hidden: { opacity: 0, x: dir === 'left' ? -80 : 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
});

export default function MoreProducts() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-center text-3xl font-bold mb-10">
        More <span className="text-red-700">Products</span>
      </h2>

      {products.map((row, rowIndex) => {
        const direction = rowIndex % 2 === 0 ? 'left' : 'right';

        return (
          <motion.div
            key={rowIndex}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {row.map((img, imgIndex) => (
              <motion.div
                key={imgIndex}
                className="bg-white rounded-lg shadow-md overflow-hidden p-2 flex items-center justify-center h-48"
                variants={imageVariants(direction)}
              >
                <img
                  src={img}
                  alt={`Product ${imgIndex + 1}`}
                  className="object-contain h-full w-full rounded-md"
                />
              </motion.div>
            ))}
          </motion.div>
        );
      })}
    </div>
  );
}
