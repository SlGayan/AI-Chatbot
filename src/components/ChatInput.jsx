import { Send } from 'lucide-react';
import React from 'react';

const ChatInput = ({ darkMode, input, setInput, loading, handleSendMessage }) => {
  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-800 border-t border-gray-700"
          : "bg-white border-t border-gray-200"
      } p-4`}
    >
      <div className='max-w-5xl mx-auto'>
        <div className='flex items-center space-x-3'>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !loading && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder='Type your message'
            className={`flex-1 border rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
              ${darkMode
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
          />

          <button
            className={`p-3 rounded-full transition-colors shadow-md cursor-pointer
              ${darkMode
                ? "bg-indigo-600 text-white hover:bg-indigo-500"
                : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
              }`}
            onClick={handleSendMessage}
            disabled={loading || !input.trim()}
          >
            <Send className={`${darkMode ? "text-white" : "text-indigo-700"}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
