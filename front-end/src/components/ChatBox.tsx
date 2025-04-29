import React, { useState, useRef, useEffect } from "react";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";

import VoxLogo from "/vox-logo.png";
import MapAndContactICon from "/map-and-contact-icon.png";
import ReadyQuestion from "./ReadyQuestion";

export type Message = {
  text: string;
  sender: "user" | "bot";
  timestamp?: Date;
};

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [botIsActive, setBotIsActive] = useState(false);

  const handleSend = (): void => {
    if (newMessage.trim() === "") return;

    const userMessage: Message = {
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setBotIsActive(true);

    setTimeout(() => {
      const botMessage: Message = {
        text: "Obrigado pela sua mensagem! Como posso ajudar?",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col flex-1 items-center justify-between w-[70%] h-screen pb-5">
      {!botIsActive && (
        <div className="flex flex-col justify-end items-center text-center gap-10 pt-5">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[100px]" src={VoxLogo} alt="" />
            <h1 className="text-[32px] font-bold text-transparent bg-gradient-to-r from-[#1E3A8A] to-[#080F24] bg-clip-text">
              Olá! Sou o vox! <br /> Como posso te ajudar?
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 w-[70%]">
            <ReadyQuestion
              question="Entre em contato ou encontre a unidade mais perto de você"
              icon={MapAndContactICon}
            />
            <ReadyQuestion
              question="Entre em contato ou encontre a unidade mais perto de você"
              icon={MapAndContactICon}
            />
            <ReadyQuestion
              question="Entre em contato ou encontre a unidade mais perto de você"
              icon={MapAndContactICon}
            />
            <ReadyQuestion
              question="Entre em contato ou encontre a unidade mais perto de você"
              icon={MapAndContactICon}
            />
            <ReadyQuestion
              question="Entre em contato ou encontre a unidade mais perto de você"
              icon={MapAndContactICon}
            />
            <ReadyQuestion
              question="Entre em contato ou encontre a unidade mais perto de você"
              icon={MapAndContactICon}
            />
          </div>
        </div>
      )}
      <div
        className={
          botIsActive ? "w-full h-[80vh] px-[20%] overflow-y-auto" : "none"
        }
      >
        {messages.map((msg, index) => (
          <MessageBubble msg={msg} index={index} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSend={handleSend}
      />
    </div>
  );
};

export default ChatBox;
