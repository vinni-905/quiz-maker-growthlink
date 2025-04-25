import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Make sure to use HomePage consistently
import Navbar from './components/Navbar';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import LeaderboardPage from './components/LeaderboardPage';
import Questions from './components/Questions';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar at the top */}
      <div className="mt-16"> {/* To avoid navbar overlap */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Use HomePage component name here */}
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/result" element={<ResultPage />} />
          {/* Add any other routes if necessary */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
