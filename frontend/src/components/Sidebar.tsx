import { useContext, createContext, useState, ReactNode } from "react";
import VoxLogo from "/vox-logo.png";

interface SidebarContextType {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function Sidebar({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen z-1000">
      <nav className="flex flex-col items-center justify-between py-3 px-5 bg-[rgba(10,10,10,0.25)] h-full backdrop-blur-md rounded-[10px] border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="/policiaLogo.png"
            className={`overflow-hidden transition-all ${
              expanded ? "w-12" : "w-0"
            }`}
            alt="Logotipo da Polícia Civil de Pernambuco"
          />
          <img
            src={VoxLogo}
            className={`overflow-hidden transition-all  ${
              expanded ? "w-12  mr-25" : "w-0"
            }`}
            alt="Logotipo da Polícia Civil de Pernambuco"
          />

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg border border-gray-700 text-white cursor-pointer hover:bg-gray-900 "
          >
            {expanded ? (
              <i className="fas fa-chevron-left"></i>
            ) : (
              <i className="fas fa-chevron-right"></i>
            )}
          </button>

        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-gray-100">André Braga</h4>
              <span className="text-xs text-gray-600">andrebraga@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({
  icon,
  text,
  active,
  alert,
  onClick
}: {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  onClick?: () => void;
}) {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "SidebarItem must be used inside a SidebarContext.Provider"
    );
  }

  const { expanded } = context;

  return (
    <li
      onClick={onClick}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        border
        border-transparent
        ${
          active
            ? "bg-gradient-to-tr from-blue-900 to-gray-900 text-white border-white"
            : "hover:bg-gray-900 text-gray-600 hover:border hover:border-white"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-gray-700 border text-white text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
