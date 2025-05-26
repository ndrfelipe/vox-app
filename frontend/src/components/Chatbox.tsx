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
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [rating, setRating] = useState<number>(0);
  const [ratingComment, setRatingComment] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Envia mensagens do chat
  const handleSendSubmit = async (): Promise<void> => {
    if (newMessage.trim() === "") return;
    const userMessage: Message = { text: newMessage, sender: "user", timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");
    setBotIsActive(true);
    try {
      const botText = await sendMessageToChatbot(newMessage, senderId);
      const botMessage: Message = { text: botText, sender: "bot", timestamp: new Date() };
      setMessages(prev => [...prev, botMessage]);
    } catch {
      const fallback: Message = { text: "Desculpe, algo deu errado ao tentar me comunicar com o servidor.", sender: "bot", timestamp: new Date() };
      setMessages(prev => [...prev, fallback]);
    }
  };

  // Perguntas rápidas
  const handleQuickQuestion = async (quickMessage: string) => {
    const userMessage: Message = { text: quickMessage, sender: "user", timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setBotIsActive(true);
    const botResponse = await sendMessageToChatbot(quickMessage, senderId);
    const botMessage: Message = { text: botResponse, sender: "bot", timestamp: new Date() };
    setMessages(prev => [...prev, botMessage]);
  };

  // Scroll automático
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const dataBtn = [
    { question: "Entre em contato ou encontre a unidade mais perto de você", icon: MapAndContactICon, onClick: handleQuickQuestion },
    { question: "Saiba todas as atividades licenciadas da Polícia Civil de Pernambuco", icon: complaintIcon, onClick: handleQuickQuestion },
    { question: "Saiba como se manter em segurança!", icon: shieldIcon, onClick: handleQuickQuestion },
    { question: "Agende um atendimento", icon: lawIcon, onClick: handleQuickQuestion },
  ];

  return (
    <div className="relative flex flex-col flex-1 items-center justify-between w-full max-w-[1200px] mx-auto h-screen pb-5 px-4">
      {/* Botão de avaliação */}
      <button
        onClick={() => setShowRatingModal(true)}
        className="cursor-pointer absolute top-4 right-4 bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        title="Avalie o sistema Vox"
      >
        <i className="fa-solid fa-star text-lg"></i>
      </button>

      {/* Conteúdo inicial: perguntas rápidas */}
      {!botIsActive && (
        <div className="flex flex-col justify-end items-center text-center gap-10 pt-12">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[80px] sm:w-[100px]" src={VoxLogo} alt="Vox Logo" />
            <h1 className="text-[20px] sm:text-[32px] font-bold text-white text-center text-shadow-sm">
              Olá, sou o Vox! <br /> O Assistente Virtual da Polícia Civil de Pernambuco
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4 sm:px-0 sm:w-[70%]">
            {dataBtn.map((obj, key) => (
              <ReadyQuestion key={key} question={obj.question} icon={obj.icon} onClick={obj.onClick} />
            ))}
          </div>
        </div>
      )}

      {/* Mensagens do chat */}
      <div className="w-full h-[80vh] px-[20%] overflow-y-auto pt-10">
        {messages.map((msg, index) => (
          <MessageBubble msg={msg} index={index} key={index} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput newMessage={newMessage} setNewMessage={setNewMessage} handleSend={handleSendSubmit} />

      {/* Modal de avaliação */}
      {showRatingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center ml-70">
          <div className="bg-gray-700 rounded-2xl shadow-xl p-8 w-full max-w-md transform transition-transform duration-300 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-gray-200">Avalie o Vox</h2>
            <div className="flex items-center space-x-2 mb-4">
              {[0,1,2,3,4].map(star => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-3xl focus:outline-none transition-colors cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >★</button>
              ))}
            </div>
            <textarea
              placeholder="Deixe um comentário (opcional)..."
              value={ratingComment}
              onChange={e => setRatingComment(e.target.value)}
              rows={4}
              className="w-full border text-white border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-shadow duration-300 shadow-sm hover:shadow-md"
            />
            <div className="mt-6 flex justify-end space-x-4">
              <button onClick={() => setShowRatingModal(false)} className="cursor-pointer px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition">
                Cancelar
              </button>
              <button onClick={() => { /* TODO: enviar rating */ setShowRatingModal(false); }} className="cursor-pointer px-4 py-2 bg-yellow-400 font-bold text-white rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition">
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
