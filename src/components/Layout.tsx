import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BookOpen, Home, Info, Mail } from 'lucide-react';

const Layout = () => {
  return (
    <div className="min-h-screen">
      <nav className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg dark:shadow-gray-900/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-2xl font-bold gradient-text"
              aria-label="Home"
            >
              <BookOpen className="h-8 w-8" />
              <span>Lumos Learn</span>
            </Link>
            
            <div className="flex space-x-4">
              {[
                { to: '/', icon: <Home />, label: 'Home' },
                { to: '/learn', icon: <BookOpen />, label: 'Learn' },
                { to: '/about', icon: <Info />, label: 'About' },
                { to: '/contact', icon: <Mail />, label: 'Contact' }
              ].map(({ to, icon, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="flex items-center space-x-1 p-2 rounded-lg
                           text-gray-700 dark:text-gray-200
                           hover:bg-gray-100 dark:hover:bg-gray-700
                           transition-colors"
                  aria-label={label}
                >
                  {React.cloneElement(icon, { className: 'h-6 w-6' })}
                  <span className="hidden md:inline">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;