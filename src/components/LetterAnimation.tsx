import React from 'react';
import { motion } from 'framer-motion';

interface LetterAnimationProps {
  letter: string;
  isPlaying: boolean;
  speed: number;
  drawProgress: number;
}

const LetterAnimation = ({ letter, isPlaying, speed, drawProgress }: LetterAnimationProps) => {
  // Get SVG path for the letter
  const getLetterPath = (letter: string) => {
    const paths: { [key: string]: string } = {
      // Uppercase letters
      'A': 'M 20 80 L 50 20 L 80 80 M 30 50 L 70 50', // A
      'B': 'M 20 20 L 20 100 M 20 20 H 50 Q 70 20 70 40 T 50 60 H 20 M 20 60 H 50 Q 70 60 70 80 T 50 100 H 20', // B
      'C': 'M 70 30 Q 40 10 20 30 Q 10 50 20 70 Q 40 90 70 70', //C
      'D': 'M 20 20 L 20 80 M 20 20 H 50 Q 80 40 50 80 H 20', // D
      'E': 'M 20 20 L 20 80 M 20 20 H 70 M 20 50 H 50 M 20 80 H 70', // E
      'F': 'M 20 20 L 20 80 M 20 20 H 70 M 20 50 H 50', // F
      'G': 'M 70 40 Q 50 20 20 50 Q 20 80 50 80 Q 80 80 80 60 Q 70 60 55 60 M 55 60 H 65', // G
      'H': 'M 30 20 L 30 80 M 80 20 L 80 80 M 30 50 H 80', // H
      'I': 'M 40 20 V 80 M 30 20 H 50 M 30 80 H 50', // I
      'J': 'M 60 20 V 60 Q 60 80 40 80 Q 20 80 20 60', // J
      'K': 'M 20 20 L 20 80 M 20 50 L 70 20 M 20 50 L 70 80', // K
      'L': 'M 30 20 L 30 80 H 80', // L
      'M': 'M 20 80 V 20 L 40 50 L 60 20 V 80', // M
      'N': 'M 20 80 L 20 20 L 80 80 L 80 20', // N
      'O': 'M 30 20 Q 10 20, 10 40 Q 10 60, 30 60 Q 50 60, 50 40 Q 50 20, 30 20 Z', // O
      'P': 'M 20 80 V 20 H 60 Q 70 20 70 40 Q 70 50 60 50 H 18', // P
      'Q': 'M 30 40 Q 30 20 50 20 Q 70 20 70 40 Q 70 60 50 60 Q 30 60 30 40 M 60 50 L 80 70', // Q
      'R': 'M 20 20 L 20 80 M 20 20 H 50 Q 70 20 70 40 T 50 60 H 20 M 50 60 L 70 80', // R
      'S': 'M 80 30 C 80 10, 20 10, 20 30 C 20 50, 80 50, 80 70 C 80 90, 20 90, 20 70', // S
      'T': 'M 40 20 L 40 80 M 20 20 H 60', // T
      'U': 'M 20 20 L 20 60 Q 20 80 40 80 Q 60 80 60 60 L 60 20', // U
      'V': 'M 20 20 L 50 80 L 80 20', // V
      'W': 'M 20 20 L 30 80 L 40 60 L 50 80 L 60 20', // W
      'X': 'M 20 20 L 80 80 M 80 20 L 20 80', // X
      'Y': 'M 30 20 L 50 50 L 70 20 M 50 50 L 50 80', // Y
      'Z': 'M 10 20 L 80 20 L 10 80 L 80 80', // Z
      // Lowercase letters
      'a': 'M 70 50 Q 70 65 55 65 Q 40 65 40 50 Q 40 35 55 35 Q 70 35 70 50 L 70 65', //a
      'b': 'M 30 20 L 30 68 M 30 50 Q 30 65 45 65 Q 60 65 60 50 Q 60 35 45 35 Q 30 35 30 50', //b
      "c": "M 70 30 Q 50 10 20 30 Q 10 50 20 70 Q 50 90 70 70", // c
      'd': 'M 60 20 L 60 68 M 60 50 Q 60 65 45 65 Q 30 65 30 50 Q 30 35 45 35 Q 60 35 60 50', //d
      'e': 'M 60 52 Q 60 30 40 30 Q 20 30 20 50 Q 20 70 40 70 Q 60 70 60 60 M 40 50 H 30 60', //e
      "f": "M 45 20 Q 30 20 30 35 L 30 65 M 20 35 L 45 35", //f
      "g": "M 60 35 L 60 60 Q 60 80 40 80 Q 25 80 25 65 M 60 50 Q 60 65 45 65 Q 30 65 30 50 Q 30 35 45 35 Q 60 35 60 50", // g
      "h": "M 30 10 L 30 65 M 30 50 Q 30 35 45 35 Q 60 35 60 50 L 60 65", //h
      "i": "M 30 35 L 30 65 M 30 25 L 30 20", //i
      "j": "M 40 35 L 40 70 Q 40 80 30 80 Q 20 80 20 70 M 40 25 L 40 20", //j
      "k": "M 30 15 L 30 70 M 30 45 L 55 35 M 30 45 L 54 68", //k
      "l": "M 30 20 L 30 65", //l
      "m": "M 20 35 L 20 65 M 20 50 Q 20 35 35 35 Q 50 35 50 50 L 50 65 M 50 50 Q 50 35 65 35 Q 80 35 80 50 L 80 65", //m
      "n": "M 30 35 L 30 65 M 30 50 Q 30 35 45 35 Q 60 35 60 50 L 60 65", //m
      "o": "M 45 35 Q 30 35 30 50 Q 30 65 45 65 Q 60 65 60 50 Q 60 35 44 35", //0
      "p": "M 30 35 L 30 80 M 30 50 Q 30 65 45 65 Q 60 65 60 50 Q 60 35 45 35 Q 30 35 30 50", //p
      "q": "M 60 35 L 60 80 M 60 50 Q 60 65 45 65 Q 30 65 30 50 Q 30 35 45 35 Q 60 35 60 50", //q
      "r": "M 30 35 L 30 65 M 30 60 Q 30 35 45 35 Q 60 35 55 45", //r
      "s": "M 60 30 C 60 10, 20 10, 20 30 C 20 50, 60 50, 60 70 C 60 90, 20 90, 20 70", // s
      "t": "M 30 20 L 30 60 Q 30 65 35 65 Q 45 65 45 60 M 20 35 L 45 35", //t
      'u': 'M 30 35 L 30 55 Q 30 65 45 65 Q 60 65 60 50 L 60 35 L 60 67', // u 
      "v": "M 30 35 L 45 60 L 60 35", //v
      "w": "M 20 35 L 35 65 L 50 35 L 65 65 L 80 35", //w
      "x": "M 30 35 L 60 65 M 30 65 L 60 35", //x
      "y": "M 30 35 L 30 55 Q 30 65 45 65 Q 60 65 60 50 L 60 35 M 60 53 L 60 75 Q 60 85 45 85 Q 30 85 30 75",//y
      "z": "M 30 35 L 60 35 L 30 65 L 60 65", // z

      // Add more letters as needed...
    };
    return paths[letter] || paths[letter.toUpperCase()] || paths['A']; // Fallback to uppercase if lowercase not found
  };

  return (
    <div className="relative aspect-square bg-gray-50 rounded-lg">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isPlaying ? 1 : drawProgress }}
        transition={{ duration: 2 / speed, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-4"
        >
          <motion.path
            d={getLetterPath(letter)}
            fill="none"
            stroke="#3B82F6"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isPlaying ? 1 : drawProgress }}
            transition={{ duration: 2 / speed, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default LetterAnimation;