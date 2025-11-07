import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function ChildDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const goToActivity = (path) => {
    navigate(path);
  };

  return (
    <div style={styles.dashboard}>
      <button onClick={logout} style={styles.logoutBtn}>🚪 Logout</button>

      <h2 style={styles.heading}>🎉 Hello, {user?.name || 'Little Star'}!</h2>
      <p style={styles.subheading}>
        You are {user?.age || '...'} year{user?.age !== '1' ? 's' : ''} old! Let’s learn & have fun 🎈
      </p>

      {/* Learning Section */}
      <div style={styles.learningSection}>
        <div style={styles.card} onClick={() => goToActivity('/alphabet')}>
          <img src="/assets/icons/alphabet.png" alt="Alphabets" style={styles.icon} />
          <p>🔠 Learn Alphabets</p>
        </div>

        <div style={styles.card} onClick={() => goToActivity('/numbers')}>
          <img src="/assets/icons/numbers.png" alt="Numbers" style={styles.icon} />
          <p>🔢 Play with Numbers</p>
        </div>

        <div style={styles.card} onClick={() => goToActivity('/drawing')}>
          <img src="/assets/icons/drawing.png" alt="Drawing & Coloring" style={styles.icon} />
          <p>🎨 Drawing & Coloring</p>
        </div>

        <div style={styles.card} onClick={() => goToActivity('/rhymes')}>
          <img src="/assets/icons/rhymes.png" alt="Rhymes & Songs" style={styles.icon} />
          <p>🎶 Rhymes & Songs</p>
        </div>
      </div>

      {/* Badges Section */}
      <div style={styles.badgesSection}>
        <h3 style={styles.subheadingTitle}>🏅 Your Badges</h3>
        <div style={styles.badgeList}>
          <span style={styles.badge}>⭐ Alphabet Champ</span>
          <span style={styles.badge}>🌈 Color Genius</span>
          <span style={styles.badge}>🔢 Number Master</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={styles.recentSection}>
        <h3 style={styles.subheadingTitle}>🕒 Last Played:</h3>
        <ul style={styles.recentList}>
          <li style={styles.recentItem}>🔠 Traced letter A</li>
          <li style={styles.recentItem}>🔢 Matched numbers 1–5</li>
          <li style={styles.recentItem}>🎨 Colored a cat drawing</li>
        </ul>
      </div>
    </div>
  );
}

// 🌈 Fun & Colorful Inline CSS
const styles = {
  dashboard: {
    background: 'linear-gradient(135deg, #a8edea, #fed6e3)',
    padding: '30px',
    maxWidth: '700px',
    margin: '40px auto',
    borderRadius: '25px',
    boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
    fontFamily: '"Comic Sans MS", "Comic Neue", cursive',
    color: '#333',
    textAlign: 'center',
    position: 'relative',
  },
  logoutBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    padding: '8px 15px',
    borderRadius: '12px',
    backgroundColor: '#FF7043',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  heading: {
    fontSize: '2rem',
    color: '#6A1B9A',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
    marginTop: '50px',
  },
  subheading: {
    fontSize: '1.1rem',
    color: '#333',
    marginBottom: '30px',
  },
  learningSection: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  card: {
    // background: 'linear-gradient(135deg, #FFD54F, #FFB74D)',
    background:'#DDA0DD',
    borderRadius: '18px',
    padding: '20px 15px',
    width: '140px',
    fontWeight: 'bold',
    boxShadow: '3px 3px 10px rgba(0,0,0,0.15)',
    cursor: 'pointer',
    color: '#fff',
    transition: 'transform 0.2s ease, box-shadow 0.3s ease',
  },
  icon: {
    width: '45px',
    height: '45px',
    marginBottom: '10px',
  },
  badgesSection: {
    background: 'rgba(255,255,255,0.8)',
    borderRadius: '20px',
    padding: '20px',
    marginBottom: '40px',
  },
  subheadingTitle: {
    fontSize: '1.3rem',
    color: '#4A148C',
    marginBottom: '15px',
  },
  badgeList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
  },
  badge: {
    // background: 'linear-gradient(135deg, #FFECB3, #FFF176)',
    background:'#FFD700',
    borderRadius: '25px',
    padding: '10px 18px',
    fontWeight: 'bold',
    color: '#5D4037',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  recentSection: {
    background: 'rgba(255,255,255,0.8)',
    borderRadius: '20px',
    padding: '20px',
  },
  recentList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  recentItem: {
    // background: 'linear-gradient(135deg, #FFF3E0, #FFE0B2)',
    background:'#D8BFD8',

    padding: '10px 15px',
    borderRadius: '15px',
    marginBottom: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
};

export default ChildDashboard;
