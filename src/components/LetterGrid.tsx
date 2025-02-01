import React from 'react';
import { Link } from 'react-router-dom';

interface LetterGridProps {
  letters: string[];
  title: string;
}

const LetterGrid = ({ letters, title }: LetterGridProps) => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {letters.map((letter) => (
          <Link
            key={letter}
            to={`/letter/${letter}`}
            className="letter-card aspect-square flex items-center justify-center text-5xl font-bold"
            aria-label={`Learn letter ${letter}`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-indigo-600">
              {letter}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LetterGrid;