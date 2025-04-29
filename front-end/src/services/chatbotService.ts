const API_URL = "http://localhost:4000/chat";

export const sendMessageToChatbot = async (message: string): Promise<string>  => {

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      return data.text || "Desculpe, não consegui entender sua mensagem."; // resposta do chat
      
    } catch (error) {
      console.error("Erro ao enviar mensagem para o chatbot:", error);
      return  "Desculpe, houve um erro ao se comunicar com o servidor.";
    }
  };
  