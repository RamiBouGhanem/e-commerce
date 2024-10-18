import React from 'react';

const ProductCard = ({ product, addToCart }) => {  // Ensure addToCart is passed as a prop here
  return (
    <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-96 h-full">
      <img
        src={product.images[0]} // Display the first image
        alt={product.title}
        className="w-full object-cover h-96"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="font-bold text-lg text-gray-900">${product.price}</p>
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          onClick={() => addToCart(product)}  // Call addToCart when clicked
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
