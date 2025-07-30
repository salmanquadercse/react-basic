import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from './authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [validated, setValidated] = useState(false);
  const { loading, error } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity()) {
      // Simulate login API call
      setTimeout(() => {
        dispatch(loginSuccess({
          id: 1,
          name: 'John Doe',
          email: formData.email,
          avatar: 'https://i.pravatar.cc/150?img=3'
        }));
        navigate('/');
      }, 1000);
    }
    
    setValidated(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <h2 className="text-center mb-4">Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6"
          />
          <Form.Control.Feedback type="invalid">
            Password must be at least 6 characters.
          </Form.Control.Feedback>
        </Form.Group>

        <Button 
          variant="primary" 
          type="submit" 
          className="w-100 mt-3"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </Form>
      <div className="text-center mt-3">
        <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
    </>
  );
};

export default Login;