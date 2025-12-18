import { Bot, Moon, Sparkles, Sun } from 'lucide-react';
import React from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } shadow-lg py-4 px-6 border-b ${
        darkMode ? "border-gray-700" : "border-gray-200"
      }`}
    >
      <div className='flex items-center justify-between max-w-5xl mx-auto'>
        <div className='flex items-center space-x-3'>
          <div className='p-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full'>
            <Bot className='h-6 w-6 text-white' />
          </div>
          <h1 className='text-xl font-bold'>Intelligent Chat</h1>
        </div>

        <div className='flex items-center space-x-4'>
          <div className='flex items-center space-x-1 px-3 py-1 rounded text-sm font-medium'>
            <Sparkles
              className={`${darkMode ? "text-indigo-400" : "text-indigo-600"} h-4 w-4`}
            />
            <span className={`${darkMode ? "text-gray-300" : "text-indigo-700"} text-sm font-medium`}>
              AI Powered
            </span>
          </div>

          <button
            className={`p-2 rounded-full cursor-pointer transition-colors ${
              darkMode
                ? "bg-indigo-700 text-yellow-300 hover:bg-indigo-600"
                : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
            }`}
            onClick={toggleDarkMode}
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
