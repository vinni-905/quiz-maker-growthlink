import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Growthlink Quiz Maker</h1>
      <button
        onClick={() => navigate('/quiz')}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default HomePage;
