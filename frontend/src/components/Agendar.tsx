import React from "react";

export default function Agendar() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 w-full">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800 animate-fade-in">
          Agendamento de Atendimento
        </h1>
        <form className="flex flex-col space-y-5">
          <input
            type="text"
            placeholder="Nome completo"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow duration-300 shadow-sm hover:shadow-md"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow duration-300 shadow-sm hover:shadow-md"
          />
          <div className="flex space-x-4">
            <input
              type="date"
              className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow duration-300 shadow-sm hover:shadow-md"
            />
            <input
              type="time"
              className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow duration-300 shadow-sm hover:shadow-md"
            />
          </div>
          <select
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow duration-300 shadow-sm hover:shadow-md"
          >
            <option>Escolha uma unidade</option>
            <option>Delegacia Central</option>
            <option>Delegacia Zona Norte</option>
          </select>
          <button
            type="submit"
            className="cursor-pointer mt-4 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 transform hover:-translate-y-1"
          >
            Agendar
          </button>
        </form>
      </div>
    </div>
  );
}
