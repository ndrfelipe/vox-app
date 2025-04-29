import Chatbox from "./components/ChatBox";
import Sidebar, { SidebarItem } from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex ">
      <Sidebar>
        <SidebarItem
          icon={<i className="fas fa-home"></i>}
          text="Inicio"
          active
        />
        <SidebarItem icon={<i className="fas fa-user"></i>} text="Histórico" />
      </Sidebar>
      <Chatbox />
    </div>
  );
}

