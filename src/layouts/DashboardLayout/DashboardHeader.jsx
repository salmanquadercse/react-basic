import React from 'react';
import { Navbar, Nav, Dropdown, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

const DashboardHeader = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <Navbar bg="white" expand="lg" className="dashboard-header shadow-sm">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-3" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Dropdown align="end">
            <Dropdown.Toggle variant="light" id="dropdown-user">
              <Image src={user?.avatar || '/default-avatar.png'} roundedCircle width="30" height="30" className="me-2" />
              {user?.name || 'User'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => dispatch(logout())}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DashboardHeader;