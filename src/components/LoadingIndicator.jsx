import { Bot } from 'lucide-react';
import React from 'react';

const LoadingIndicator = ({ darkMode }) => {
  return (
    <div className='flex justify-start'>
      <div
        className={`rounded-2xl px-5 py-3 max-w-[80%] md:max-w-[70%] flex items-center space-x-3
          ${darkMode
            ? "bg-gray-800 text-gray-100 border border-gray-700"
            : "bg-white text-gray-800 shadow-md"
          }`}
      >
        <Bot className={`h-5 w-5 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`} />

        <div className='flex space-x-1'>
          <div
            className={`w-2.5 h-2.5 rounded-full ${darkMode ? "bg-gray-500" : "bg-indigo-400"} animate-bounce`}
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className={`w-2.5 h-2.5 rounded-full ${darkMode ? "bg-gray-500" : "bg-indigo-400"} animate-bounce`}
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className={`w-2.5 h-2.5 rounded-full ${darkMode ? "bg-gray-500" : "bg-indigo-400"} animate-bounce`}
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
