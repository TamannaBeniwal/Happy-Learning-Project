import React, { useRef, useState, useEffect } from 'react';

const COLORS = ['#ff4081', '#2196f3', '#4caf50', '#ffeb3b', '#ff9800', '#000000'];

function FreeDrawing() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [brushSize, setBrushSize] = useState(5);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.6;
    const ctx = canvas.getContext('2d');
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = selectedColor;
    ctx.lineWidth = brushSize;
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start px-4 py-10 bg-gradient-to-br from-yellow-100 via-amber-100 to-pink-100"
      style={{ fontFamily: "'Comic Sans MS','Comic Neue',cursive" }}
    >
      <h1 className="text-3xl font-extrabold text-pink-500 mb-2"> Free Drawing</h1>
      <p className="text-center text-gray-600 mb-6">
        Pick colors and draw anything you like.
      </p>

    
      <div className="flex justify-center gap-3 mb-4">
        {COLORS.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            style={{ backgroundColor: color }}
            className={`w-10 h-10 rounded-full border-4 ${
              selectedColor === color ? 'border-black scale-110' : 'border-white shadow'
            } transition-transform`}
          />
        ))}
      </div>

      
      <div className="flex justify-center items-center gap-4 mb-4">
        <label className="text-gray-700">Brush Size:</label>
        <input
          type="range"
          min="1"
          max="20"
          value={brushSize}
          onChange={(e) => setBrushSize(e.target.value)}
          className="w-48"
        />
        <span>{brushSize}px</span>
      </div>

  
      <canvas
        ref={canvasRef}
        className="border-4 border-pink-200 rounded-2xl shadow-lg"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />

    
      <button
        onClick={clearCanvas}
        className="mt-6 px-6 py-2 bg-pink-500 text-white font-bold rounded-xl shadow-lg hover:bg-pink-600 transition"
      >
        Clear Canvas
      </button>
    </div>
  );
}

export default FreeDrawing;
