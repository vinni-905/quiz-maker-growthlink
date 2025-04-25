import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/questions">Questions</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        <li><Link to="/improvement">Improvement</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
