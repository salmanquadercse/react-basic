import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Home from './features/dashboard/Home';
import Profile from './features/dashboard/Profile';

const App = () => {
  //const { isAuthenticated } = useSelector(state => state.auth);

  return (
    <Router>
      <Routes>
        {/* Public routes with AuthLayout */}
        {/* <Route element={<AuthLayout />}>
          <Route 
            path="/login" 
            element={!isAuthenticated ? <Login /> : <Navigate to="/" />} 
          />
          <Route 
            path="/register" 
            element={!isAuthenticated ? <Register /> : <Navigate to="/" />} 
          />
        </Route> */}

        {/* Protected routes with DashboardLayout */}
        {/* <Route 
          element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route> */}

        {/* Catch all route */}
        {/* <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} /> */}
      </Routes>
    </Router>
  );
};

export default App;