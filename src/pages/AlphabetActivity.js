import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function AlphabetActivity() {
  const navigate = useNavigate();

  const teachers = [
    { id: 1, name: 'Ms. Ella Verma', experience: '2 years', style: 'Interactive Songs & Games' },
    { id: 2, name: 'Mr. Mohit Singh', experience: '3 years', style: 'Story-Based Learning' },
    { id: 3, name: 'Mrs. Shubhi Panwar', experience: '2 years', style: 'Visual & Creative Activities' },
  ];

  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleSelect = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const activities = [
    {
      id: 1,
      title: ' Alphabet Flashcards',
      description: 'Learn letters with colorful flashcards!',
      path: '/alphabet/flashcards',
    },
    {
      id: 2,
      title: ' Letter Drawing Fun',
      description: 'Draw and practice each alphabet creatively!',
      path: '/alphabet/drawing',
    },
  ];

  const handleActivityClick = (activity) => {
    navigate(activity.path);
  };

  return (
    <div className="alphabet-container">
      <h2 className="alphabet-title">Alphabet Learning Adventure </h2>
      <p className="alphabet-subtitle">Let’s learn the alphabets together with your favorite teacher!</p>

      {/* Teacher Section */}
      <div className="teacher-section">
        <h3 className="section-title"> Choose Your Alphabet Teacher (Ages 0–7):</h3>
        <div className="teacher-list">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              onClick={() => handleSelect(teacher)}
              className={teacher-card ${selectedTeacher?.id === teacher.id ? 'selected' : ''}}
            >
              <h4 className="teacher-name">{teacher.name}</h4>
              <p className="teacher-info"> Experience: {teacher.experience}</p>
              <p className="teacher-info"> Style: {teacher.style}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Teacher */}
      {selectedTeacher && (
        <div className="selected-box">
          <h3 className="selected-title">You chose:</h3>
          <p className="selected-name">{selectedTeacher.name}</p>
          <p className="selected-info">Experience: {selectedTeacher.experience}</p>
          <p className="selected-info">Teaching Style: {selectedTeacher.style}</p>
          <p className="start-text">
             Let start learning with <strong>{selectedTeacher.name.split(' ')[0]}</strong>!
          </p>
        </div>
      )}

      {/* Activities Section */}
      <div className="activity-section">
        <h3 className="section-title"> Choose Your Activity:</h3>
        <div className="activity-list">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="activity-card"
              onClick={() => handleActivityClick(activity)}
            >
              <h4 className="activity-title">{activity.title}</h4>
              <p className="activity-desc">{activity.description}</p>
              <button className="start-btn">Start </button>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        .alphabet-container {
          background: linear-gradient(to right, #a8edea, #fed6e3);
          min-height: 100vh;
          padding: 40px;
          font-family: "Comic Sans MS", "Comic Neue", cursive;
          text-align: center;
          color: #333;
        }
        .alphabet-title {
          font-size: 2.5rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
          margin-bottom: 10px;
        }
        .alphabet-subtitle {
          font-size: 1.2rem;
          margin-bottom: 25px;
        }
        .section-title {
          font-size: 1.5rem;
          margin-bottom: 20px;
        }
        .teacher-section {
          background: rgba(255,255,255,0.85);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          margin-bottom: 30px;
        }
        .teacher-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .teacher-card {
          background: linear-gradient(135deg, #ffecb3, #ffb74d);
          border-radius: 15px;
          width: 200px;
          padding: 15px;
          box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          // color: #333;
        }
        .teacher-card.selected {
          border: 3px solid #ffd700;
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
        .teacher-card:hover {
          transform: scale(1.03);
        }
        .teacher-name {
          font-size: 1.1rem;
          font-weight: bold;
          color: #fff;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
        }
        .teacher-info {
          color: #fff;
          font-size: 0.9rem;
        }
        .selected-box {
          background: linear-gradient(135deg, #81c784, #4caf50);
          color: #fff;
          border-radius: 15px;
          padding: 20px;
          max-width: 400px;
          margin: 0 auto 30px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.2);
          transition: all 0.3s ease-in-out;
        }
        .selected-title {
          font-size: 1.4rem;
          margin-bottom: 8px;
        }
        .selected-name {
          font-size: 1.3rem;
          font-weight: bold;
        }
        .selected-info {
          font-size: 1rem;
          margin: 4px 0;
        }
        .start-text {
          margin-top: 10px;
          font-size: 1.1rem;
          background-color: rgba(255,255,255,0.2);
          border-radius: 10px;
          padding: 8px;
        }
        .activity-section {
          background: rgba(255,255,255,0.9);
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .activity-list {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .activity-card {
          background: linear-gradient(135deg, #64b5f6, #2196f3);
          border-radius: 15px;
          padding: 15px;
          width: 230px;
          color: #fff;
          box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .activity-card:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(0,0,0,0.3);
        }
        .activity-title {
          font-size: 1.1rem;
          margin-bottom: 5px;
          font-weight: bold;
        }
        .activity-desc {
          font-size: 0.95rem;
          margin-bottom: 10px;
        }
        .start-btn {
          background: #ffeb3b;
          border: none;
          border-radius: 10px;
          padding: 6px 12px;
          font-weight: bold;
          cursor: pointer;
          color: #333;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .start-btn:hover {
          background: #ffee58;
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .teacher-card, .activity-card {
            width: 90%;
          }
          .alphabet-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default AlphabetActivity;