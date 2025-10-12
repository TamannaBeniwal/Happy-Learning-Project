import React from 'react';
import { useNavigate } from 'react-router-dom';
// Tailwind styles applied via classNames

function NumbersActivity() {
  const navigate = useNavigate();

  const go = (path) => navigate(path);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Play with Numbers</h2>
      <p className="text-gray-600 mb-2">Choose a game to learn counting and recognizing numbers.</p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 mt-4">
        <div className="border border-gray-200 rounded-xl p-4 text-center cursor-pointer bg-white shadow hover:bg-gray-50" onClick={() => go('/numbers/counting-beads')}>
          <h3 className="font-semibold">Counting Beads</h3>
          <p className="text-gray-600">Move beads to match the number (1–5)</p>
          <button className="mt-2 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">Start</button>
        </div>

        <div className="border border-gray-200 rounded-xl p-4 text-center cursor-pointer bg-white shadow hover:bg-gray-50" onClick={() => go('/numbers/number-hunt')}>
          <h3 className="font-semibold">Number Hunt</h3>
          <p className="text-gray-600">Find the matching number in a grid</p>
          <button className="mt-2 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">Start</button>
        </div>
      </div>

      <div className="mt-5">
        <button onClick={() => navigate(-1)} className="px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">Back</button>
      </div>
    </div>
  );
}

export default NumbersActivity;
