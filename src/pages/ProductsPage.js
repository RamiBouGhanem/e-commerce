import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard';

const ProductsPage = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const products = [
    {
      id: 1,
      title: "Macbook Beside Apple XS",
      price: 1550,
      images: [
        "./pexels-ifreestock-577558.jpg",
        "./pexels-nickoloui-2473183.jpg",
        "./pexels-iliescu-victor-95204-306198.jpg",
      ],
    },
    {
      id: 2,
      title: "Samsung Galaxy S23 Ultra",
      price: 1199,
      images: [
        "./pexels-rubaitulazad-16149966.jpg",
        "./pexels-zana-latif-2772032-15493878.jpg",
        "./pexels-debraj-roy-282189167-13780411.jpg",
      ],
    },
    {
      id: 3,
      title: "A Black Sony Camera Near",
      price: 1999,
      images: [
        "./pexels-iurii-laimin-78973777-9825013.jpg",
        "./pexels-olenkabohovyk-3693700.jpg",
        "./pexels-mithulvarshan-3681321.jpg",
      ],
    },
  ];

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={handleAddToCart}  // This was updated to use addToCart
        />
      ))}
    </div>
  );
};

export default ProductsPage;
