// components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ sub, route, onEnquiry }) {
  return (
    <div className="border rounded-xl shadow hover:shadow-lg transition-all duration-200 flex flex-col">
      <img
        src={sub.image || '/placeholder.jpg'}
        alt={sub.name}
        className="w-full h-40 object-contain rounded-t-xl p-4"
      />

      <div className="flex-1 flex flex-col justify-between p-4">
        <p className="text-center font-semibold">{sub.name}</p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => onEnquiry(sub.name)}
            className="border border-[#b51b1b] text-[#b51b1b] hover:bg-[#b51b1b] hover:text-white py-1 rounded-md text-sm"
          >
            Enquiry Now
          </button>

          <Link
            to={route}
            className="border border-[#0c2c53] text-[#0c2c53] hover:bg-[#0c2c53] hover:text-white py-1 rounded-md text-sm text-center"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}
