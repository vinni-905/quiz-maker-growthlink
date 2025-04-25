// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Growthlink QuizMaker</div>
        <div className="space-x-6">
          <Link to="/quiz" className="hover:text-gray-300">
            Quiz
          </Link>
          <Link to="/questions" className="hover:text-gray-300">
            Questions
          </Link>
          <Link to="/leaderboard" className="hover:text-gray-300">
            Leaderboard
          </Link>
          <Link to="/result" className="hover:text-gray-300">
            Result
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
