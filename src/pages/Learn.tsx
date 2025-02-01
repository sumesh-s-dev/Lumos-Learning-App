import React, { useState } from 'react';
import LetterGrid from '../components/LetterGrid';
import { LETTERS } from '../utils/letters';
import { BookOpen } from 'lucide-react';

const Learn = () => {
  const [activeSection, setActiveSection] = useState<'uppercase' | 'lowercase'>('uppercase');

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center space-x-3 mb-4">
          <BookOpen className="w-10 h-10 text-purple-600" />
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Learn Your Letters
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose between uppercase and lowercase letters to begin your learning journey
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
        <button
          onClick={() => setActiveSection('uppercase')}
          className={`nav-button ${
            activeSection === 'uppercase' ? 'nav-button-active' : 'nav-button-inactive'
          }`}
          aria-pressed={activeSection === 'uppercase'}
        >
          Uppercase Letters
        </button>
        <button
          onClick={() => setActiveSection('lowercase')}
          className={`nav-button ${
            activeSection === 'lowercase' ? 'nav-button-active' : 'nav-button-inactive'
          }`}
          aria-pressed={activeSection === 'lowercase'}
        >
          Lowercase Letters
        </button>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
        <LetterGrid 
          letters={activeSection === 'uppercase' ? LETTERS.uppercase : LETTERS.lowercase}
          title={activeSection === 'uppercase' ? 'Uppercase Letters' : 'Lowercase Letters'}
        />
      </div>
            {/* Copyright Footer */}
     <footer className="mt-16 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Lumos Learn. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Learn;