import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './pages/AuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import ParentDashboard from './pages/ParentDashboard';
import ChildDashboard from './pages/ChildDashboard';
import SignUp from './pages/SignUp';


import AlphabetActivity from './pages/AlphabetActivity';
import Flashcards from './pages/Flashcards';
import DrawAlphabets from './pages/DrawAlphabets';
import NumbersActivity from './pages/NumbersActivity';
<<<<<<< HEAD
=======
import DrawingActivity from './pages/DrawingActivity';
import FreeDrawing from "./pages/FreeDrawing";
import SingRhymes from './pages/SingRhymes';
import ColorShapes from "./pages/ColorShapes";
import RhymesActivity from './pages/RhymesActivity';
>>>>>>> f50959a6d9a98a14eb2045719e99cbdf60ff5362
import CountingBeads from './pages/CountingBeads';
import NumberHunt from './pages/NumberHunt';
import DrawingActivity from './pages/DrawingActivity';
import RhymesActivity from './pages/RhymesActivity';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/parent" element={<ParentDashboard />} />
          <Route path="/child" element={<ChildDashboard />} />
          <Route path="/signup" element={<SignUp />} />

         
          <Route path="/alphabet" element={<AlphabetActivity />} />
          <Route path="/alphabet/flashcards" element={<Flashcards />} />
          <Route path="/alphabet/drawing" element={<DrawAlphabets />} />
          <Route path="/numbers" element={<NumbersActivity />} />
          <Route path="/numbers/counting-beads" element={<CountingBeads />} />
          <Route path="/numbers/number-hunt" element={<NumberHunt />} />
          <Route path="/drawing" element={<DrawingActivity />} />
          <Route path="/drawing/free-drawing" element={<FreeDrawing />} />
          <Route path="/drawing/color-shapes" element={<ColorShapes />} />
          <Route path="/rhymes" element={<RhymesActivity />} />
          <Route path="/rhymes/sing-rhymes" element={<SingRhymes />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;



// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Anushka1007/backend-happy-learning.git
// git push -u origin main