import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Flashcards() {
  const navigate = useNavigate();

  const alphabet = [
    { letter: 'A', image: '/images/A.png' },
    { letter: 'B', image: '/images/B.png' },
    { letter: 'C', image: '/images/C.png' },
    { letter: 'D', image: '/images/D.png' },
    { letter: 'E', image: '/images/E.png' },
    { letter: 'F', image: '/images/F.png' },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % alphabet.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? alphabet.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flashcards-container">
      <h2 className="flashcards-title">Alphabet Flashcards</h2>
      <p className="flashcards-subtitle">Click to explore letters</p>

      <div className="card">
        <h3 className="letter">{alphabet[currentIndex].letter}</h3>
        <img
          src={alphabet[currentIndex].image}
          alt={alphabet[currentIndex].letter}
          className="letter-image"
        />
      </div>

      <div className="buttons">
        <button onClick={prevCard} className="nav-btn"> Previous</button>
        <button onClick={nextCard} className="nav-btn">Next</button>
        <button onClick={() => navigate('/alphabet')} className="nav-btn home-btn"> Back</button>
      </div>

      <style>{`
        .flashcards-container {
          background: linear-gradient(to right, #a8edea, #fed6e3);
          min-height: 100vh;
          padding: 40px;
          text-align: center;
          font-family: "Comic Sans MS", "Comic Neue", cursive;
        }
        .flashcards-title {
          font-size: 2.4rem;
        
          margin-bottom: 10px;
        }
        .flashcards-subtitle {
          font-size: 1.2rem;
          margin-bottom: 30px;
        }
        .card {
          background: #fff;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.2);
          display: inline-block;
          margin-bottom: 20px;
        }
        .letter {
          font-size: 4rem;
          font-weight: bold;
          color: #4a148c;
        }
        .letter-image {
          width: 150px;
          height: 150px;
          margin-top: 10px;
        }
        .buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }
        .nav-btn {
          background: #ffeb3b;
          border: none;
          border-radius: 10px;
          padding: 10px 15px;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .nav-btn:hover {
          transform: scale(1.05);
          background: #ffee58;
        }
        .home-btn {
          background: #4caf50;
          color: white;
        }
        .home-btn:hover {
          background: #66bb6a;
        }
        @media (max-width: 768px) {
          .letter {
            font-size: 3rem;
          }
          .letter-image {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
}

export default Flashcards;