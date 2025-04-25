import React from "react";

export default function ChatInput(
    {
        newMessage, 
        setNewMessage, 
        handleSend
    } : 
    {
        newMessage: string,
        setNewMessage: React.Dispatch<React.SetStateAction<string>>,
        handleSend: () => void

    }){
    return(
        <div className="flex items-center">
        <input
          type="text"
          value={newMessage}
          className="flex-1 px-4 py-2.5 border-0 rounded-full outline-none text-[22px] bg-white"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
          onKeyDown={(e: React.KeyboardEvent) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="ml-2 w-10 h-10 border-0 rounded-full bg-green-400 text-white flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-green-500">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    )
}