import React from 'react';
import { useAuth } from './AuthContext';
import './ParentDashboard.css';

function ParentDashboard() {
  const { parentInfo, childInfo, logout } = useAuth();

  const progress = {
    lessonsCompleted: 12,
    totalLessons: 20,
    badgesEarned: 5,
  };

  return (
    <div className="parent-dashboard">
      <button onClick={logout} className="logout-btn">Logout</button>

      <h2>👩‍👧 Welcome, {parentInfo?.name || 'Parent'}!</h2>

      <div className="info-box">
        <h3>👶 Child Details</h3>
        <p><strong>Name:</strong> {childInfo?.name || 'N/A'}</p>
        <p><strong>Age:</strong> {childInfo?.age || 'N/A'} years</p>
      </div>

      <div className="info-box">
        <h3>📈 Progress Report</h3>
        <p><strong>Lessons Completed:</strong> {progress.lessonsCompleted} / {progress.totalLessons}</p>
        <p><strong>Badges Earned:</strong> 🏅 {progress.badgesEarned}</p>
      </div>

      <div className="info-box">
        <h3>📚 Learning Resources</h3>
        <ul>
          <li>✨ Early Learning Tips</li>
          <li>🎨 Creative Activities</li>
          <li>📖 Storytelling Techniques</li>
        </ul>
      </div>

      <div className="info-box">
        <h3>📝 Feedback & Suggestions</h3>
        <textarea placeholder="Write your feedback here..." rows="4" style={{ width: '100%', padding: '10px', fontSize: '16px' }}></textarea>
        <button className="feedback-btn">Submit Feedback</button>
      </div>
    </div>
  );
}

export default ParentDashboard;
