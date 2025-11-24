import React from "react";

function SingRhymes() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sing Along Rhymes</h2>
      <p style={styles.text}>
        Welcome! Follow the rhymes and sing along with actions.
      </p>

    
      <div style={styles.rhymesBox}>
        <p style={styles.rhyme}>Twinkle, twinkle, little star,</p>
        <p style={styles.rhyme}>How I wonder what you are!</p>
        <p style={styles.rhyme}>Up above the world so high,</p>
        <p style={styles.rhyme}>Like a diamond in the sky.</p>
      </div>

      <button style={styles.backBtn} onClick={() => window.history.back()}>
        ⬅Go Back
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    textAlign: "center",
    fontFamily: "Comic Sans MS, Comic Neue, cursive",
    background: "linear-gradient(to right, #ffe0b2, #ffcc80)",
    color: "#333",
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "30px",
  },
  rhymesBox: {
    background: "rgba(255,255,255,0.9)",
    borderRadius: "15px",
    padding: "20px",
    maxWidth: "500px",
    margin: "0 auto 30px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  rhyme: {
    fontSize: "1.1rem",
    margin: "5px 0",
  },
  backBtn: {
    background: "#ffeb3b",
    border: "none",
    borderRadius: "10px",
    padding: "8px 16px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#333",
    transition: "background 0.3s ease",
  },
};

export default SingRhymes;
