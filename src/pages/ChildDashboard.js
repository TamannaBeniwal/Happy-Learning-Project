import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom'; // 👈 Required for navigation
import './ChildDashboard.css';

function ChildDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate(); // 👈 Hook for navigating programmatically

  // 👇 Handler for clicking a learning card
  const goToActivity = (path) => {
    navigate(path);
  };

  return (
    <div className="child-dashboard">
      <button
        onClick={logout}
        className="logout-btn"
      >
        Logout
      </button>

      <h2>🎉 Hello, {user?.name || 'Little Star'}!</h2>
      <p>
        You are {user?.age || '...'} year{user?.age !== '1' ? 's' : ''} old! Let's learn & have fun 🎈
      </p>

      {/* Learning Cards with navigation */}
      <div className="learning-section">
        <div className="card" onClick={() => goToActivity('/alphabet')}>
          <img src="/assets/icons/alphabet.png" alt="Alphabets" className="icon" />
          <p>🔠 Learn Alphabets</p>
        </div>

        <div className="card" onClick={() => goToActivity('/numbers')}>
          <img src="/assets/icons/numbers.png" alt="Numbers" className="icon" />
          <p>🔢 Play with Numbers</p>
        </div>

        <div className="card" onClick={() => goToActivity('/drawing')}>
          <img src="/assets/icons/drawing.png" alt="Drawing & Coloring" className="icon" />
          <p>🎨 Drawing & Coloring</p>
        </div>

        <div className="card" onClick={() => goToActivity('/rhymes')}>
          <img src="/assets/icons/rhymes.png" alt="Rhymes & Songs" className="icon" />
          <p>🎶 Rhymes & Songs</p>
        </div>
      </div>

      {/* Badges Section */}
      <div className="badges-section">
        <h3>🏅 Your Badges</h3>
        <div className="badge-list">
          <span className="badge">⭐ Alphabet Champ</span>
          <span className="badge">🌈 Color Genius</span>
          <span className="badge">🔢 Number Master</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h3>🕒 Last Played:</h3>
        <ul>
          <li>🔠 Traced letter A</li>
          <li>🔢 Matched numbers 1–5</li>
          <li>🎨 Colored a cat drawing</li>
        </ul>
      </div>
    </div>
  );
}

export default ChildDashboard;
