import React, { useState } from 'react';
import bgPlant from '../assets/company.png';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Auto-hide thank you message after 2 seconds
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset(); // clear form
    }, 2000);
  };

  return (
    <section className="w-full">
      <h2 className="text-center text-3xl font-extrabold py-6">
        Contact <span className="text-red-600">US</span>
      </h2>

      <div className="grid md:grid-cols-2">
        {/* LEFT : background + overlay */}
        <div className="relative">
          <img
            src={bgPlant}
            alt="Refinery plant"
            className="h-full w-full object-cover md:min-h-[550px]"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 py-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
            <p className="leading-relaxed text-sm sm:text-base max-w-md">
              Arabo Impex Pvt. Ltd., established in 2012 and based in Navi Mumbai,
              is a leading manufacturer and supplier of fuel oils, including
              biodiesel, light diesel oil, and various industrial-grade
              petroleum products. The company is committed to delivering high-quality,
              cost-effective energy solutions that meet the diverse needs of its
              clients across India.
            </p>
          </div>
        </div>

        {/* RIGHT : Contact Form */}
        <div className="bg-black text-white flex items-center">
          <form
            className="w-full max-w-md mx-auto p-8"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-2">We’d love to hear from you!</h3>
            <p className="mb-6 text-lg">Let’s get in touch</p>

            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-4 px-4 py-2 rounded-md text-black"
              required
            />

            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="eg. arabo@gmail.com"
              className="w-full mb-4 px-4 py-2 rounded-md text-black"
              required
            />

            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 8546855685"
              className="w-full mb-4 px-4 py-2 rounded-md text-black"
            />

            <label className="block text-sm mb-1">Leave Your Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here…"
              className="w-full mb-6 px-4 py-2 rounded-md text-black resize-none"
              required
            />

            <button
              type="submit"
              className="bg-red-700 hover:bg-red-800 w-full py-3 rounded-md font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Thank You Popup */}
      {submitted && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl px-8 py-6 text-center max-w-sm shadow-lg">
            <h3 className="text-xl font-bold text-green-700 mb-2">✅ Thank You!</h3>
            <p className="text-gray-700">Your message has been sent successfully.</p>
          </div>
        </div>
      )}
    </section>
  );
}
