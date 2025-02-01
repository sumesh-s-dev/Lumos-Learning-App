import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, Pause, RotateCcw, Volume2, ArrowLeft, ArrowRight } from 'lucide-react';
import LetterAnimation from '../components/LetterAnimation';
import DrawingCanvas from '../components/DrawingCanvas';
import SpeedControl from '../components/SpeedControl';
import { speakLetter } from '../utils/speech';
import { clearCanvas } from '../utils/canvas';

const LetterDetail = () => {
  const { letter = 'A' } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [drawProgress, setDrawProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handlePrevious = () => {
    const prevLetter = String.fromCharCode(letter.charCodeAt(0) - 1);
    if ((letter >= 'A' && letter <= 'Z' && prevLetter >= 'A') || (letter >= 'a' && letter <= 'z' && prevLetter >= 'a')) {
      navigate(`/letter/${prevLetter}`);
    }
  };

  const handleNext = () => {
    const nextLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
    if ((letter >= 'A' && letter <= 'Z' && nextLetter <= 'Z') || (letter >= 'a' && letter <= 'z' && nextLetter <= 'z')) {
      navigate(`/letter/${nextLetter}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-6xl font-bold text-blue-600">Letter {letter}</h1>
          <button
            onClick={() => speakLetter(letter)}
            className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
            aria-label="Play letter sound"
          >
            <Volume2 className="h-6 w-6 text-blue-600" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <LetterAnimation
            letter={letter}
            isPlaying={isPlaying}
            speed={speed}
            drawProgress={drawProgress}
          />

          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Practice Area</h2>
              <DrawingCanvas canvasRef={canvasRef} />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
              
              <button
                onClick={() => clearCanvas(canvasRef)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="h-5 w-5" />
                <span>Clear</span>
              </button>

              <SpeedControl speed={speed} onChange={setSpeed} />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={(letter === 'A' || letter === 'a')}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            disabled={(letter === 'Z' || letter === 'z')}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50"
          >
            <span>Next</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <footer className="mt-16 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Lumos Learn. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LetterDetail;
