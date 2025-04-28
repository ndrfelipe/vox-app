import React, { useState, useRef, useEffect } from 'react';
import ChatInput from './ChatInput';
import MessageBubble from './MessageBubble';

export type Message = {
  text: string;
  sender: 'user' | 'bot';
  timestamp?: Date;
};

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = (): void => {
    if (newMessage.trim() === '') return;

    const userMessage: Message = {
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    setTimeout(() => {
      const botMessage: Message = {
        text: 'Obrigado pela sua mensagem! Como posso ajudar?',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col justify-end w-128 h-10/12 rounded-2xl overflow-hidden shadow-x1 font-sans">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <MessageBubble msg={msg} index={index} />
        ))}
        <div ref={messagesEndRef} />
      </div>
        <ChatInput newMessage={newMessage} setNewMessage={setNewMessage} handleSend={handleSend}/>
    </div>
  );
};

export default ChatBox;