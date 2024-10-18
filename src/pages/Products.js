import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";

// Sample products array
const products = [
  {
    id: 1,
    title: "Modern Black Watch",
    price: 1399,
    images: ["./pexels-pratik-prasad-3736245-11700618.jpg"],
  },
  {
    id: 2,
    title: "Iphone 16",
    price: 1199,
    images: ["./pexels-aksbykas-14979023.jpg"],
  },
  {
    id: 3,
    title: "A Black Sony Camera Near",
    price: 1999,
    images: ["./pexels-iurii-laimin-78973777-9825013.jpg"],
  },
  {
    id: 4,
    title: "White Earphones",
    price: 999,
    images: ["./pexels-soulful-pizza-2080276-3780681.jpg"],
  },
  {
    id: 5,
    title: "Black Round Device",
    price: 1550,
    images: ["./pexels-kindelmedia-8566421.jpg"],
  },
  {
    id: 6,
    title: "GoPro HERO9 Action Camera",
    price: 399,
    images: ["./pexels-olenkabohovyk-3646165.jpg"],
  },
  {
    id: 7,
    title: "Sony Wireless Headphones",
    price: 350,
    images: ["./pexels-res-138931537-10292805.jpg"],
  },
  {
    id: 8,
    title: "Nikon D3500 DSLR Camera",
    price: 499,
    images: ["./pexels-crisher-7471251.jpg"],
  },
  {
    id: 9,
    title: "Apple Watch Series 7",
    price: 429,
    images: ["./pexels-olenkabohovyk-3646165.jpg"],
  },
  {
    id: 10,
    title: "Sony PlayStation 5",
    price: 499,
    images: ["./pexels-fox-58267-13189272.jpg"],
  },
  {
    id: 11,
    title: "Microsoft Surface Laptop 4",
    price: 1299,
    images: ["./pexels-junior-teixeira-1064069-2047905.jpg"],
  },
  {
    id: 12,
    title: "DJI Mavic Air 2 Drone",
    price: 799,
    images: ["./pexels-edgar-ruben-guerrero-arreazola-1415999-5447998.jpg"],
  },
  {
    id: 13,
    title: "Bose SoundLink Bluetooth Speaker",
    price: 129,
    images: ["./pexels-karolina-grabowska-4207685.jpg"],
  },
];

const Products = ({ addToCart }) => {
  // Make sure addToCart is a prop here
  const [currentIndex, setCurrentIndex] = useState(0); // Track the first visible product index
  const itemsPerPage = 3; // Number of items to show per "page"

  const handleNextClick = () => {
    if (currentIndex < products.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative p-6 bg-slate-800">
      <h1 className="text-3xl font-bold text-center mb-4">Our Products</h1>

      {/* Carousel Container */}
      <div className="flex items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={handlePrevClick}
          className="absolute left-0 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition"
          disabled={currentIndex === 0} // Disable when at the start
        >
          &#10094;
        </button>

        {/* Products List */}
        <div className="flex space-x-4 overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-1/3 p-2">
                <ProductCard product={product} addToCart={addToCart} />{" "}
                {/* Pass addToCart */}
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNextClick}
          className="absolute right-0 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition"
          disabled={currentIndex >= products.length - itemsPerPage} // Disable when at the end
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Products;
