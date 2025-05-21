import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-900">404</h1>
        <h2 className="text-3xl font-bold text-slate-900 mt-4">Page Not Found</h2>
        <p className="mt-4 text-lg text-slate-600 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="mt-8">
          <Link to="/">
            <Button variant="primary" size="lg">
              <Home className="h-5 w-5 mr-2" /> Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;