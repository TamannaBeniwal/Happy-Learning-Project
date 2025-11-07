import React, { useState } from "react";

function DrawingActivity() {
  const teachers = [
    { id: 1, name: "Mrs. Neetu Sharma", experiennce: "5 years", style: "Creative Art & Imagination" },
    { id: 2, name: "Mr. Jatin Choudhary", experience: "6 years", style: "Colorful Story Drawing" },
    { id: 3, name: "Mrs. Avni Singhal", experience: "4 years", style: "Fun Painting & Shapes" },
  ];

  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleSelect = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const activities = [
    {
      id: 1,
      title: "🎨 Free Drawing",
      description: "Use different colors and brushes to make your masterpiece!",
      path: "/drawing/free-drawing",
    },
    {
      id: 2,
      title: "🖍️ Color the Shapes",
      description: "Fill fun shapes with your favorite colors.",
      path: "/drawing/color-shapes",
    },
  ];

  const handleActivityClick = (activity) => {
    window.location.href = activity.path; // Navigates to your already-built activity pages
  };

  return (
    <div className="drawing-container">
      <h2 className="drawing-title">🎨 Drawing & Coloring Adventure 🖍️</h2>
      <p className="drawing-subtitle">
        Choose your teacher and explore fun drawing activities!
      </p>

      {/* 👩‍🏫 Teacher Selection */}
      <div className="teacher-section">
        <h3 className="section-title">🧑‍🎨 Choose Your Drawing Teacher (Ages 0–7):</h3>
        <div className="teacher-list">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              onClick={() => handleSelect(teacher)}
              className={`teacher-card ${selectedTeacher?.id === teacher.id ? "selected" : ""}`}
            >
              <h4 className="teacher-name">{teacher.name}</h4>
              <p className="teacher-info">🌟 Experience: {teacher.experience}</p>
              <p className="teacher-info">🎨 Style: {teacher.style}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🧑‍🏫 Selected Teacher */}
      {selectedTeacher && (
        <div className="selected-box">
          <h3 className="selected-title">You chose:</h3>
          <p className="selected-name">{selectedTeacher.name}</p>
          <p className="selected-info">Experience: {selectedTeacher.experience}</p>
          <p className="selected-info">Teaching Style: {selectedTeacher.style}</p>
          <p className="start-text">
            🖌️ Let’s start drawing with <strong>{selectedTeacher.name.split(" ")[1]}</strong>!
          </p>
        </div>
      )}

      {/* 🧩 Drawing Activities */}
      <div className="activity-section">
        <h3 className="section-title">🎮 Choose Your Drawing Activity:</h3>
        <div className="activity-list">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="activity-card"
              onClick={() => handleActivityClick(activity)}
            >
              <h4 className="activity-title">{activity.title}</h4>
              <p className="activity-desc">{activity.description}</p>
              <button className="start-btn">Start ➡️</button>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        .drawing-container {
          background: linear-gradient(to right, #fceabb, #f8b500);
          min-height: 100vh;
          padding: 40px;
          font-family: "Comic Sans MS", "Comic Neue", cursive;
          text-align: center;
          color: #333;
        }

        .drawing-title {
          font-size: 2.4rem;
          color: #ff4081;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
          margin-bottom: 10px;
        }

        .drawing-subtitle {
          font-size: 1.2rem;
          margin-bottom: 25px;
        }

        .section-title {
          font-size: 1.5rem;
          color: #4a148c;
          margin-bottom: 20px;
        }

        .teacher-section {
          background: rgba(255,255,255,0.9);
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
          background: linear-gradient(135deg, #ffb6c1, #ff69b4);
          border-radius: 15px;
          width: 200px;
          padding: 15px;
          box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          color: #fff;
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
          .drawing-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default DrawingActivity;
