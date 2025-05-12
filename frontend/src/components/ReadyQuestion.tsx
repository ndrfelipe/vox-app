type ReadyQuestionsProps = {
  question: string;
  icon: string;
  onClick: (message:string) => void;
};

const ReadyQuestion: React.FC<ReadyQuestionsProps> = ({question, icon, onClick}) => {  
  return(
    <button
      onClick={() => onClick(question)}
      className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition w-full text-left"
    >
      <img src={icon} alt="ícone" className="w-6 h-6" />
      <span className="font-medium text-sm">{question}</span>
    </button>
  );
};

export default ReadyQuestion;