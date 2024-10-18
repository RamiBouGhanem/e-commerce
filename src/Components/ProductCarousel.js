import React, { useState } from 'react';

const ProductCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel relative h-64 bg-gray-300 rounded-lg overflow-hidden">
      <img
        src={images[currentImage]}
        alt="Product"
        className="w-full h-full object-cover max-w-full max-h-64"
      />
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2bg-transparent text-white px-3 py-1 rounded-lg opacity-10 hover:opacity-50"
      >
        &larr;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2-bg-transparent text-white px-3 py-1 rounded-lg opacity-10 hover:opacity-50"
      >
        &rarr;
      </button>
    </div>
  );
};

export default ProductCarousel;