import Chatbox from "./components/Chatbox";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import FontSizeControls from "./components/FontSize";
import { useState } from 'react';

const App: React.FC = () => {
    const [isLarge, setIsLarge] = useState(false);

    return (
        <div className={`flex ${isLarge ? 'text-xl [&_button]:text-xl [&_input]:text-xl [&_textarea]:text-xl' : 'text-base'}`}>
            <Sidebar>
                <SidebarItem
                    icon={<i className="fas fa-home"></i>}
                    text="Inicio"
                    active
                />
                <SidebarItem 
                    icon={<i className="fas fa-user"></i>} 
                    text="Histórico" 
                />
            </Sidebar>
            <Chatbox />
            <FontSizeControls 
                onSizeChange={setIsLarge} 
            />
        </div>
    );
};

export default App;