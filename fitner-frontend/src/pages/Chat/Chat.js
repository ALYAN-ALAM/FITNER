import React, { useState } from "react";
import "./Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showInitialMessage, setShowInitialMessage] = useState(true);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, user: "user" }]);
      setInput("");
      setShowInitialMessage(false);
    }
  };

  return (
    <div className="chat-container">
      {showInitialMessage && (
        <div className="initial-message">How can I help you today?</div>
      )}
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={handleInputChange}
          className="chat-input"
        />
        <button type="submit" className="send-button">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </button>
      </form>
    </div>
  );
};

export default Chat;
