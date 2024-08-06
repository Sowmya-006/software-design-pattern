

// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import AddToCart from './components/AddToCart';
//import AdminPanel from './components/AdminPanel';
//import PrivateRoute from './components/PrivateRoute';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Register from './pages/Register';
import Sidebar from './components/Sidebar';
import './App.css';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import Wishlist from './components/Wishlist';

const App = () => {
  const [filters, setFilters] = useState({ categories: [], priceRange: '' });
  const products = [
    { id: 1, name: 'Toy Car', description: 'A fun toy car for kids.', price: 15.99, imageUrl: 'https://sp.yimg.com/ib/th?id=OPAC.KgvAUiZ5IsBHUQ474C474&o=5&pid=21.1&w=160&h=105', category: 'cars' },
    { id: 2, name: 'Bugatti toy car', description: 'A Metal Pull Back Toy car for Kids.', price: 49.99, imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.y1xWsn11XXh6H8_h1t6gqgHaH7&pid=Api&P=0&h=180', category: 'cars' },
    { id: 3, name: 'Building Blocks', description: 'Educational building blocks set.', price: 29.99, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.86qZv4gsLAK2zLB1gVh0bAHaHn&pid=Api&P=0&h=180', category: 'blocks' },
    { id: 4, name: 'Abacus', description: 'A deceptively simple calculating tool still used all over the world.', price: 29.99, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.dkau9xcqyDwUXn6AiX4NeAHaE8&pid=Api&P=0&h=180', category: 'blocks' },
    { id: 5, name: 'Microwave Toys Play Kitchen Set', description: ' Play Electronic Oven with Play Food.', price: 129.99, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.iUp7MHRY6CUH2_sv1JUNtQHaHa&pid=Api&P=0&h=180', category: 'dolls' },
    { id: 6, name: 'Wooden Tool Box Kit', description: 'The wooden tool kit designed especially for kids.', price: 150.00, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.kEEkrOxkdckmVk5sRgVhAQHaHa&pid=Api&P=0&h=180', category: 'blocks' },
    { id: 7, name: 'Wooden Musical Toy', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'toy7.jpg', category: 'musical' },
    { id: 8, name: 'Baby Einstein Take Along Tunes Musical Toy', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'toy8.jpeg', category: 'musical' },
    { id: 9, name: 'Auris Glockenspiel 7 Tone Pentatonic', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'toy9.jpeg', category: 'musical' },
    { id: 10, name: 'Munchkin Mozart Magic Cube', description: 'Perfect for all ages.', price: 150.00, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.gxCqLL3YSicO-WpDF58RwwHaJS&pid=Api&P=0&h=180', category: 'musical' },
    { id: 11, name: 'Double Soft Toys', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.y1fyhstdWlODP4osS1NPcgHaHa&pid=Api&P=0&h=180', category: 'plush' },
    { id: 12, name: 'Jellycat Fuzzle Squirrel Soft toy', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'Jellycat Fuzzle Squirrel Soft Toy.jpeg', category: 'plush' },
    { id: 13, name: 'Keel toys Christmas Reindeer with scarf', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'Keel Toys Christmas Reindeer With Scarf.jpg', category: 'plush' },
    { id: 14, name: 'Panda Soft toy', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'Panda soft toy.jpg', category: 'plush' },
    { id: 15, name: 'Science Kit', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'Science kit.jpg', category: 'blocks' },
    { id: 16, name: 'Super soft Plush Corduroy Cuddle Farm Sitting Dog', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'Super Soft Plush Corduroy Cuddle Farm Sitting Dog.webp', category: 'plush' },
    { id: 17, name: 'Wooden Maths frame', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'wooden maths frame.jpeg', category: 'blocks' },
    { id: 18, name: 'Robot toy', description: 'Educational building blocks set.', price: 200.00, imageUrl: 'https://i5.walmartimages.com/asr/11bb23a1-4651-4446-8cc3-44d7ca032cf0.ee1e23a7fb79e0f64da2b96d4d1f1c41.jpeg', category: 'cars' }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = filters.categories.length > 0 ? filters.categories.includes(product.category) : true;
    const priceMatch = filters.priceRange ? (
      (filters.priceRange === '0-25' && product.price <= 25) ||
      (filters.priceRange === '25-50' && product.price > 25 && product.price <= 50) ||
      (filters.priceRange === '50-100' && product.price > 50 && product.price <= 100) ||
      (filters.priceRange === '100+' && product.price > 100)
    ) : true;
    return categoryMatch && priceMatch;
  });

  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
        <Router>
          <Navbar />
          <Header />
          <div className="main-container">
            <Sidebar filters={filters} setFilters={setFilters} />
            <main className='content'>
              <Routes>
                <Route path="/" element={<Home products={filteredProducts} />} />
                <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route
          path="/user-dashboard"
          element={
            <PrivateRoute role="user">
              <UserDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute role="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />
              </Routes>
            </main>
          </div>
          <Footer />
        </Router>
    </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
};

const Home = ({ products }) => (
  <>
    
    <div className="product-grid">
      {products.map(product => (
        <Product key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} imageUrl={product.imageUrl}>
          <AddToCart product={product} />
        </Product>
      ))}
    </div>
  </>
);




export default App;
