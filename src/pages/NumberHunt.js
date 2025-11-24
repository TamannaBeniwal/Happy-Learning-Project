import React, { useEffect, useMemo, useState } from 'react';

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function NumberHunt() {
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 5) + 1);
  const [tiles, setTiles] = useState([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Find the matching number');

  const pool = useMemo(() => [1, 2, 3, 4, 5, 1, 2, 3, 4, 5], []);

  useEffect(() => {
    const newTiles = shuffle(pool).map((val, idx) => ({ id: idx, val }));
    setTiles(newTiles);
  }, [pool, target]);

  const nextRound = () => {
    setTarget(Math.floor(Math.random() * 5) + 1);
    setMessage('Find the matching number');
  };

  const pickTile = (tile) => {
    if (tile.val === target) {
      setScore(score + 1);
      setMessage('Correct ');
      setTimeout(nextRound, 800);
    } else if (tile.val < target) {
      setMessage('Look for a bigger number ⬆');
    } else {
      setMessage('Try a smaller number ⬇');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-pink-100 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-3">Number Hunt</h2>
        <div className="font-semibold mb-2 text-lg">Score: {score}</div>
        <div className="text-xl mb-4">Find: <span className="font-bold text-pink-500">{target}</span></div>

        <div className="grid grid-cols-5 gap-3 justify-center mb-4">
          {tiles.map((t) => (
            <button
              key={t.id}
              onClick={() => pickTile(t)}
              className="h-16 w-16 text-xl font-bold rounded-xl border-2 border-indigo-300 bg-gradient-to-br from-indigo-200 to-indigo-100 shadow-lg hover:scale-105 transition-transform"
              
            >
              {t.val}
            </button>
          ))}
        </div>

        <div className="mt-3 min-h-[1.25rem] text-purple-700 font-medium">{message}</div>

        <button
          onClick={nextRound}
          className="mt-4 px-4 py-2 rounded-xl border-2 border-indigo-300 bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-600 transition-colors"
        >
          New Round
        </button>
      </div>
    </div>
  );
}

export default NumberHunt;