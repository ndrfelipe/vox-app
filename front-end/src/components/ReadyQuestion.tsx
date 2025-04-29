export default function ReadyQuestion({
  question,
  icon,
}: {
  question: string;
  icon: string;
}) {
  return (
    <div className="bg-white flex gap-10 items-center text-left rounded-[8px] shadow-xl p-1 py-2">
      <p className="ml-2 font-medium">{question}</p> <img className="w-[48px]" src={icon} />
    </div>
  );
}
