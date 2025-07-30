import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const DashboardSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: 'bi-speedometer2' },
    { path: '/profile', label: 'Profile', icon: 'bi-person' },
  ];

  return (
    <div className="dashboard-sidebar bg-dark text-white">
      <div className="sidebar-brand p-3">
        <h5 className="mb-0">My App</h5>
      </div>
      <Nav className="flex-column">
        {menuItems.map((item) => (
          <Nav.Item key={item.path}>
            <Nav.Link 
              as={Link} 
              to={item.path} 
              active={location.pathname === item.path}
              className="text-white"
            >
              <i className={`bi ${item.icon} me-2`}></i>
              {item.label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

export default DashboardSidebar;