import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom'; 

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <div className="welcome-card">
        <h1> Welcome to <span className="brand">Happy Learning!</span></h1>
        <p className="subtitle">Fun learning for ages 0–7</p>
        <button className="start-button" onClick={handleStart}>
          Let's Start!
        </button>
      </div>
    </div>
  );
};

export default Home;