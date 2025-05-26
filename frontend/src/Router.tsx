import { Routes, Route } from "react-router-dom";
import Chatbot from "./pages/Chatbot";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {DefaultLayout} from "./layouts/DefaultLayout/DefaultLayout";

export function Router(){
    return (
        <Routes>
            {/* Futuramente implementado: rotas de  about e contact */}
            <Route path="/" element={<DefaultLayout />}> 
                <Route path="/" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
            
            <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
    )
}