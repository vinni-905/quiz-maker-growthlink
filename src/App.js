// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import QuizPage from './components/QuizPage';
// Import QuizPage component

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the LoginPage */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Define the route for the HomePage */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Define the route for the QuizPage */}
        <Route path="/quiz" element={<QuizPage />} />
        
        {/* Add other routes if necessary, like QuestionsPage, LeaderboardPage, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
