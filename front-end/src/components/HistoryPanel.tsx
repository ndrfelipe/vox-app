import { useEffect, useState } from "react";
import axios from "axios";

interface Message {
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

interface HistoryPanelProps {
  senderId: string;
}

export default function HistoryPanel({ senderId }: HistoryPanelProps) {
  const [history, setHistory] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/history/${senderId}`);
        setHistory(response.data);
      } catch (err) {
        setError("Erro ao buscar histórico.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [senderId]);

  if (loading) return <p className="p-4">Carregando histórico...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="p-4 w-full">
      <h2 className="text-xl font-bold mb-4">Histórico de Conversas</h2>
      <ul className="space-y-2">
        {history.map((msg, index) => (
          <li
            key={index}
            className={`p-3 rounded shadow w-fit max-w-[80%] ${
              msg.sender === "user" ? "bg-blue-100 self-end ml-auto" : "bg-gray-100"
            }`}
          >
            <p className="text-sm text-gray-700">{msg.text}</p>
            <span className="block text-xs text-gray-400 mt-1">
              {new Date(msg.timestamp).toLocaleString("pt-BR")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
