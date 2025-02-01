export const clearCanvas = (canvasRef: React.RefObject<HTMLCanvasElement>): void => {
  if (!canvasRef.current) {
    console.error("Canvas reference is null or undefined.");
    return;
  }

  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    console.error("Failed to get 2D context from canvas.");
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
};
