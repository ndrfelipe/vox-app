import React, { useState, useRef, useEffect } from 'react';
import './ChatBox.css';
import { sendMessageToChatbot } from '../services/chatbotService';

type Message = {
  text: string;
  sender: 'user' | 'bot';
  timestamp?: Date;
};




const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async (): Promise<void> => {
    if (newMessage.trim() === '') return;

    const userMessage: Message = {
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const userInput = newMessage;
    setNewMessage('');

    // Chamada para a API fake
    const botResponseText = await sendMessageToChatbot(userInput);

    const botMessage: Message = {
      text: botResponseText,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className="message-text">{msg.text}</div>
            <div className="message-time">
              {msg.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
          onKeyDown={(e: React.KeyboardEvent) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
