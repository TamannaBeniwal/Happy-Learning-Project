import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [isParent, setIsParent] = useState(true);
  const navigate = useNavigate();

  // Shared password field
  const [password, setPassword] = useState('');

  // Parent fields
  const [fatherNameP, setFatherNameP] = useState('');
  const [motherNameP, setMotherNameP] = useState('');
  const [childNameP, setChildNameP] = useState('');
  const [childAgeP, setChildAgeP] = useState('');

  // Child fields
  const [childOnlyName, setChildOnlyName] = useState('');
  const [fatherNameC, setFatherNameC] = useState('');
  const [motherNameC, setMotherNameC] = useState('');
  const [childOnlyAge, setChildOnlyAge] = useState('');

  const handleRegister = () => {
    if (isParent) {
      if (fatherNameP && motherNameP && childNameP && childAgeP && password) {
        alert(`Parent Registered!\nFather: ${fatherNameP}\nMother: ${motherNameP}\nChild: ${childNameP}, Age: ${childAgeP}`);
        navigate('/login');
      } else {
        alert('Please fill in all Parent fields.');
      }
    } else {
      if (childOnlyName && fatherNameC && motherNameC && childOnlyAge && password) {
        alert(`Child Registered!\nChild: ${childOnlyName}, Age: ${childOnlyAge}\nFather: ${fatherNameC}, Mother: ${motherNameC}`);
        navigate('/login');
      } else {
        alert('Please fill in all Child fields.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>📝 Sign Up</h2>

        <div className="role-toggle">
          <button
            className={isParent ? '' : 'active'}
            onClick={() => setIsParent(false)}
          >
            Child
          </button>
          <button
            className={isParent ? 'active' : ''}
            onClick={() => setIsParent(true)}
          >
            Parent
          </button>
        </div>

        {isParent ? (
          <>
            <label>Father's Name</label>
            <input
              type="text"
              placeholder="Enter father's name"
              value={fatherNameP}
              onChange={(e) => setFatherNameP(e.target.value)}
            />

            <label>Mother's Name</label>
            <input
              type="text"
              placeholder="Enter mother's name"
              value={motherNameP}
              onChange={(e) => setMotherNameP(e.target.value)}
            />

            <label>Child Name</label>
            <input
              type="text"
              placeholder="Enter child name"
              value={childNameP}
              onChange={(e) => setChildNameP(e.target.value)}
            />

            <label>Child Age</label>
            <input
              type="number"
              placeholder="Enter child age"
              value={childAgeP}
              onChange={(e) => setChildAgeP(e.target.value)}
            />

            <label>Set Password</label>
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
              value={childOnlyName}
              onChange={(e) => setChildOnlyName(e.target.value)}
            />

            <label>Father's Name</label>
            <input
              type="text"
              placeholder="Enter father's name"
              value={fatherNameC}
              onChange={(e) => setFatherNameC(e.target.value)}
            />

            <label>Mother's Name</label>
            <input
              type="text"
              placeholder="Enter mother's name"
              value={motherNameC}
              onChange={(e) => setMotherNameC(e.target.value)}
            />

            <label>Child Age</label>
            <input
              type="number"
              placeholder="Enter child age"
              value={childOnlyAge}
              onChange={(e) => setChildOnlyAge(e.target.value)}
            />

            <label>Set Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}

        <button className="login-btn" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default SignUp;
