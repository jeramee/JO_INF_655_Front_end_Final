// /component/ChatComponent.js
import React, { useState } from 'react';

const ChatComponent = () => {
  const [userInput, setUserInput] = useState('');
  const [assistantResponse, setAssistantResponse] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleUserSubmit = async () => {
    try {
      const response = await fetch('/api/cooking-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });
      const data = await response.json();
      // Update state with the assistant's response
      setAssistantResponse(data.response);
    } catch (error) {
      console.error('Error sending user input:', error);
    }
  };
  
  return (
    <div className="chat-container">
      <div className="chat-window">
        {/* Display previous chat messages */}
        <div className="user-message">{userInput}</div>
        <div className="assistant-message">{assistantResponse}</div>
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={userInput}
        onChange={handleInputChange}
        onKeyPress={(e) => e.key === 'Enter' && handleUserSubmit()}
      />
    </div>
  );
};

export default ChatComponent;
