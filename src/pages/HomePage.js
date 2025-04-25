import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Quiz App!</h1>
      <nav style={{ margin: '20px 0' }}>
        <Link to="/questions" style={{ marginRight: '15px' }}>Questions</Link>
        <Link to="/quiz" style={{ marginRight: '15px' }}>Start Quiz</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </nav>
      <p>Select an option from above to continue.</p>
    </div>
  );
};

export default HomePage;
