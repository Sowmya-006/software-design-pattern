import React from 'react';
import { useCart } from '../context/CartContext';
import Button from '@mui/material/Button';

const AddToCart = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Button 
      variant="contained" 
      sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#333' } }}
      onClick={handleAddToCart}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
