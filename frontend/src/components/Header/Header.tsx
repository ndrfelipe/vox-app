import VoxLogo from "/vox-logo.png";
import policiaCivilLogotipo from "/policiaLogo.png";

import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <header className="flex items-center justify-between py-3 px-5 bg-[rgba(10,10,10,0.25)] fixed z-1000 w-full backdrop-blur-md rounded-[10px] border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
            <div className="flex gap-3">
                <span>
                    {" "}
                    <img
                        className="w-[40px] sm:w-[50px]"
                        src={VoxLogo}
                        alt=""
                    />
                </span>
                <span>
                    {" "}
                    <img
                        className="w-[40px] sm:w-[50px]"
                        src={policiaCivilLogotipo}
                        alt=""
                    />
                </span>
            </div>

            <nav className="flex gap-10">
                <NavLink
                    to="/"
                    title="Sobre nós"
                    className={({ isActive }) =>
                        `relative px-4 py-2 text-white border-b-2 border-transparent hover:border-white focus:border-white ${
                            isActive ? "font-bold" : ""
                        } rounded-b-lg transition-all duration-200`
                    }
                >
                    Sobre Nós
                </NavLink>

                <NavLink
                    to="/contact"
                    title="Sobre nós"
                    className={({ isActive }) =>
                        `relative px-4 py-2 text-white border-b-2 border-transparent hover:border-white focus:border-white ${
                            isActive ? "font-bold" : ""
                        } rounded-b-lg transition-all duration-200`
                    }
                >
                    Contato
                </NavLink>
            </nav>

            <div className="flex gap-3">
                <span>
                    {" "}
                    <img className="w-[40px] sm:w-[60px]" alt="" />
                </span>
                <span>
                    {" "}
                    <img className="w-[40px] sm:w-[60px]" alt="" />
                </span>
            </div>
        </header>
    );
}
