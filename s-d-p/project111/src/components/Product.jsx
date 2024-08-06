import React from 'react';
import './Product.css';
import { useWishlist } from '../context/WishlistContext'; // Adjust the import path if needed

const Product = ({ id, name, description, price, imageUrl, children }) => {
  const { addToWishlist } = useWishlist(); // Access the Wishlist context
  const addToCart = () => {
    // Implement your logic for adding the product to cart
    console.log(`Added Rs${name} to cart!`);
  };

  const handleAddToWishlist = () => {
    addToWishlist({ id, name, description, price, imageUrl }); // Add item to wishlist
    console.log(`Added ${name} to wishlist!`);
  };

  return (
    <div className="product">
      <img src={imageUrl} alt={name} style={{ maxWidth: '30%', height: 'auto' }} />
      <div className="product-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: Rs{price}</p>
        {/*<button onClick={addToCart}>Add to Cart</button>
        <button onClick={handleAddToWishlist}>Add to Wishlist</button>*/}
        {children}
      </div>
    </div>
  );
};

export default Product;
