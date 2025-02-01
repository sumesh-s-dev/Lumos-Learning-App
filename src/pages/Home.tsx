import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Info, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">
        Welcome to Lumos Learn!
      </h1>
      
      <p className="text-xl text-gray-700 mb-12">
        Let's learn the English alphabet together in a fun and interactive way!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            to: '/learn',
            icon: <BookOpen className="h-12 w-12" />,
            title: 'Start Learning',
            description: 'Begin your alphabet journey'
          },
          {
            to: '/about',
            icon: <Info className="h-12 w-12" />,
            title: 'About Us',
            description: 'Learn more about our mission'
          },
          {
            to: '/contact',
            icon: <Mail className="h-12 w-12" />,
            title: 'Contact',
            description: 'Get in touch with us'
          }
        ].map(({ to, icon, title, description }) => (
          <Link
            key={to}
            to={to}
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            aria-label={title}
          >
            <div className="text-blue-500 mb-4">{icon}</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </Link>
        ))}
      </div>
            {/* Copyright Footer */}
     <footer className="mt-16 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Lumos Learn. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;