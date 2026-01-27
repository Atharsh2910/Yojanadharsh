import React from 'react';
import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './pages/NotFound';
import SchemesAndResources from './pages/schemes-and-resources';
import HomeDashboard from './pages/home-dashboard';
import LoginPage from './pages/login';
import CertificationRoadmap from './pages/certification-roadmap';
import UserProfile from './pages/user-profile';
import Register from './pages/register';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/schemes-and-resources" element={<SchemesAndResources />} />
          <Route path="/home-dashboard" element={<HomeDashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/certification-roadmap" element={<CertificationRoadmap />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;

