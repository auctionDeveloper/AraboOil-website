import React from "react";
import who from "../assets/who.png";
import company from "../assets/company.png";
import OurProductsVideos from "../component/OurProductsVideos";

export default function AboutUs() {
  return (
    <section className="w-full py-10 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold mb-10">
        About <span className="text-red-700">Us</span>
      </h2>

      {/* --- Who We Are --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Text */}
        <div className="text-left">
          <h3 className="text-2xl font-bold mb-4">Who&nbsp;Are&nbsp;We</h3>
          <p className="text-sm md:text-base leading-relaxed">
            Founded in 2012, <strong>Arabo Impex Pvt. Ltd.</strong> is a leading
            manufacturer, supplier, and importer of industrial fuels. With a
            diverse product range—including Base Oil, LDO, FO, MTO, and
            Biofuels—we serve industries across India with IS-certified,
            lab-tested products known for long shelf life, accurate composition,
            and high purity.
            <br />
            <br />
            Operating in <strong>30+ cities</strong>, we deliver fuels that meet
            the highest standards of quality and performance. Widely used in
            manufacturing, construction, textiles, cement, and infrastructure,
            our solutions are backed by a strong logistics network, a
            customer-first approach, and eco-conscious values.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={who}
            alt="Team illustration"
            className="w-full max-w-md h-64 object-cover rounded"
          />
        </div>
      </div>

   {/* --- Company at a Glance --- */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-16">
  {/* Image */}
  <div className="flex justify-center md:justify-start order-2 md:order-1">
    <img
      src={company}
      alt="Company building"
      className="w-full max-w-md h-64 object-cover rounded"
    />
  </div>

  {/* Text Block aligned to right */}
  <div className="flex justify-center md:justify-end order-1 md:order-2">
    <div className="text-left w-full max-w-md">
      <h3 className="text-2xl font-bold mb-4">Company&nbsp;at&nbsp;a&nbsp;Glance</h3>
      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
        <li><strong>CEO:</strong> Mr. Kiran Prabhu</li>
        <li><strong>Business Type:</strong> Manufacturer, Supplier, Trader, Distributor &amp; Importer</li>
        <li><strong>Founded:</strong> 2012</li>
        <li><strong>Team Size:</strong> 10+ professionals</li>
        <li><strong>Presence:</strong> Across India (30+ cities)</li>
      </ul>
    </div>
  </div>
</div>


      {/* --- Video Section --- */}
      <div className="mt-16">
        <OurProductsVideos />
      </div>
    </section>
  );
}
