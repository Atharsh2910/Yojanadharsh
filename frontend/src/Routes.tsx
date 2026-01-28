import React from 'react';
import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

// Pages
import HomeDashboard from './pages/home-dashboard/HomeDashboard';
import SchemesAndResources from './pages/schemes-and-resources/SchemesAndResources';
import CertificationRoadmap from './pages/certification-roadmap/CertificationRoadmap';
import UserProfile from './pages/user-profile/UserProfile';
import LoginPage from './pages/login/LoginPage';
import Register from './pages/register/Register';
import NotFound from './pages/NotFound';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          
          {/* Dashboard & Core Features */}
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/home-dashboard" element={<HomeDashboard />} />
          <Route path="/schemes-and-resources" element={<SchemesAndResources />} />
          <Route path="/certification-roadmap" element={<CertificationRoadmap />} />
          <Route path="/user-profile" element={<UserProfile />} />
          
          {/* Error Handling */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
