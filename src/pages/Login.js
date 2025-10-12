import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
  const [isParent, setIsParent] = useState(true);
  const [parentType, setParentType] = useState('father'); // 'father' or 'mother'
  const { setParentInfo, setChildInfo } = useAuth();

  const [parentName, setParentName] = useState('');
  const [childNameForParent, setChildNameForParent] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    if (isParent) {
      if (parentName && childNameForParent && password) {
        setParentInfo({
          parentType,
          parentName,
          childName: childNameForParent,
        });
        navigate('/parent');
      }
    } else {
      if (childName && childAge && password) {
        setChildInfo({ name: childName, age: childAge });
        navigate('/child');
      }
    }
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  const handleForgotPassword = () => {
    alert('Password recovery coming soon!');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isParent ? '👩‍👧 Parent Login' : '👶 Child Login'}</h2>

        <div className="role-toggle">
          <button
            className={isParent ? 'active' : ''}
            onClick={() => setIsParent(true)}
          >
            Parent
          </button>
          <button
            className={!isParent ? 'active' : ''}
            onClick={() => setIsParent(false)}
          >
            Child
          </button>
        </div>

        {isParent ? (
          <>
            <div className="parent-type-toggle" style={{ marginBottom: '15px' }}>
              <button
                className={parentType === 'father' ? 'active' : ''}
                onClick={() => setParentType('father')}
                style={{ marginRight: '10px' }}
              >
                Father
              </button>
              <button
                className={parentType === 'mother' ? 'active' : ''}
                onClick={() => setParentType('mother')}
              >
                Mother
              </button>
            </div>

            <label>{parentType === 'father' ? "Father's Name" : "Mother's Name"}</label>
            <input
              type="text"
              placeholder={`Enter ${parentType}'s name`}
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
            />

            <label>Child Name</label>
            <input
              type="text"
              placeholder="Enter child name"
              value={childNameForParent}
              onChange={(e) => setChildNameForParent(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        ) : (
          <>
            <label>Child Name</label>
            <input
              type="text"
              placeholder="Enter child name"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
            />

            <label>Child Age</label>
            <input
              type="number"
              placeholder="Enter child age"
              value={childAge}
              onChange={(e) => setChildAge(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <div className="extra-links">
          <p onClick={handleForgotPassword}>Forgot Password?</p>
          <p>
            Don’t have an account?{' '}
            <span className="signup-link" onClick={handleSignupRedirect}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
