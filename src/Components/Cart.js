import React from 'react';

const Cart = ({ cartItems, onRemove, onUpdateQuantity }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="border-b py-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-500">Price: ${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className={`bg-gray-300 p-1 mr-2 rounded ${item.quantity <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-300 p-1 ml-2 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="bg-red-500 text-white p-1 ml-4 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <h3 className="text-2xl font-bold mt-4">Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
