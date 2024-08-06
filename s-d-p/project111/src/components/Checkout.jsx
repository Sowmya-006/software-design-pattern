import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    // Add checkout logic here
    alert('Checkout not implemented');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: 'black' }}>Checkout</h2>
      {cart.length === 0 ? (
        <p style={{ color: 'black' }}>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ padding: 0, listStyle: 'none', color: 'black' }}>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: '10px' }}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <h3 style={{ color: 'black' }}>Total: ${calculateTotal()}</h3>
          <button
            onClick={handleCheckout}
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              borderRadius: '5px',
              fontSize: '16px'
            }}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
