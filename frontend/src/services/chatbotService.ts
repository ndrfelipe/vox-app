export async function sendMessageToChatbot(message: string, senderId = "default-user") {
  try {
    const response = await fetch("http://localhost:3001/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, sender_id: senderId }),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar mensagem para o chatbot.");
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    return "Erro de comunicação com o servidor.";
  }
}

export async function fetchChatHistory(senderId = "default-user") {
  try {
    const response = await fetch(`http://localhost:3001/history/${senderId}`);

    if (!response.ok) {
      throw new Error("Erro ao buscar histórico.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar histórico:", error);
    return [];
  }
}