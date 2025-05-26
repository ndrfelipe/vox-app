import React from "react";

export default function ChatInput({
  newMessage,
  setNewMessage,
  handleSend,
}: {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
}) {
  return (
    <>
     <div className="flex flex-col sm:flex-row items-center gap-2 bg-gray-900 shadow-xl rounded-[16px] w-full max-w-[800px] px-4 py-2">
  <input
    type="text"
    value={newMessage}
    className="flex-1 w-full px-4 py-2 border-0 rounded-full outline-none text-gray-200 text-sm sm:text-md bg-gray-900"
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      setNewMessage(e.target.value)
    }
    placeholder="Me diga, o que posso fazer por você?"
    onKeyDown={(e: React.KeyboardEvent) =>
      e.key === "Enter" && handleSend()
    }
  />
  <button
    onClick={handleSend}
    type="button"
    className="w-full sm:w-32 h-10 border-0 rounded-[16px] bg-gradient-to-r from-cyan-900 to-blue-500 text-white flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200"
  >
    <i className="far fa-paper-plane"></i>
    Enviar
  </button>
</div>
    </>
  );
}
