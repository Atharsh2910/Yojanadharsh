import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const QuickLinksSection: React.FC = () => {
  const navigate = useNavigate();

  const governmentSchemes = [
    {
      id: 1,
      title: 'PMEGP Scheme',
      description:
        "Prime Minister's Employment Generation Programme for setting up new micro enterprises",
      image:
        'https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/What_is_the_PMEGP_Scheme_and_How_to_Apply_For_PMEGP_Scheme.webp',
      maxLoan: '₹25 Lakhs',
      subsidy: '15-35%',
      eligibility: '18+ years, 8th pass',
      category: 'Employment Generation',
      processingTime: '45-60 days',
    },
    {
      id: 2,
      title: 'MUDRA Loan',
      image:
        'https://lh4.googleusercontent.com/mKi9xJ1j7GM3_fpVD9s7tQuzUNV7qV1uNjmWpwKVrEyYObe8qTquO1okf2Z3gx8_IA_hBfFj_nTc0pNEPShn2M1gWIj_ojN647JzNZYeDDf0pRJ9u66in7DDskBzA1qzi4QwX4ZPkBSByKx984CHTz4',
      description:
        'Micro Units Development & Refinance Agency loan for micro and small enterprises',
      maxLoan: '₹10 Lakhs',
      subsidy: 'No Collateral',
      eligibility: 'All business types',
      category: 'Micro Finance',
      processingTime: '15-30 days',
    },
    {
      id: 3,
      title: 'Stand-Up India',
      image:
        'https://media.assettype.com/startupcity/import/2019/06/Stand-Up-India-scheme.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true',
      description:
        'Bank loans for SC/ST and women entrepreneurs to start greenfield enterprises',
      maxLoan: '₹1 Crore',
      subsidy: 'Margin Money',
      eligibility: 'SC/ST/Women',
      category: 'Inclusive Growth',
      processingTime: '60-90 days',
    },
  ];

  const handleLearnMore = (schemeId: number) => {
    navigate('/schemes-and-resources', { state: { selectedScheme: schemeId } });
  };

  const handleApply = (schemeId: number) => {
    navigate('/schemes-and-resources', {
      state: { selectedScheme: schemeId, action: 'apply' },
    });
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold text-text-primary mb-2">
            Featured Government Schemes
          </h2>
          <p className="text-text-secondary text-sm lg:text-base">
            Popular schemes for business growth and funding
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => navigate('/schemes-and-resources')}
          iconName="ArrowRight"
          iconPosition="right"
        >
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {governmentSchemes.map((scheme) => (
          <div
            key={scheme.id}
            className="bg-surface rounded-lg card-shadow hover:card-shadow-hover transition-smooth overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={scheme.image}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-3 left-3">
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                  {scheme.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {scheme.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                {scheme.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Max Loan:</span>
                  <span className="font-medium text-text-primary">
                    {scheme.maxLoan}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Benefit:</span>
                  <span className="font-medium text-secondary">
                    {scheme.subsidy}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Processing:</span>
                  <span className="font-medium text-text-primary">
                    {scheme.processingTime}
                  </span>
                </div>
              </div>

              <div className="mb-4 p-3 bg-muted rounded-md">
                <div className="flex items-center gap-2">
                  <Icon
                    name="Users"
                    size={16}
                    color="var(--color-text-secondary)"
                  />
                  <span className="text-sm text-text-secondary">
                    Eligibility: {scheme.eligibility}
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleLearnMore(scheme.id)}
                  className="flex-1"
                >
                  Learn More
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => handleApply(scheme.id)}
                  className="flex-1"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinksSection;

