import React from 'react';
import { BookOpen, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        About Lumos Learn
      </h1>
      
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <p className="text-xl text-gray-700 mb-6">
          Lumos Learn is specially designed to help students with cerebral palsy learn the English alphabet
          in an engaging and accessible way. Our interactive tools and visual guides make learning fun
          and effective!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: <BookOpen className="h-12 w-12" />,
              title: 'Interactive Learning',
              description: 'Step-by-step visual guides and animations help students learn at their own pace'
            },
            {
              icon: <Users className="h-12 w-12" />,
              title: 'Accessibility First',
              description: 'Designed with special needs in mind, featuring large buttons and clear navigation'
            },
            {
              icon: <Heart className="h-12 w-12" />,
              title: 'Supportive Environment',
              description: "Created with love and care to support every student's learning journey"
            }
          ].map(({ icon, title, description }) => (
            <div key={title} className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-blue-500 flex justify-center mb-4">{icon}</div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
            {/* Copyright Footer */}
     <footer className="mt-16 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Lumos Learn. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;