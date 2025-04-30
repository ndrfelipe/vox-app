import type { Message } from "./Chatbox";

export default function MessageBubble({
  index,
  msg,
}: {
  index: number;
  msg: Message;
}) {
  return (
    <div
      key={index}
      className={`max-w-[70%] px-3 py-2 mb-3 rounded-lg relative break-words shadow-sm ${msg.sender == "bot" ? "bg-transparent mr-auto" : "bg-gray-300 ml-auto"}`}
    >
      <p className="text-0.75">{msg.text}</p>
      <p className="text-xs text-[#667781] text-right mt-1">
        {msg.timestamp?.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
}
