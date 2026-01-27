import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PersonalizedSection: React.FC = () => {
  const navigate = useNavigate();

  const applicationStatus = [
    {
      id: 1,
      title: 'PMEGP Application',
      status: 'Under Review',
      statusColor: 'bg-warning text-warning-foreground',
      progress: 75,
      lastUpdate: '2 days ago',
      nextStep: 'Document verification pending',
    },
    {
      id: 2,
      title: 'GST Registration',
      status: 'Approved',
      statusColor: 'bg-secondary text-secondary-foreground',
      progress: 100,
      lastUpdate: '1 week ago',
      nextStep: 'Certificate ready for download',
    },
    {
      id: 3,
      title: 'MUDRA Loan',
      status: 'In Progress',
      statusColor: 'bg-primary text-primary-foreground',
      progress: 45,
      lastUpdate: '5 days ago',
      nextStep: 'Bank verification scheduled',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      title: 'Completed GST Registration Guide',
      type: 'training',
      icon: 'BookOpen',
      time: '2 hours ago',
      description:
        'Successfully completed the GST registration training module',
    },
    {
      id: 2,
      title: 'Applied for PMEGP Scheme',
      type: 'application',
      icon: 'FileText',
      time: '2 days ago',
      description:
        "Submitted application for Prime Minister's Employment Generation Programme",
    },
    {
      id: 3,
      title: 'Profile Updated',
      type: 'profile',
      icon: 'User',
      time: '1 week ago',
      description: 'Updated business information and contact details',
    },
    {
      id: 4,
      title: 'Document Uploaded',
      type: 'document',
      icon: 'Upload',
      time: '1 week ago',
      description:
        'Uploaded Aadhar card and business registration certificate',
    },
  ];

  const handleViewApplication = (applicationId: number) => {
    navigate('/user-profile', {
      state: { tab: 'applications', selectedApp: applicationId },
    });
  };

  const handleViewAllActivities = () => {
    navigate('/user-profile', { state: { tab: 'activity' } });
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'training':
        return 'BookOpen';
      case 'application':
        return 'FileText';
      case 'profile':
        return 'User';
      case 'document':
        return 'Upload';
      default:
        return 'Activity';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Application Status */}
      <div className="bg-surface rounded-lg card-shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-text-primary">
            Application Status
          </h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/user-profile')}
            iconName="ExternalLink"
            iconPosition="right"
          >
            View All
          </Button>
        </div>

        <div className="space-y-4">
          {applicationStatus.map((app) => (
            <div
              key={app.id}
              className="border border-border rounded-lg p-4 hover:bg-muted transition-smooth cursor-pointer"
              onClick={() => handleViewApplication(app.id)}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-text-primary">{app.title}</h3>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${app.statusColor}`}
                >
                  {app.status}
                </span>
              </div>

              <div className="mb-3">
                <div className="flex items-center justify-between text-sm text-text-secondary mb-1">
                  <span>Progress</span>
                  <span>{app.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-smooth"
                    style={{ width: `${app.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">
                  Last update: {app.lastUpdate}
                </span>
                <Icon
                  name="ChevronRight"
                  size={16}
                  color="var(--color-text-secondary)"
                />
              </div>

              <div className="mt-2 text-sm text-text-secondary">
                Next: {app.nextStep}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-surface rounded-lg card-shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-text-primary">
            Recent Activity
          </h2>
          <Button
            variant="outline"
            size="sm"
            onClick={handleViewAllActivities}
            iconName="ExternalLink"
            iconPosition="right"
          >
            View All
          </Button>
        </div>

        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon
                  name={getActivityIcon(activity.type)}
                  size={18}
                  color="var(--color-text-secondary)"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-text-primary text-sm mb-1">
                  {activity.title}
                </h3>
                <p className="text-text-secondary text-xs mb-2 line-clamp-2">
                  {activity.description}
                </p>
                <span className="text-text-secondary text-xs">
                  {activity.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleViewAllActivities}
            iconName="Activity"
            iconPosition="left"
            className="w-full"
          >
            View Complete Activity History
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedSection;

