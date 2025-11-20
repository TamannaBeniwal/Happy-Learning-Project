import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './ChildDashboard.css';

function ChildDashboard() {
  const { user, logout: localLogout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const goToActivity = (path) => {
    navigate(path);
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || 'Logout successful.');
        localLogout(); 
        navigate('/login');
      } else {
        alert(`Error: ${data.message || 'Logout failed'}`);
      }
    } catch (error) {
      console.error(error);
      alert('Logout failed. Check console for details.');
    }
    setLoading(false);
  };

  return (
    <div className="child-dashboard">
      <button
        onClick={handleLogout}
        className="logout-btn"
        disabled={loading}
      >
        {loading ? 'Logging out...' : 'Logout'}
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
