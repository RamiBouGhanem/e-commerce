import React from 'react';

const Cart = ({ cartItems, updateCartQuantity, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart container mx-auto pt-16 mt-8 bg-gray-200 p-6 rounded-lg shadow-lg opacity-80">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex-grow md:w-3/4">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item flex justify-between items-center border-b py-4">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded-md"
                    onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    className="px-3 py-1 bg-green-500 text-white rounded-md"
                    onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <div className="text-lg font-semibold text-gray-700">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  className="text-red-500 hover:text-red-700 text-2xl px-4"
                  onClick={() => removeFromCart(item.id)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          <div className="md:w-1/4 flex flex-col items-end  md:mt-0">
            <div className="text-right mb-4">
              <h3 className="text-xl font-bold text-start">Total:</h3>
              <p className="text-2xl font-bold text-gray-900 text-start">${calculateTotal().toFixed(2)}</p>
            </div>
            <button
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
              onClick={() => alert('Proceeding to checkout!')}
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
