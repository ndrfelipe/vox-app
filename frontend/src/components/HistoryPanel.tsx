import React, { useState } from "react";

const conversasMock = [
  {
    id: 1,
    data: "2025-05-15",
    resumo: "Consulta sobre agendamento",
    mensagens: [
      "Olá, como posso agendar um atendimento?",
      "Você pode agendar pela seção 'Agendar'.",
    ],
  },
  {
    id: 2,
    data: "2025-05-14",
    resumo: "Denúncia anônima",
    mensagens: [
      "Gostaria de fazer uma denúncia anônima.",
      "Claro, você pode usar a aba 'Denunciar'.",
    ],
  },
  {
    id: 3,
    data: "2025-05-13",
    resumo: "Informação sobre documentos",
    mensagens: [
      "Quais documentos preciso levar para a delegacia?",
      "RG e comprovante de residência são suficientes na maioria dos casos.",
    ],
  },
];

export default function HistoryPanel({ senderId }) {
  const [conversaSelecionada, setConversaSelecionada] = useState(null);

  if (conversaSelecionada) {
    return (
      <div className="p-3 h-full overflow-y-auto">
        <button
          className="text-blue-600 mb-3 hover:underline"
          onClick={() => setConversaSelecionada(null)}
        >
          ← Voltar ao histórico
        </button>
        <h2 className="text-lg font-bold mb-2">{conversaSelecionada.resumo}</h2>
        <div className="text-sm text-gray-500 mb-4">{conversaSelecionada.data}</div>
        <div className="space-y-3">
          {conversaSelecionada.mensagens.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded border ${
                index % 2 === 0 ? "bg-gray-100 text-left" : "bg-blue-100 text-right"
              }`}
            >
              {msg}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-3 overflow-y-auto h-full">
      <h2 className="text-lg font-semibold mb-3 text-gray-700">Histórico de Conversas</h2>
      <ul className="space-y-2">
        {conversasMock.map((conversa) => (
          <li
            key={conversa.id}
            className="bg-white border rounded p-2 shadow-sm hover:bg-gray-100 cursor-pointer"
            onClick={() => setConversaSelecionada(conversa)}
          >
            <div className="text-sm text-gray-600">{conversa.data}</div>
            <div className="text-base text-gray-800">{conversa.resumo}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
