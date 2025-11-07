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
  const [message, setMessage] = useState('Find the matching number!');

  const pool = useMemo(() => [1, 2, 3, 4, 5, 1, 2, 3, 4, 5], []);

  useEffect(() => {
    const newTiles = shuffle(pool).map((val, idx) => ({ id: idx, val }));
    setTiles(newTiles);
  }, [pool, target]);

  const nextRound = () => {
    setTarget(Math.floor(Math.random() * 5) + 1);
    setMessage('Find the matching number!');
  };

  const pickTile = (tile) => {
    if (tile.val === target) {
      setScore(score + 1);
      setMessage('Yay! Correct ✅');
      setTimeout(nextRound, 800);
    } else if (tile.val < target) {
      setMessage('Look for a bigger number ⬆️');
    } else {
      setMessage('Try a smaller number ⬇️');
    }
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold">Number Hunt</h2>
      <div className="font-semibold mb-2">Score: {score}</div>
      <div className="text-lg my-2">Find: {target}</div>
      <div className="grid grid-cols-5 gap-2 justify-center mt-3">
        {tiles.map((t) => (
          <button key={t.id} onClick={() => pickTile(t)} className="h-15 w-15 text-xl rounded-lg border border-gray-200 bg-white shadow hover:bg-indigo-50" aria-label={`tile-${t.id}`}>
            {t.val}
          </button>
        ))}
      </div>
      <div className="mt-3 min-h-5">{message}</div>
      <button onClick={nextRound} className="mt-3 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">New Round</button>
    </div>
  );
}

export default NumberHunt;


