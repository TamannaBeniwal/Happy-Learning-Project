import React, { useMemo, useState } from 'react';

function CountingBeads() {
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 5) + 1);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('Drag beads to match the number!');

  const beads = useMemo(() => Array.from({ length: 10 }, (_, i) => i), []);

  const resetRound = () => {
    setTarget(Math.floor(Math.random() * 5) + 1);
    setCount(0);
    setFeedback('New number! Move beads to match.');
  };

  const handleAdd = () => {
    if (count < 10) setCount(count + 1);
  };

  const handleRemove = () => {
    if (count > 0) setCount(count - 1);
  };

  const check = () => {
    if (count === target) {
      setScore(score + 1);
      setFeedback('Great job! ✅');
      setTimeout(resetRound, 800);
    } else if (count < target) {
      setFeedback('Add more beads ➕');
    } else {
      setFeedback('Too many beads ➖');
    }
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold">Counting Beads</h2>
      <p className="text-gray-600 mb-2">Make the beads match the number.</p>
      <div className="font-semibold mb-2">Score: {score}</div>
      <div className="text-xl mb-3">Target: {target}</div>

      <div className="flex justify-center gap-1.5 flex-wrap my-3">
        {beads.slice(0, count).map((b) => (
          <span key={b} className="inline-block w-7 h-7 rounded-full bg-gradient-to-br from-rose-500 to-rose-300 shadow" />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mb-3">
        <button onClick={handleRemove} aria-label="remove-bead" className="w-9 h-9 rounded-full border border-gray-200 hover:bg-gray-50">-</button>
        <div className="min-w-10 text-lg">{count}</div>
        <button onClick={handleAdd} aria-label="add-bead" className="w-9 h-9 rounded-full border border-gray-200 hover:bg-gray-50">+</button>
      </div>

      <div className="flex justify-center gap-2 mt-1">
        <button onClick={check} className="px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">Check</button>
        <button onClick={resetRound} className="px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">New Number</button>
      </div>

      <div className="mt-3 min-h-5">{feedback}</div>
    </div>
  );
}

export default CountingBeads;


