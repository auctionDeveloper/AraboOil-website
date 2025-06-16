import React from "react";
import who      from "../assets/who.png";
import company  from "../assets/company.png";

export default function AboutUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold mb-10">
        About <span className="text-red-700">Us</span>
      </h2>

      {/* --- Who We Are --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <div>
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
            Operating in&nbsp;<strong>30+ cities</strong>, we deliver fuels that
            meet the highest standards of quality and performance. Widely used
            in manufacturing, construction, textiles, cement, and
            infrastructure, our solutions are backed by a strong logistics
            network, a customer-first approach, and eco-conscious values.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={who}
            alt="Team illustration"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>

      {/* --- Company at a Glance --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
        {/* (small) Image */}
        <div className="flex justify-center order-2 md:order-1">
          <img
            src={company}
            alt="Company building"
            className="w-65 h-64 object-contain"
          />
        </div>

        {/* Bullet list */}
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-bold mb-4">Company&nbsp;at&nbsp;a&nbsp;Glance</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
            <li>
              <strong>CEO:</strong> Mr. Kiran Prabhu
            </li>
            <li>
              <strong>Business Type:</strong>&nbsp;Manufacturer, Supplier,
              Trader, Distributor &amp; Importer
            </li>
            <li>
              <strong>Founded:</strong>&nbsp;2012
            </li>
            <li>
              <strong>Team Size:</strong>&nbsp;10+ professionals
            </li>
            <li>
              <strong>Presence:</strong>&nbsp;Across India (30+ cities)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
