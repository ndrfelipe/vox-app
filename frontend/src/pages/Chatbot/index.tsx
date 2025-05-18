import { useState } from "react";
import "./index.css";
import ChatBox from "../../components/Chatbox";
import Sidebar, { SidebarItem } from "../../components/Sidebar";
import Agendar from "../../components/Agendar";
import Denuncia from "../../components/Denuncia";
import HistoryViewer from "../../components/HistoryViewer";

export default function Chatbot() {
  const [activeView, setActiveView] = useState("chat");
  const [selectedHistory, setSelectedHistory] = useState(null);

  // Exemplo de históricos com título e data
  const historicosMock = [
    {
      id: 1,
      title: "Agendamento de Atendimento",
      date: new Date("2025-05-15"),
      messages: [
        { text: "Olá, como posso agendar um atendimento?", sender: "user", timestamp: new Date("2025-05-15T10:00:00") },
        { text: "Você pode agendar na aba 'Agendar'.", sender: "bot", timestamp: new Date("2025-05-15T10:00:05") }
      ]
    },
    {
      id: 2,
      title: "Denúncia Anônima",
      date: new Date("2025-05-14"),
      messages: [
        { text: "Gostaria de fazer uma denúncia anônima.", sender: "user", timestamp: new Date("2025-05-14T09:30:00") },
        { text: "Claro, acesse a aba 'Denunciar'.", sender: "bot", timestamp: new Date("2025-05-14T09:30:07") }
      ]
    }
  ];

  const handleHistoricoClick = (hist) => {
    setSelectedHistory(hist);
  };

  return (
    <div id="chatbot-page" className="flex">
      <Sidebar>
        {activeView === "history" ? (
          <div className="p-4 overflow-y-auto h-full">
            <button
              onClick={() => {
                setSelectedHistory(null);
                setActiveView("chat");
              }}
              className="
                    flex items-center 
                    bg-blue-700 hover:bg-blue-900 
                    text-white 
                    px-4 py-2 
                    rounded-lg 
                    shadow 
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-blue-400
                    gap-4
                    mt-5
                    mb-5
                    font-semibold
                    cursor-pointer
                "
            >
                <i className="fa-solid fa-arrow-left"></i> Início
            </button>
            <h2 className="text-lg font-semibold mb-4">Histórico de Conversas</h2>
            <ul className="space-y-2">
              {historicosMock.map((hist) => (
                <li
                  key={hist.id}
                  className={`cursor-pointer bg-gray-100 rounded p-3 shadow-md hover:bg-gray-300 ${selectedHistory?.id === hist.id ? 'bg-gray-200' : ''}`}
                  onClick={() => handleHistoricoClick(hist)}
                >
                  <div className="font-medium">{hist.title}</div>
                  <div className="text-sm text-gray-600">{hist.date.toLocaleDateString()}</div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            <SidebarItem
              icon={<i className="fas fa-home"></i>}
              text="Início"
              active={activeView === "chat"}
              onClick={() => {
                setSelectedHistory(null);
                setActiveView("chat");
              }}
            />
            <SidebarItem
              icon={<i className="fas fa-user"></i>}
              text="Histórico"
              active={activeView === "history"}
              onClick={() => setActiveView("history")}
            />
            <SidebarItem
              icon={<i className="fa-solid fa-calendar"></i>}
              text="Agendar"
              active={activeView === "agendar"}
              onClick={() => setActiveView("agendar")}
            />
            <SidebarItem
              icon={<i className="fa-solid fa-circle-exclamation"></i>}
              text="Denunciar"
              active={activeView === "denuncia"}
              onClick={() => setActiveView("denuncia")}
            />
          </>
        )}
      </Sidebar>

      {/* Conteúdo principal */}
      {activeView === "chat" && <ChatBox />}
      {activeView === "agendar" && <Agendar />}
      {activeView === "denuncia" && <Denuncia />}

      {activeView === "history" && (
        <div className="flex-1">
          {selectedHistory ? (
            <HistoryViewer
              messages={selectedHistory.messages}
              title={selectedHistory.title}
              onBack={() => setSelectedHistory(null)}
            />
          ) : (
                <div className="
                m-5
                p-2
                bg-red-500
                text-white 

                w-90
                rounded
                flex items-center gap-3
                ">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <p>Selecione um histórico para visualizar</p>
                    
                </div>
          )}
        </div>
      )}
    </div>
  );
}
