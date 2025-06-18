import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function OurProducts() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [submitted, setSubmitted] = useState(false);
const MTO="https://res.cloudinary.com/daqlatcsr/image/upload/v1750230094/mto_i8jms7.png";
const  YellowBaseOil="https://res.cloudinary.com/daqlatcsr/image/upload/v1750230210/baseoil_rj2aai.png";
const WhiteBaseOil="https://res.cloudinary.com/daqlatcsr/image/upload/v1750230301/whitebaseoil_k9wsb5.png";
const  LDO="https://res.cloudinary.com/daqlatcsr/image/upload/v1750230332/ldo_znh672.png";
const FuelOil="https://res.cloudinary.com/daqlatcsr/image/upload/v1750230376/fueloil_wrc1xn.png";
const BioFuel="https://res.cloudinary.com/daqlatcsr/image/upload/v1750230631/biofuel_iwnlrs.png";
const Solvent="https://res.cloudinary.com/daqlatcsr/image/upload/v1750231006/solvent_ehl5g2.png";
const CNSLResin="https://res.cloudinary.com/daqlatcsr/image/upload/v1750231111/cnslresin_jdgadh.png";
const LampOil="https://res.cloudinary.com/daqlatcsr/image/upload/v1750231068/lampoil_kgdpcl.png";
const Hydrocarbon="https://res.cloudinary.com/daqlatcsr/image/upload/v1750231153/hydrocarbon_uzs4w0.png";

const PRODUCTS = [
  { title: 'Biodiesel Oil', slug: '/product/biofuel/biodiesel', img: BioFuel, subproduct: 'Biodiesel' },
  { title: 'Base Oil SN150', slug: '/product/yellow-base-oil/base-oil-sn150', img: YellowBaseOil, subproduct: 'Base Oil SN150' },
  { title: 'Mixed Hydrocarbon Oil', slug: '/product/hydrocarbon/mixed-oil', img: Hydrocarbon, subproduct: 'Mix Hydrocarbon Oil' },
  { title: 'MTO Mineral Turpentine Oil', slug: '/product/mto', img: MTO, subproduct: 'Mineral Turpentine Oil' },
  { title: 'Light Diesel Oil', slug: '/product/ldo/light-diesel-oil', img: LDO, subproduct: 'Light Diesel Oil' },
  { title: 'N70 Base Oil', slug: '/product/white-base-oil/base-oil-n70', img: WhiteBaseOil, subproduct: 'BASE OIL N70' },
  { title: 'Furnace Oil', slug: '/product/fueloil/furnace-oil', img: FuelOil, subproduct: 'Furnace Oil' },
  { title: 'Industrial Solvent', slug: '/product/solvent/industrial-solvent', img: Solvent, subproduct: 'Industrial Solvent' },
  { title: 'Clear Lamp Oil', slug: '/product/lamp-oil/clear-lamp-oil', img: LampOil, subproduct: 'Clear Lamp Oil' },
  { title: 'Phenolic CNSL Resin', slug: '/product/cnsl-resin/phenolic-cnsl-resin', img: CNSLResin, subproduct: 'Phenolic CNSL Resin' },
];

  const handleEnquiry = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setSubmitted(false);
  };

  return (
    <section className="w-full mt-10">
      <h2 className="text-center text-2xl font-bold py-6">
        Our <span className="text-red-700">Products</span>
      </h2>

      <div className="p-2 max-w-6xl mx-auto">
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {PRODUCTS.map((p, i) => (
          <div
  key={p.slug}
  className="group relative flex flex-col items-center text-center border overflow-hidden"
>
  {/* Image with Enquiry onClick */}
  <div
    onClick={() => handleEnquiry(p)}
    className="relative w-full cursor-pointer"
  >
    <img
      src={p.img}
      alt={p.title}
      className="w-full h-36 object-cover sm:h-40 md:h-44"
    />

    {/* Overlay only on image */}
    <div className="absolute top-0 left-0 right-0 h-full bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center pointer-events-none">
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent image click
          handleEnquiry(p);
        }}
        className="text-xs bg-white text-red-800 font-semibold px-4 py-1 rounded shadow-md pointer-events-auto"
      >
        Enquiry
      </button>
    </div>
  </div>

  {/* Title & View More */}
  <div className="py-3">
    <h3 className="text-[13px] font-semibold leading-tight">{p.title}</h3>
    <Link to={p.slug}>
      <span className="mt-1 inline-block text-[11px] text-red-600 group-hover:underline">
        View More →
      </span>
    </Link>
  </div>
</div>

          ))}
        </div>
      </div>

      {/* Enquiry Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-xl relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-3 text-xl font-bold"
            >
              ×
            </button>

            <h2 className="text-2xl font-semibold text-red-800 mb-4 text-center">
              Enquiry Form
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 items-center mb-4">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.title}
                className="w-40 h-40 object-contain rounded-lg"
              />
              <div className="w-full">
                <p className="font-semibold text-center sm:text-left mb-2">
                  {selectedProduct.title}
                </p>

                {submitted ? (
                  <div className="text-center py-10">
                    <h3 className="text-2xl text-green-700 font-bold mb-4">✅ Thank You!</h3>
                    <p className="text-gray-700">Your enquiry has been submitted successfully.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      formData.append("product", selectedProduct.title);
                      formData.append("subproduct", selectedProduct.subproduct);

                      fetch("https://fueloil.in/enquiry.php", {
                        method: "POST",
                        body: formData
                      })
                        .then((res) => res.text())
                        .then((res) => {
                          if (res === "success") {
                            setSubmitted(true);
                            setTimeout(handleClose, 2000);
                          } else {
                            alert("Submission failed. Try again.");
                          }
                        })
                        .catch(() => alert("Server error."));
                    }}
                    className="space-y-3"
                  >
                    <input type="hidden" name="product" value={selectedProduct.title} />
                    <input type="hidden" name="subproduct" value={selectedProduct.subproduct} />

                    <div className="flex gap-2">
                      <input
                        name="quantity"
                        type="number"
                        placeholder="Quantity"
                        className="border p-2 w-1/2 rounded"
                        required
                      />
                      <input
                        name="unit"
                        type="text"
                        placeholder="Measurement Unit"
                        className="border p-2 w-1/2 rounded"
                        required
                      />
                    </div>

                    <input
                      name="mobile"
                      type="tel"
                      placeholder="Mobile No."
                      className="border p-2 w-full rounded"
                      required
                    />

                    <button
                      type="submit"
                      className="bg-red-800 text-white py-2 px-4 rounded hover:bg-red-700 w-full"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
