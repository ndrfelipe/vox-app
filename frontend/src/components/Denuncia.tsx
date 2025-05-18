import React from "react";

export default function Denuncia() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 w-full">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800 animate-fade-in">
          Fazer uma Denúncia Anônima
        </h1>
        <form className="flex flex-col space-y-5">
          <input
            type="text"
            placeholder="Título da denúncia"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-shadow duration-300 shadow-sm hover:shadow-md"
          />
          <textarea
            placeholder="Descreva a denúncia"
            rows={6}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-shadow duration-300 shadow-sm hover:shadow-md"
          ></textarea>
          <input
            type="file"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-shadow duration-300 shadow-sm hover:shadow-md"
          />
          <button
            type="submit"
            className="mt-4 bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-300 transform hover:-translate-y-1"
          >
            Enviar Denúncia
          </button>
        </form>
      </div>
    </div>
  );
}