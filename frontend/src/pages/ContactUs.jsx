// components/ContactSection.jsx
import React from 'react';
import bgPlant from '../assets/company.png'; // swap for your real photo

export default function ContactSection() {
  return (
    <section className="w-full">
      {/* top title */}
      <h2 className="text-center text-3xl font-extrabold py-6">
        Contact <span className="text-red-600">US</span>
      </h2>

      {/* two-column wrapper */}
      <div className="grid md:grid-cols-2">
        {/* LEFT : hero image + overlay text */}
        <div className="relative">
          <img
            src={bgPlant}
            alt="Refinery plant"
            className="h-full w-full object-cover md:min-h-[550px]"
          />
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* copy on top */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 py-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
            <p className="leading-relaxed text-sm sm:text-base max-w-md">
              Arabo Impex Pvt. Ltd., established in 2012 and based in Navi Mumbai,
              is a leading manufacturer and supplier of fuel oils, including
              biodiesel, light diesel oil, and various industrial-grade
              petroleum products. Their product range encompasses base oils,
              hydrocarbon oils, mineral turpentine oil, and other specialized
              fuels designed for industrial, automotive, and construction
              applications. The company is committed to delivering high-quality,
              cost-effective energy solutions that meet the diverse needs of its
              clients across India.
            </p>
          </div>
        </div>

        {/* RIGHT : contact form */}
        <div className="bg-black text-white flex items-center">
          <form
            className="w-full max-w-md mx-auto p-8"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: hook to backend / email service
            }}
          >
            <h3 className="text-2xl font-semibold mb-2">
              We’d love to hear from you!
            </h3>
            <p className="mb-6 text-lg">Let’s get in touch</p>

            {/* full name */}
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-4 px-4 py-2 rounded-md text-black"
              required
            />

            {/* email */}
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="eg. arabo@gmail.com"
              className="w-full mb-4 px-4 py-2 rounded-md text-black"
              required
            />

            {/* phone */}
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 8546855685"
              className="w-full mb-4 px-4 py-2 rounded-md text-black"
            />

            {/* message */}
            <label className="block text-sm mb-1">Leave Your Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here…"
              className="w-full mb-6 px-4 py-2 rounded-md text-black resize-none"
              required
            />

            <button
              type="submit"
              className="
                bg-red-700 hover:bg-red-800
                w-full py-3 rounded-md font-semibold
                transition-colors
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
