import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [isParent, setIsParent] = useState(true);
  const navigate = useNavigate();

  // Shared password
  const [password, setPassword] = useState('');

  // Parent fields
  const [parentType, setParentType] = useState('Father'); // Father or Mother
  const [parentName, setParentName] = useState('');
  const [childNameP, setChildNameP] = useState('');
  const [childAgeP, setChildAgeP] = useState('');

  // Child fields
  const [childOnlyName, setChildOnlyName] = useState('');
  const [fatherNameC, setFatherNameC] = useState('');
  const [motherNameC, setMotherNameC] = useState('');
  const [childOnlyAge, setChildOnlyAge] = useState('');

  // Loading state
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);

    if (isParent) {
      if (!parentName || !childNameP || !childAgeP || !password) {
        alert('Please fill in all Parent fields.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/auth/signup/parent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: parentType.toLowerCase(),
            parentName,
            childName: childNameP,
            childAge: parseInt(childAgeP),
            password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert('Parent registered successfully!');
          navigate('/login');
        } else {
          alert(`Error: ${data.message || 'Something went wrong!'}`);
        }
      } catch (error) {
        console.error(error);
        alert('Failed to register parent. Check console for details.');
      }
    } else {
      if (!childOnlyName || !fatherNameC || !motherNameC || !childOnlyAge || !password) {
        alert('Please fill in all Child fields.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/auth/signup/child', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: childOnlyName,
            fatherName: fatherNameC,
            motherName: motherNameC,
            age: parseInt(childOnlyAge),
            password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert('Child registered successfully!');
          navigate('/login');
        } else {
          alert(`Error: ${data.message || 'Something went wrong!'}`);
        }
      } catch (error) {
        console.error(error);
        alert('Failed to register child. Check console for details.');
      }
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>📝 Sign Up</h2>

        {/* Role Toggle */}
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

        {/* Parent Form */}
        {isParent ? (
          <>
            <div className="parent-type-toggle">
              <label>
                <input
                  type="radio"
                  value="Father"
                  checked={parentType === 'Father'}
                  onChange={(e) => setParentType(e.target.value)}
                />
                Father
              </label>
              <label>
                <input
                  type="radio"
                  value="Mother"
                  checked={parentType === 'Mother'}
                  onChange={(e) => setParentType(e.target.value)}
                />
                Mother
              </label>
            </div>

            <label>{parentType} Name</label>
            <input
              type="text"
              placeholder={`Enter ${parentType.toLowerCase()}'s name`}
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
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

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        ) : (
          // Child Form
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

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}

        <button
          className="login-btn"
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </div>
    </div>
  );
};

export default SignUp;
