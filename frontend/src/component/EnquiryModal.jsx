// components/EnquiryModal.jsx
import React from 'react';

export default function EnquiryModal({ open, onClose, product }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl font-bold leading-none"
        >
          &times;
        </button>

        <h3 className="text-xl font-semibold mb-4">
          Enquiry for <span className="text-[#0c2c53]">{product}</span>
        </h3>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // 👉 hook this up to your backend / email service
            // await axios.post('/api/enquiries', …);
            onClose();
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border rounded-md px-3 py-2"
          />
          <input
            type="email"
            placeholder="Email / Phone"
            required
            className="w-full border rounded-md px-3 py-2"
          />
          <textarea
            rows={4}
            placeholder="Message"
            className="w-full border rounded-md px-3 py-2"
          />
          <button
            type="submit"
            className="w-full bg-[#b51b1b] hover:bg-[#971414] text-white font-medium py-2 rounded-md"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
