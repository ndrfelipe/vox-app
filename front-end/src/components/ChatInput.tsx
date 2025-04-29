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
      <div className="flex items-center bg-white shadow-xl rounded-[16px] w-[70%] h-[64px] px-2">
        <input
          type="text"
          value={newMessage}
          className="flex-1 px-4 py-2.5 border-0 rounded-full outline-none text-md bg-white"
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
          className="ml-2 w-32 h-10 border-0 rounded-[16px] bg-linear-to-r from-cyan-500 to-blue-500 text-white flex gap-[15%] items-center justify-center cursor-pointer transition-colors duration-200"
        >
          <i className="far fa-paper-plane"></i>
          Enviar
        </button>
      </div>
    </>
  );
}
