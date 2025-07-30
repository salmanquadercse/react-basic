import React from 'react';
import { Navbar } from 'react-bootstrap';

const AuthHeader = () => {
  return (
    <Navbar bg="primary" variant="dark" className="mb-4">
      <Navbar.Brand href="/" className="mx-auto">
        My Application
      </Navbar.Brand>
    </Navbar>
  );
};

export default AuthHeader;