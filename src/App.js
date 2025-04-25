import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Questions from './components/Questions';
import QuizPage from './components/QuizPage';
import LeaderboardPage from './components/LeaderboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        {/* You can add an improvement route later if needed */}
      </Routes>
    </Router>
  );
}

export default App;
