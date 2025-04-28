export default function ReadyQuestion({
  question,
  icon,
}: {
  question: string;
  icon: string;
}) {
  return (
    <div className="bg-white flex gap-10 items-center rounded-[8px] shadow-xl p-1">
      <p>{question}</p> <img className="w-[48px]" src={icon} />
    </div>
  );
}
