type ReadyQuestionsProps = {
  question: string;
  icon: string;
  onClick: (message:string) => void;
};

const ReadyQuestion: React.FC<ReadyQuestionsProps> = ({question, icon, onClick}) => {  
  return(
    <button
      onClick={() => onClick(question)}
      className="flex items-center gap-3 p-4 rounded-lg border border-gray-700 bg-gray-900 hover:bg-gray-700 cursor-pointer transition w-full text-left text-white"
    >
      <img src={icon} alt="ícone" className="w-6 h-6" />
      <span className="font-medium text-sm">{question}</span>
    </button>
  );
};

export default ReadyQuestion;