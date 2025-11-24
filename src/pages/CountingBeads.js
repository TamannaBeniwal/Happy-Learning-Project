import React, { useMemo, useState } from 'react';

function CountingBeads() {
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 5) + 1);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('Drag beads!');

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
      setFeedback('Great job! ');
      setTimeout(resetRound, 800);
    } else if (count < target) {
      setFeedback('Add more beads ');
    } else {
      setFeedback('Too many beads ');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-200">
      <div className="w-full max-w-3xl p-10 bg-blue-100 rounded-3xl shadow-2xl text-center font-sans">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-4"> Counting Beads</h2>
        <p className="text-gray-700 text-lg mb-6">Make the beads match the target</p>

        <div className="font-semibold text-xl mb-3">Score: {score}</div>
        <div className="text-2xl mb-6 font-medium">Target: {target}</div>

      
        <div className="flex justify-center flex-wrap gap-3 mb-6">
          {beads.slice(0, count).map((b) => (
            <span
              key={b}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-300 shadow-lg transform transition-transform duration-200 hover:scale-125"
            />
          ))}
        </div>

      
        <div className="flex justify-center items-center gap-4 mb-6">
          <button
            onClick={handleRemove}
            aria-label="remove-bead"
            className="w-12 h-12 rounded-full border border-gray-400 hover:bg-gray-100 transition-colors text-xl font-bold"
          >
            -
          </button>
          <div className="w-12 text-2xl font-bold">{count}</div>
          <button
            onClick={handleAdd}
            aria-label="add-bead"
            className="w-12 h-12 rounded-full border border-gray-400 hover:bg-gray-100 transition-colors text-xl font-bold"
          >
            +
          </button>
        </div>

        
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={check}
            className="px-6 py-3 bg-indigo-500 text-white rounded-2xl shadow-lg hover:bg-indigo-600 transition-colors font-semibold"
          >
            Check
          </button>
          <button
            onClick={resetRound}
            className="px-6 py-3 border border-gray-400 rounded-2xl shadow-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            New Number
          </button>
        </div>

      
        <div className="mt-4 min-h-[1.5rem] text-gray-800 font-medium text-lg">{feedback}</div>
      </div>
    </div>
  );
}

export default CountingBeads;