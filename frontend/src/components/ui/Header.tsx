import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    {
      label: 'Dashboard',
      path: '/home-dashboard',
      icon: 'LayoutDashboard',
    },
    {
      label: 'Schemes & Resources',
      path: '/schemes-and-resources',
      icon: 'FileText',
    },
    {
      label: 'My Profile',
      path: '/user-profile',
      icon: 'User',
    },
    {
      label: 'Certifications',
      path: '/certification-roadmap',
      icon: 'Award',
    },
  ];

  const isActive = (path: string) => location?.pathname === path;

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/home-dashboard');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-nav bg-surface border-b border-border nav-shadow">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Logo Section */}
        <div
          className="flex items-center cursor-pointer transition-smooth hover:opacity-80"
          onClick={handleLogoClick}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Building2" size={20} color="white" strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-text-primary leading-tight">
                Yojanadharsh
              </span>
              <span className="text-xs text-text-secondary leading-tight hidden sm:block">
                Fueling Grassroots for a Global Tomorrow
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-smooth
                ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-text-primary hover:bg-muted hover:text-text-primary'
                }
              `}
            >
              <Icon name={item.icon} size={18} strokeWidth={2} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10"
          >
            <Icon
              name={isMobileMenuOpen ? 'X' : 'Menu'}
              size={20}
              strokeWidth={2}
            />
          </Button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-surface border-t border-border">
          <nav className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`
                  w-full flex items-center space-x-3 px-3 py-3 rounded-md text-sm font-medium transition-smooth
                  ${
                    isActive(item.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-text-primary hover:bg-muted'
                  }
                `}
              >
                <Icon name={item.icon} size={20} strokeWidth={2} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

