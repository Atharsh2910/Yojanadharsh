import React from 'react';

type AuthenticationWrapperProps = {
  children: React.ReactNode;
};

const AuthenticationWrapper: React.FC<AuthenticationWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Authentication Header */}
      <header className="w-full bg-surface border-b border-border nav-shadow">
        <div className="flex items-center justify-center h-16 px-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 21h18M5 21V7l8-4v18M13 9h4v12M17 9V7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-text-primary leading-tight">
                Yojanadharsh
              </span>
              <span className="text-xs text-text-secondary leading-tight">
                Business Support Platform
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-4">
        <div className="text-center text-sm text-text-secondary">
          <p>© 2024 Yojanadharsh. Empowering businesses across India.</p>
        </div>
      </footer>
    </div>
  );
};

export default AuthenticationWrapper;

