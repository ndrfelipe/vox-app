import { useState } from "react";
import ChatBox from "./components/ChatBox";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import HistoryPanel from "./components/HistoryPanel";

export default function App() {

  const [activeView, setActiveView] = useState("chat");

  return (
    <div className="flex">
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
        