import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import About from './pages/About';

function App() {
  // State to hold cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add product to the cart
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart
  const updateCartQuantity = (id, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  // Remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  };

  return (
    <Router>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/products/:id" element={<ProductDetails addToCart={addToCart} />} />
            <Route path="/cart" element={
              <Cart 
                cartItems={cartItems} 
                onRemove={removeFromCart} 
                onUpdateQuantity={updateCartQuantity} 
              />} 
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p className=' hover:text-blue-900'>© 2024 R@mi</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
