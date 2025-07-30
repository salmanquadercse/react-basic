import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AuthHeader from './AuthHeader';
import './styles.css';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout vh-100 bg-light">
      <AuthHeader />
      <Container className="h-100">
        <Row className="h-100 justify-content-center align-items-center">
          <Col xs={12} md={8} lg={6} className="py-5">
            <div className="bg-white p-4 rounded shadow-sm">
              {children}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AuthLayout;