import React from 'react';

interface DrawingCanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const DrawingCanvas = ({ canvasRef }: DrawingCanvasProps) => {
  const [isDrawing, setIsDrawing] = React.useState(false);
  const [lastPoint, setLastPoint] = React.useState({ x: 0, y: 0 });

  const getPointFromEvent = (
    event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    let clientX = 0,
      clientY = 0;

    if ('clientX' in event) {
      clientX = event.clientX;
      clientY = event.clientY;
    } else if (event.touches && event.touches[0]) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const handlePointerDown = (
    event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    setIsDrawing(true);
    const point = getPointFromEvent(event);
    setLastPoint(point);
  };

  const handlePointerMove = (
    event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (!isDrawing || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const point = getPointFromEvent(event);

    ctx.beginPath();
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(point.x, point.y);
    ctx.strokeStyle = '#3B82F6';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.stroke();

    setLastPoint(point);
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      className="w-full aspect-square bg-gray-50 rounded-lg border-2 border-gray-200"
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
    />
  );
};

export default DrawingCanvas;
