import React from "react";
import vision   from "../assets/vision.png";
import mission  from "../assets/mission.png";
import values   from "../assets/values.png";

export default function Mission() {
  const cards = [
    {
      src: vision,
      title: "Vision",
      description:
        "To be India’s most trusted partner in fuel solutions, powering industries through quality products and seamless delivery.",
    },
    {
      src: mission,
      title: "Mission",
      description:
        "To deliver reliable, certified petroleum products with integrity, speed, and service excellence—supporting industrial growth across India.",
    },
    {
      src: values,
      title: "Values",
      description:
        "Integrity, Quality, Customer Focus, Sustainability, and Reliability—the five pillars driving our ethical, efficient, and eco-conscious fuel solutions across India.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cards.map(({ src, title, description }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center gap-4 bg-white rounded-lg shadow p-6"
          >
            <img
              src={src}
              alt={title}
              className="w-16 h-16 object-contain"
            />

            <h3 className="text-lg font-semibold">{title}</h3>

            <p className="text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
