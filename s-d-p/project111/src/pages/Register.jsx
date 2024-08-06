import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
  const [error, setError] = useState({ name: false, email: false, password: false, register: '' });
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, role } = formData;

    if (name && email && password) {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        setError({ name: false, email: true, password: false, register: '' });
      } else {
        setError({ name: false, email: false, password: false, register: '' });
        try {
          register({ name, email, password, role });
          navigate('/login');
        } catch (error) {
          setError({ name: false, email: false, password: false, register: 'Registration failed. Try again.' });
        }
      }
    } else {
      setError({
        name: !name,
        email: !email,
        password: !password,
        register: ''
      });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'black' }}>
        Register
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          onChange={handleChange}
          error={error.name}
          helperText={error.name ? 'Name is required' : ''}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          onChange={handleChange}
          error={error.email}
          helperText={error.email ? 'Enter a valid email address' : ''}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
          error={error.password}
          helperText={error.password ? 'Password is required' : ''}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="role"
          label="Role"
          type="text"
          id="role"
          autoComplete="role"
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: 'black', color: 'white' }}
        >
          Register
        </Button>
        {error.register && (
          <Typography color="error" variant="body2" sx={{ mt: 2 }}>
            {error.register}
          </Typography>
        )}
        <Typography sx={{ mt: 2, textAlign: 'center', color: 'black' }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterPage;
