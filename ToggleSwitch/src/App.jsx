import React, { useState } from 'react';
import Navbar from './Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main className="p-6">
        <h2 className="text-2xl font-semibold">Welcome to the App</h2>
        <p className="mt-4">The background changes with the theme toggle.</p>
      </main>
    </div>
  );
}

export default App;
