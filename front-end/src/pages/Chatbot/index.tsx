import { useState } from "react";
import "./index.css";
import ChatBox from "../../components/Chatbox";
import Sidebar, { SidebarItem } from "../../components/Sidebar";
import HistoryPanel from "../../components/HistoryPanel";

export default function Chatbot() {

  const [activeView, setActiveView] = useState("chat");

  return (
    <div id="chatbot-page" className="flex">
      <Sidebar>
        <SidebarItem
          icon={<i className="fas fa-home"></i>}
          text="Inicio"
          active={activeView === "chat"}
          onClick={() => setActiveView("chat")}
        />

        <SidebarItem
         icon={<i className="fas fa-user"></i>}
          text="Histórico"
          active={activeView === "history"}
          onClick={() => setActiveView("history")}
        />
      </Sidebar>


        {activeView === "chat" && <ChatBox />}
        {activeView === "history" && <HistoryPanel senderId="usuario1" />}

    </div>
  );
}
        