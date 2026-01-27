import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const KnowledgeBaseSection: React.FC = () => {
  const navigate = useNavigate();

  const trainingModules = [
    {
      id: 1,
      title: 'GST Registration Guide',
      description:
        'Complete step-by-step process for GST registration and compliance',
      duration: '45 mins',
      difficulty: 'Beginner',
      image:
        'https://images.unsplash.com/photo-1664575602276-acd073f104c1',
      imageAlt:
        'Indian businessman in formal shirt working on laptop with GST documents and calculator',
      category: 'Tax & Compliance',
      completions: '2,450+ completed',
    },
    {
      id: 2,
      title: 'Documentation Best Practices',
      description:
        'Learn how to organize and maintain business documents effectively',
      duration: '30 mins',
      difficulty: 'Beginner',
      category: 'Business Management',
      completions: '1,890+ completed',
    },
    {
      id: 3,
      title: 'Digital Marketing Basics',
      description:
        'Essential digital marketing strategies for small businesses',
      duration: '60 mins',
      difficulty: 'Intermediate',
      image:
        'https://images.unsplash.com/photo-1680459575540-2bbdf72151c2',
      imageAlt:
        'Young Indian entrepreneur in casual attire working on digital marketing campaign',
      category: 'Marketing',
      completions: '3,120+ completed',
    },
    {
      id: 4,
      title: 'Financial Planning for MSMEs',
      description: 'Master financial planning and cash flow management',
      duration: '75 mins',
      difficulty: 'Advanced',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      imageAlt:
        'Indian financial advisor explaining charts and graphs to client',
      category: 'Finance',
      completions: '1,560+ completed',
    },
  ];

  const handleModuleClick = (moduleId: number) => {
    navigate('/schemes-and-resources', { state: { selectedModule: moduleId } });
  };

  const handleRequestSupport = () => {
    navigate('/user-profile', { state: { tab: 'support' } });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-secondary text-secondary-foreground';
      case 'Intermediate':
        return 'bg-warning text-warning-foreground';
      case 'Advanced':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-muted text-text-secondary';
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold text-text-primary mb-2">
            Knowledge Base
          </h2>
          <p className="text-text-secondary text-sm lg:text-base">
            Learn essential business skills with our training modules
          </p>
        </div>
        <Button
          variant="secondary"
          onClick={handleRequestSupport}
          iconName="HelpCircle"
          iconPosition="left"
        >
          Request Support
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {trainingModules.map((module) => (
          <div
            key={module.id}
            className="bg-surface rounded-lg card-shadow hover:card-shadow-hover transition-smooth overflow-hidden cursor-pointer group"
            onClick={() => handleModuleClick(module.id)}
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={module.image}
                alt={module.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              />

              <div className="absolute top-3 left-3">
                <span className="bg-surface text-text-primary px-2 py-1 rounded text-xs font-medium">
                  {module.category}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(
                    module.difficulty,
                  )}`}
                >
                  {module.difficulty}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-base font-semibold text-text-primary mb-2 group-hover:text-primary transition-smooth">
                {module.title}
              </h3>

              <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                {module.description}
              </p>

              <div className="flex items-center justify-between text-xs text-text-secondary mb-3">
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={14} />
                  <span>{module.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Users" size={14} />
                  <span>{module.completions}</span>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                iconName="Play"
                iconPosition="left"
                className="w-full"
              >
                Start Learning
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-muted rounded-lg p-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="FileText" size={24} color="white" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Need Documentation Support?
        </h3>
        <p className="text-text-secondary text-sm mb-4 max-w-md mx-auto">
          Our experts can help you prepare and organize all required documents
          for schemes and certifications
        </p>
        <Button
          variant="default"
          onClick={handleRequestSupport}
          iconName="MessageCircle"
          iconPosition="left"
        >
          Request Documentation Support
        </Button>
      </div>
    </div>
  );
};

export default KnowledgeBaseSection;

