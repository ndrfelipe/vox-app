import VoxLogo from "/vox-logo.png";
import AppPrint from "/app-print.png";

import { NavLink } from "react-router-dom";

export default function About() {
    return (
        <main>
            <section className="flex flex-col justify-center items-center text-white h-screen text-center">
                <img src={VoxLogo} alt="" className="w-[150px]" />
                <h1 className="text-[96px] text-shadow-lg font-bold bg-linear-to-r from-blue-700 to-gray-500 bg-clip-text text-transparent font-bold">
                    Vox
                </h1>
                <h2 className="text-[64px]">
                    Fale com a{" "}
                    <span className="bg-linear-to-r from-white to-yellow-500 bg-clip-text text-transparent font-bold">
                        Polícia Civil
                    </span>{" "}
                    de forma <br />{" "}
                    <span className="bg-linear-to-r from-white to-blue-500 bg-clip-text text-transparent font-bold">
                        moderna
                    </span>{" "}
                    e{" "}
                    <span className="bg-linear-to-r from-white to-purple-500 bg-clip-text text-transparent font-bold">
                        rápida
                    </span>
                    .
                </h2>
                <h3 className="text-[28px] font-bold mt-[20px]">
                    ChatBot Humanizado da Polícia Civil de Pernambuco
                </h3>
            </section>
            <section className="text-white flex justify-center gap-10 px-20 py-10 my-[48px]">
                <div>
                    <p className="text-[38px] font-bold">Converse com o Vox!</p>
                    <p className="text-shadow-white text-[24px] mt-10">
                        Seu novo canal direto com a Polícia Civil, simples,
                        rápido e humanizado.
                    </p>
                </div>
                <img
                    src={AppPrint}
                    alt="Print do App"
                    className="w-160 rounded border border-white shadow-lg shadow-white"
                />
            </section>
            <section className="text-center flex flex-col justify-center items-center gap-4">
                <p className="text-white font-bold text-[32px]">
                    O Vox te ajuda com:
                </p>
                <div className="flex flex-col text-start bg-white/15 backdrop-blur-md rounded-[10px] border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] w-6/10 p-4 rounded gap-4">
                    <details className=" rounded m-1/2 border p-2 hover:shadow-lg bg-white">
                        <summary className="cursor-pointer">
                            Registro de BO
                        </summary>
                        <p className="bg-gray-300 p-4">
                            Orientação sobre como registrar um boletim de
                            ocorrência online ou presencialmente.
                        </p>
                    </details>
                    <details className=" rounded m-1/2 border-solid border p-2 hover:shadow-lg bg-white">
                        <summary className="cursor-pointer">
                            Localização e Contato das Unidades
                        </summary>
                        <p className="bg-gray-300 p-4">
                            Informações sobre endereços, telefones e horários de
                            funcionamento das delegacias e demais unidades da
                            Polícia Civil.
                        </p>
                    </details>
                    <details className=" rounded m-1/2 border-solid border p-2 hover:shadow-lg bg-white">
                        <summary className="cursor-pointer">
                            Denúncias Online
                        </summary>
                        <p className="bg-gray-300 p-4">
                            Canal para denúncias anônimas e acompanhamento do
                            andamento das denúncias.
                        </p>
                    </details>
                    <details className=" rounded m-1/2 border-solid border p-2 hover:shadow-lg bg-white">
                        <summary className="cursor-pointer">
                            Avaliação do Atendimento
                        </summary>
                        <p className="bg-gray-300 p-4">
                            Coleta de feedback dos cidadãos sobre a qualidade do
                            atendimento prestado.
                        </p>
                    </details>
                    <details className=" rounded m-1/2 border-solid border p-2 hover:shadow-lg bg-white">
                        <summary className="cursor-pointer">
                            Agendamento de Atendimentos Físicos
                        </summary>
                        <p className="bg-gray-300 p-4">
                            Sistema de marcação de horários para atendimento
                            presencial, reduzindo filas e tempo de espera.
                        </p>
                    </details>
                    <details className=" rounded m-1/2 border-solid border p-2 hover:shadow-lg bg-white">
                        <summary className="cursor-pointer">
                            Atividades Licenciadas
                        </summary>
                        <p className="bg-gray-300 p-4">
                            Informações sobre processos de licenciamento de
                            atividades previstas na Lei 7550/77.
                        </p>
                    </details>
                    <details className=" rounded m-1/2 border-solid border p-2 hover:shadow-lg bg-white">
                        <summary className="cursor-pointer">
                            Dicas de Segurança
                        </summary>
                        <p className="bg-gray-300 p-4">
                            Divulgação de informações preventivas sobre
                            segurança pública para a população.
                        </p>
                    </details>
                </div>
            </section>
            <section className="flex flex-col justify-center gap-10 text-center text-white p-4 h-[50vh]">
                <p className="text-[48px] font-bold">
                    Fale com a Polícia Civil. Estamos aqui para ajudar.
                </p>
                <div>
                    <NavLink
                        to="/chatbot"
                        className="bg-linear-to-r from-blue-400 to-blue-900 p-4 rounded shadow-white border border-white transform hover:scale-110 transition duration-300"
                    >
                        Falar com o Vox
                    </NavLink>
                </div>
            </section>
        </main>
    );
}
