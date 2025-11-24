import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DrawAlphabet() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const navigate = useNavigate();

  const alphabet = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
  ];

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#4a148c';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
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

  const nextLetter = () => {
    setCurrentLetterIndex((prev) => (prev + 1) % alphabet.length);
    clearCanvas();
  };

  const prevLetter = () => {
    setCurrentLetterIndex((prev) =>
      prev === 0 ? alphabet.length - 1 : prev - 1
    );
    clearCanvas();
  };

  return (
    <div className="draw-container">
      <h2>Draw Alphabet Fun</h2>
      <p>Draw the letter: <strong>{alphabet[currentLetterIndex]}</strong></p>

      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={(e) => startDrawing({nativeEvent: {offsetX: e.touches[0].clientX - e.target.offsetLeft, offsetY: e.touches[0].clientY - e.target.offsetTop}})}
        onTouchMove={(e) => draw({nativeEvent: {offsetX: e.touches[0].clientX - e.target.offsetLeft, offsetY: e.touches[0].clientY - e.target.offsetTop}})}
        onTouchEnd={stopDrawing}
        style={{border: '3px solid #4a148c', borderRadius: '15px',display: 'block',margin: '20px auto', }}
      />
   

      <div className="buttons">
        <button onClick={prevLetter}> Previous</button>
        <button onClick={clearCanvas}> Clear</button>
        <button onClick={nextLetter}>Next </button>
        <button onClick={() => navigate('/alphabet')}> Back</button>
      </div>

      <style>{`
        .draw-container {
          background: linear-gradient(to right, #a8edea, #fed6e3);
          min-height: 100vh;
          padding: 40px;
          text-align: center;
          font-family: "Comic Sans MS", "Comic Neue", cursive;
        }
        h2 {
          font-size: 2.4rem;
          margin-bottom: 10px;
        }
        p {
          font-size: 1.3rem;
          margin-bottom: 20px;
        }
        canvas {
          touch-action: none;
          margin-bottom: 20px;
        }
        .buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }
        button {
          background: #ffeb3b;
          border: none;
          border-radius: 10px;
          padding: 10px 15px;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        button:hover {
          transform: scale(1.05);
          background: #ffee58;
        }
      `}</style>
    </div>
  );
}

export default DrawAlphabet;