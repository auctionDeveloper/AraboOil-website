import React from 'react';

const videos = [
  { src: 'https://res.cloudinary.com/daqlatcsr/video/upload/v1750080218/1_eynvzo.mp4' },
  { src: 'https://res.cloudinary.com/daqlatcsr/video/upload/v1750080207/2_htjsj4.mp4' },
  { src: 'https://res.cloudinary.com/daqlatcsr/video/upload/v1750080207/3_tzvqk7.mp4' },
  { src: 'https://res.cloudinary.com/daqlatcsr/video/upload/v1750080207/4_qdemb6.mp4' },
  { src: 'https://res.cloudinary.com/daqlatcsr/video/upload/v1750080208/5_zygfhe.mp4' },
  { src: 'https://res.cloudinary.com/daqlatcsr/video/upload/v1750080207/6_o0sq71.mp4' },
];

export default function OurProductsVideos() {
  return (
    <div>
      <section className="w-full mt-10">
        {/* heading */}
        <h2 className="text-center text-2xl font-bold py-6">
          Our <span className="text-red-700">Products</span>
        </h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-20">
          {videos.map((video, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg">
              <video
                controls
                className="w-full h-48 object-cover"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
