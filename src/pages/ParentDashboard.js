import React, { useState } from 'react';
import { useAuth } from './AuthContext';

function ParentDashboard() {
  const { parentInfo, childInfo, logout } = useAuth();
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [emoji, setEmoji] = useState('');

  const progress = {
    lessonsCompleted: 12,
    totalLessons: 20,
    badgesEarned: 5,
  };

  const handleFeedbackSubmit = () => {
    if (feedback.trim() || rating || emoji) {
      alert(`🎉 Thank you for your feedback, ${parentInfo?.name || 'Parent'}!`);
      setFeedback('');
      setRating(0);
      setEmoji('');
    }
  };

  return (
    <div className="dashboard-container">
      <button className="logout-btn" onClick={logout}>
        🚪 Logout
      </button>

      <h2 className="heading">👩‍👧 Welcome, {parentInfo?.name || 'Parent'}!</h2>

      {/* Child Info */}
      <div className="info-box child-info">
        <h3 className="title">👶 Child Details</h3>
        <p><strong>Name:</strong> {childInfo?.name || 'N/A'}</p>
        <p><strong>Age:</strong> {childInfo?.age || 'N/A'} years</p>
      </div>

      {/* Progress Report */}
      <div className="info-box progress-info">
        <h3 className="title">📈 Progress Report</h3>
        <p><strong>Lessons Completed:</strong> {progress.lessonsCompleted} / {progress.totalLessons}</p>
        <p><strong>Badges Earned:</strong> 🏅 {progress.badgesEarned}</p>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(progress.lessonsCompleted / progress.totalLessons) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Learning Resources */}
      <div className="info-box resource-info">
        <h3 className="title">📚 Learning Resources</h3>
        <ul>
          {['✨ Early Learning Tips', '🎨 Creative Activities', '📖 Storytelling Techniques'].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Feedback Section */}
      <div className="info-box feedback-box">
        <h3 className="title">📝 Feedback & Suggestions</h3>

        {/* Emoji Selector */}
        <div className="emoji-select">
          {['😊', '🤩', '😐', '😔', '❤️'].map((em, idx) => (
            <span
              key={idx}
              className={`emoji ${emoji === em ? 'selected' : ''}`}
              onClick={() => setEmoji(em)}
            >
              {em}
            </span>
          ))}
        </div>

        

        {/* Feedback Text */}
        <textarea
          placeholder="Write your feedback here..."
          rows="4"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>

        <button className="feedback-btn" onClick={handleFeedbackSubmit}>
          🌟 Submit Feedback
        </button>
      </div>

      {/* Decorative background bubbles */}
      <div className="bubbles">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="bubble"></span>
        ))}
      </div>

      {/* Inline CSS for simplicity */}
      <style>{`
        .dashboard-container {
          max-width: 780px;
          margin: 50px auto;
          padding: 30px;
          border-radius: 20px;
          background: linear-gradient(135deg, #a8edea, #fed6e3);
          
          font-family: "Poppins", "Comic Sans MS", cursive;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .logout-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #f78a1d;
          border: none;
          color: #fff;
          padding: 10px 18px;
          border-radius: 12px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          transition: background 0.3s, transform 0.3s;
        }

        .logout-btn:hover {
          background: #f4a742;
          transform: scale(1.05);
        }

        .heading {
          text-align: center;
          color: #ff69b4;
          font-size: 30px;
          margin-bottom: 30px;
        }

        .info-box {
          background: rgba(255, 255, 255, 0.9);
          padding: 20px;
          border-radius: 16px;
          margin-bottom: 20px;
          border: 3px dashed #90ee90;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .info-box:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        }

        .title {
          color: #4682b4;
          margin-bottom: 12px;
          font-size: 20px;
        }

        .child-info { border-color: #90ee90; }
        .progress-info { border-color: #ffd700; }
        .resource-info { border-color: #ffb6c1; }

        ul {
          padding-left: 25px;
          list-style: none;
        }

        li {
          margin: 8px 0;
          transition: transform 0.2s;
        }

        li:hover {
          transform: scale(1.05);
        }

        .progress-bar {
          background: #eee;
          border-radius: 10px;
          margin-top: 10px;
          overflow: hidden;
          height: 15px;
        }

        .progress-fill {
          background: linear-gradient(90deg, #90ee90, #32cd32);
          height: 100%;
          transition: width 0.6s ease;
        }

        .feedback-box textarea {
          width: 100%;
          border: 2px solid #ffb6c1;
          border-radius: 10px;
          padding: 10px;
          font-size: 15px;
          resize: none;
          margin-top: 10px;
          transition: box-shadow 0.2s;
        }

        .feedback-box textarea:focus {
          outline: none;
          box-shadow: 0 0 5px #ff69b4;
        }

        .feedback-btn {
          margin-top: 12px;
          padding: 10px 20px;
          background: #32cd32;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
          transition: transform 0.3s, background 0.3s;
        }

        .feedback-btn:hover {
          background: #28a428;
          transform: scale(1.05);
        }

        .emoji-select {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 10px;
          font-size: 26px;
        }

        .emoji {
          cursor: pointer;
          transition: transform 0.2s;
        }

        .emoji:hover {
          transform: scale(1.3);
        }

        .emoji.selected {
          transform: scale(1.4);
          filter: drop-shadow(0 0 5px #ff69b4);
        }

      
        .bubbles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
        }

        .bubble {
          position: absolute;
          bottom: -50px;
          background: rgba(173, 216, 230, 0.4);
          border-radius: 50%;
          animation: rise 10s infinite ease-in;
        }

        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-800px) scale(1.2);
            opacity: 0;
          }
        }

        .bubble:nth-child(1) { width: 40px; height: 40px; left: 10%; animation-duration: 8s; }
        .bubble:nth-child(2) { width: 60px; height: 60px; left: 30%; animation-duration: 10s; }
        .bubble:nth-child(3) { width: 30px; height: 30px; left: 50%; animation-duration: 12s; }
        .bubble:nth-child(4) { width: 50px; height: 50px; left: 70%; animation-duration: 9s; }
        .bubble:nth-child(5) { width: 40px; height: 40px; left: 85%; animation-duration: 11s; }
      `}</style>
    </div>
  );
}

export default ParentDashboard;
