import React, { useState } from 'react';

 function AlphabetActivity() {
 };
  const teachers = [
    { id: 1, name: 'Ms. Ella Verma', experience: '5 years', style: 'Interactive Songs & Games' },
    { id: 2, name: 'Mr. Mohit Singh', experience: '3 years', style: 'Story-Based Learning' },
    { id: 3, name: 'Mrs. Shubhi Panwar', experience: '7 years', style: 'Visual & Creative Activities' },
  ];

  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleSelect = (teacher) => {
    setSelectedTeacher(teacher);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🎈 Alphabet Learning Adventure 🎨</h2>
      <p style={styles.subtitle}>Let’s learn the alphabets together with your favorite teacher!</p>

      {/* Teacher selection section */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>👩‍🏫 Choose Your Teacher (Ages 0–7):</h3>
        <div style={styles.teacherList}>
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              onClick={() => handleSelect(teacher)}
              style={{
                ...styles.teacherCard,
                border: selectedTeacher?.id === teacher.id ? '3px solid #FFD700' : '2px solid #fff',
                transform: selectedTeacher?.id === teacher.id ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              <h4 style={styles.teacherName}>{teacher.name}</h4>
              <p style={styles.teacherInfo}>🌟 Experience: {teacher.experience}</p>
              <p style={styles.teacherInfo}>🎨 Style: {teacher.style}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Selected teacher section */}
      {selectedTeacher && (
        <div style={styles.selectedBox}>
          <h3 style={styles.selectedTitle}>You chose:</h3>
          <p style={styles.selectedName}>{selectedTeacher.name}</p>
          <p style={styles.selectedInfo}>Experience: {selectedTeacher.experience}</p>
          <p style={styles.selectedInfo}>Teaching Style: {selectedTeacher.style}</p>
          <p style={styles.startText}>
            🚀 Let’s start learning with <strong>{selectedTeacher.name.split(' ')[0]}</strong>!
          </p>
        </div>
      )}
    </div>
  );




// 🎨 Inline CSS styles (fun & colorful)
const styles = {
  container: {
    background: 'linear-gradient(to right, #a8edea, #fed6e3)',
    minHeight: '100vh',
    padding: '40px',
    fontFamily: '"Comic Sans MS", "Comic Neue", cursive',
    color: '#333',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#ff4081',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '30px',
  },
  section: {
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    color: '#4A148C',
    marginBottom: '20px',
  },
  teacherList: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  teacherCard: {
    background: 'linear-gradient(135deg, #FFD54F, #FFB74D)',
    borderRadius: '15px',
    padding: '15px',
    width: '200px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
  },
  teacherName: {
    fontSize: '1.2rem',
    color: '#fff',
    marginBottom: '5px',
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
  },
  teacherInfo: {
    fontSize: '0.9rem',
    color: '#fff',
  },
  selectedBox: {
    background: 'linear-gradient(135deg, #81C784, #4CAF50)',
    color: '#fff',
    padding: '20px',
    borderRadius: '15px',
    maxWidth: '400px',
    margin: '0 auto',
    boxShadow: '4px 4px 10px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease-in-out',
  },
  selectedTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  selectedName: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
  selectedInfo: {
    fontSize: '1rem',
    margin: '4px 0',
  },
  startText: {
    marginTop: '10px',
    fontSize: '1.1rem',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '10px',
    padding: '8px',
  },
};

 export default AlphabetActivity;