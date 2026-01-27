import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/ui/Header';
import SearchBar from './schemes-and-resources/components/SearchBar';
import FilterPanel from './schemes-and-resources/components/FilterPanel';
import QuickLinksSection from './home-dashboard/components/QuickLinksSection';
import KeyActionsSection from './home-dashboard/components/KeyActionsSection';
import KnowledgeBaseSection from './home-dashboard/components/KnowledgeBaseSection';
import PersonalizedSection from './home-dashboard/components/PersonalizedSection';

const HomeDashboard: React.FC = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({
    state: '',
    sector: '',
    eligibility: '',
    schemeType: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
  };

  const handleFilterToggle = () => {
    setIsFilterOpen(true);
  };

  const handleFilterClose = () => {
    setIsFilterOpen(false);
  };

  const handleApplyFilters = (filters: {
    state: string;
    sector: string;
    eligibility: string;
    schemeType: string;
  }) => {
    setAppliedFilters(filters);
    console.log('Applied filters:', filters);
  };

  const hasActiveFilters = Object.values(appliedFilters).some(
    (value) => value !== '',
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16">
          <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-text-secondary">Loading your dashboard...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-6 text-white">
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">
                Welcome to Yojanadharsh - Fueling Grassroots for a Global Tomorrow
              </h1>
              <p className="text-lg opacity-90">
                Your gateway to government schemes, certifications, and business
                growth opportunities
              </p>
            </div>
          </div>

          {/* Search Section */}
          <SearchBar
            onSearch={handleSearch}
            onFilterToggle={handleFilterToggle}
          />

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mb-6">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-text-secondary">
                  Active filters:
                </span>
                {Object.entries(appliedFilters).map(
                  ([key, value]) =>
                    value && (
                      <span
                        key={key}
                        className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {key}: {value}
                      </span>
                    ),
                )}
                <button
                  onClick={() =>
                    handleApplyFilters({
                      state: '',
                      sector: '',
                      eligibility: '',
                      schemeType: '',
                    })
                  }
                  className="text-sm text-destructive hover:underline ml-2"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}

          {/* Quick Links Section */}
          <QuickLinksSection />

          {/* Key Actions Section */}
          <KeyActionsSection />

          {/* Knowledge Base Section */}
          <KnowledgeBaseSection />

          {/* Personalized Section */}
          <PersonalizedSection />

          {/* Support Section */}
          <div className="mt-8 bg-surface rounded-lg card-shadow p-6 text-center">
            <h2 className="text-xl font-semibold text-text-primary mb-2">
              Need Help Getting Started?
            </h2>
            <p className="text-text-secondary mb-4 max-w-2xl mx-auto">
              Our support team is here to guide you through the process of
              finding the right schemes, completing applications, and growing your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>Free Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Filter Panel */}
      <FilterPanel
        isOpen={isFilterOpen}
        onClose={handleFilterClose}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
};

export default HomeDashboard;
