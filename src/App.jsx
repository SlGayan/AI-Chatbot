import React, { useState } from 'react';
import Header from './components/Header';
import { formatTime } from '../utils/chatUtils';
import ChatMessage from './components/ChatMessage';
import LoadingIndicator from './components/LoadingIndicator';
import ChatInput from './components/ChatInput';
import { generateContent } from './Services/geminiApi';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return; // prevent empty messages

    const userMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Await Gemini API response
      const botReply = await generateContent(input);

      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: botReply,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Failed to get response:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "Error: Unable to generate response.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }

    setIsLoading(false);
  };

  return (
    <div className='flex flex-col h-screen'>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <div className='flex-1 overflow-y-auto p-4 md:p-6'>
        <div className='max-w-5xl mx-auto space-y-4'>
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              darkMode={darkMode}
              messages={message}
              formatTime={formatTime}
            />
          ))}

          {isLoading && <LoadingIndicator darkMode={darkMode} />}
        </div>
      </div>

      <ChatInput
        darkMode={darkMode}
        input={input}
        setInput={setInput}
        loading={isLoading}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default App;
