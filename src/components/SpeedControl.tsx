import React from 'react';

interface SpeedControlProps {
  speed: number;
  onChange: (speed: number) => void;
}

const SpeedControl = ({ speed, onChange }: SpeedControlProps) => {
  return (
    <select
      value={speed}
      onChange={(e) => onChange(Number(e.target.value))}
      className="px-4 py-2 rounded-lg border-2 border-gray-200"
    >
      <option value={0.5}>Slow</option>
      <option value={1}>Normal</option>
      <option value={2}>Fast</option>
    </select>
  );
};

export default SpeedControl;