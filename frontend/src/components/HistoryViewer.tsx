
import MessageBubble from "./MessageBubble";
import type { Message } from "./Chatbox";

type Props = {
  messages: Message[];
  title?: string;
  onBack?: () => void;
};

export default function HistoryViewer({ messages }: Props) {
  return (
    <div className="flex flex-col flex-1 items-center w-full max-w-[1200px] mx-auto h-screen pb-5 px-4">
      <div className="w-full flex justify-start pt-4 px-[20%]">
       
      </div>

      <div className="w-full h-[80vh] px-[20%] overflow-y-auto pt-4">
        {messages.map((msg, index) => (
          <MessageBubble msg={msg} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}