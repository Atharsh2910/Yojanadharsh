import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const KeyActionsSection: React.FC = () => {
  const navigate = useNavigate();

  const keyActions = [
    {
      id: 1,
      title: 'Get Certified',
      description: 'Start your certification journey with step-by-step guidance',
      icon: 'Award',
      color: 'bg-primary',
      textColor: 'text-primary-foreground',
      route: '/certification-roadmap',
      stats: '12+ Certifications Available',
    },
    {
      id: 2,
      title: 'Find Funding',
      description: 'Discover loans, grants, and investment opportunities',
      icon: 'TrendingUp',
      color: 'bg-secondary',
      textColor: 'text-secondary-foreground',
      route: '/schemes-and-resources',
      stats: '₹50L+ Funding Options',
    },
    {
      id: 3,
      title: 'Marketplace',
      description: 'Connect with buyers and expand your business reach',
      icon: 'ShoppingBag',
      color: 'bg-warning',
      textColor: 'text-warning-foreground',
      route: '/schemes-and-resources',
      stats: '1000+ Active Buyers',
    },
  ];

  const handleActionClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="mb-8">
      <div className="mb-6">
        <h2 className="text-xl lg:text-2xl font-semibold text-text-primary mb-2">
          Quick Actions
        </h2>
        <p className="text-text-secondary text-sm lg:text-base">
          Take the next step in your business journey
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {keyActions.map((action) => (
          <div
            key={action.id}
            className="bg-surface rounded-lg card-shadow hover:card-shadow-hover transition-smooth overflow-hidden cursor-pointer group"
            onClick={() => handleActionClick(action.route)}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth`}
                >
                  <Icon
                    name={action.icon}
                    size={24}
                    color="white"
                    strokeWidth={2}
                  />
                </div>
                <Icon
                  name="ArrowUpRight"
                  size={20}
                  color="var(--color-text-secondary)"
                  className="group-hover:text-primary transition-smooth"
                />
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-smooth">
                {action.title}
              </h3>

              <p className="text-text-secondary text-sm mb-4">
                {action.description}
              </p>

              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-xs font-medium text-secondary">
                  {action.stats}
                </span>
              </div>

              <Button
                variant="outline"
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
                className="w-full group-hover:border-primary group-hover:text-primary"
              >
                Get Started
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyActionsSection;

