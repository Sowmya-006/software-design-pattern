import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext'; // Import your CartContext
import { Box, Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart(); // Use the context or function to add items to the cart
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Toy Car',
      
      imageUrl: 'https://sp.yimg.com/ib/th?id=OPAC.KgvAUiZ5IsBHUQ474C474&o=5&pid=21.1&w=160&h=105' // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Bugatti toy car',
     
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.y1xWsn11XXh6H8_h1t6gqgHaH7&pid=Api&P=0&h=180' // Replace with actual image URL
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const handleBuyNow = (item) => {
    addToCart(item); // Function to add the item to the cart
    navigate('/cart'); // Redirect to the cart page
  };

  if (!isAuthenticated) {
    return (
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h6" sx={{ color: 'black' }}>
          Please <Link to="/login" style={{ color: 'black' }}>login</Link> to view your wishlist.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
        Wishlist
      </Typography>
      {wishlistItems.length > 0 ? (
        wishlistItems.map((item) => (
          <Card key={item.id} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{ width: 100, height: 100, marginRight: 16, borderRadius: 4 }}
              />
              <Box>
                <CardContent>
                  <Typography variant="h5" sx={{ color: 'black' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'black' }}>
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => removeFromWishlist(item.id)}>
                    Remove
                  </Button>
                  <Button size="small" color="secondary" onClick={() => handleBuyNow(item)}>
                    Buy Now
                  </Button>
                </CardActions>
              </Box>
            </Box>
          </Card>
        ))
      ) : (
        <Typography variant="body1" sx={{ color: 'black' }}>
          Your wishlist is empty.
        </Typography>
      )}
    </Box>
  );
};

export default Wishlist;
