import React from 'react';

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <nav className={`flex items-center justify-between px-6 py-4 shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className="text-xl font-bold">MyToggleApp</h1>
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
          darkMode
            ? 'bg-white text-gray-900 hover:bg-gray-200'
            : 'bg-gray-900 text-white hover:bg-gray-700'
        }`}
      >
        {darkMode ? 'Light' : 'Dark'}
      </button>
    </nav>
  );
};

export default Navbar;
