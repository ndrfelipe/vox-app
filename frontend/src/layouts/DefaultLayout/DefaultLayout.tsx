import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
 

export function DefaultLayout(){
    return(
        <div className="flex flex-col min-h-screen bg-[linear-gradient(to_bottom,_#08101A_0%,_#182A56_77%,_#1E3A8A_100%)]">
            <Header />
            <Outlet />
        </div>
    )
}