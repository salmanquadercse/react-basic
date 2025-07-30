import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <h1 className="mb-4">Dashboard</h1>
      <Row className="g-4">
        <Col md={6} lg={3}>
          <Card>
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text className="display-6">1,234</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3}>
          <Card>
            <Card.Body>
              <Card.Title>Revenue</Card.Title>
              <Card.Text className="display-6">$12,345</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3}>
          <Card>
            <Card.Body>
              <Card.Title>Tasks</Card.Title>
              <Card.Text className="display-6">42</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3}>
          <Card>
            <Card.Body>
              <Card.Title>Messages</Card.Title>
              <Card.Text className="display-6">15</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;