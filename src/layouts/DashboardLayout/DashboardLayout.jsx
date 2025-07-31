import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import './styles.css';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <DashboardSidebar />
      <div className="dashboard-main">
        <DashboardHeader />
        <main className="dashboard-content p-4">
          <Container fluid>
            <Outlet /> {/* Render nested routes here */}
          </Container>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;