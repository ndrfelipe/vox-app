import React, { useState, useRef, useEffect } from "react";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";
import { sendMessageToChatbot } from "../services/chatbotService";
import VoxLogo from "/vox-logo.png";
import MapAndContactICon from "/map-and-contact-icon.png";
import complaintIcon from "/complaint-icon.png";
import shieldIcon from "/shield-icon.png";
import lawIcon from "/law-icon.png";
import ReadyQuestion from "./ReadyQuestion";

export type Message = {
  text: string;
  sender: "user" | "bot";
  timestamp?: Date;
};

const generateSenderId = () => {
  const storedId = localStorage.getItem("vox-sender-id");
  if (storedId) return storedId;

  const newId = `user-${crypto.randomUUID()}`;
  localStorage.setItem("vox-sender-id", newId);
  return newId;
};

const senderId = generateSenderId();

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [botIsActive, setBotIsActive] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendSubmit = async (): Promise<void> => {
    if (newMessage.trim() === "") return;

    const userMessage: Message = {
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setBotIsActive(true);

    try {
      const botText = await sendMessageToChatbot(newMessage, senderId);
      const botMessage: Message = {
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const fallbackMessage: Message = {
        text: "Desculpe, algo deu errado ao tentar me comunicar com o servidor.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    }
  };

  const handleQuickQuestion = async (quickMessage: string) => {
    const userMessage: Message = {
      text: quickMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setBotIsActive(true);

    const botResponse = await sendMessageToChatbot(quickMessage, senderId);

    const botMessage: Message = {
      text: botResponse,
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
  };

  const dataBtn = [
    {
      question: "Entre em contato ou encontre a unidade mais perto de você",
      icon: MapAndContactICon,
      onClick: handleQuickQuestion,
    },
    {
      question: "Saiba todas as atividades licenciadas da Polícia Civil de Pernambuco",
      icon: complaintIcon,
      onClick: handleQuickQuestion,
    },
    {
      question: "Saiba como se manter em segurança!",
      icon: shieldIcon,
      onClick: handleQuickQuestion,
    },
    {
      question: "Agende um atendimento",
      icon: lawIcon,
      onClick: handleQuickQuestion,
    },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize(); // já define ao montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonsToDisplay = isMobile ? dataBtn.slice(0, 2) : dataBtn;

  return (
    <div className="flex flex-col flex-1 items-center justify-between w-full max-w-[1200px] mx-auto h-screen pb-5 px-4">
      {!botIsActive && (
        <div className="flex flex-col justify-end items-center text-center gap-10 pt-12">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[80px] sm:w-[100px]" src={VoxLogo} alt="" />
            <h1 className="text-[20px] sm:text-[32px] font-bold text-transparent bg-gradient-to-r from-[#1E3A8A] to-[#080F24] bg-clip-text text-center">
              Olá, sou o Vox! <br /> O Assistente Virtual da Polícia Civil de Pernambuco
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4 sm:px-0 sm:w-[70%]">
            {buttonsToDisplay.map((obj, key) => (
              <ReadyQuestion
                question={obj.question}
                icon={obj.icon}
                key={key}
                onClick={obj.onClick}
              />
            ))}
          </div>
        </div>
      )}

      <div className="w-full h-[80vh] px-[20%] overflow-y-auto pt-10">
        {messages.map((msg, index) => (
          <MessageBubble msg={msg} index={index} key={index} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput
        
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSend={handleSendSubmit}
      />
    </div>
  );
};

export default ChatBox;
