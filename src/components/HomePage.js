import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

const HomePage = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLogout = () => {
    auth.signOut();
    setUser(null);
  };

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Welcome to Quiz Maker 🧠</h1>
      {!user ? (
        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg shadow-md transition"
        >
          Sign in with Google
        </button>
      ) : (
        <>
          <p className="text-green-600 text-xl font-semibold mt-4">
            Logged in as {user.displayName}
          </p>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-800 text-white px-6 py-2 rounded-lg shadow-md transition mt-4"
          >
            Log Out
          </button>
        </>
      )}
    </div>
  );
};

export default HomePage;
