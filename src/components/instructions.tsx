interface Instruction {
    icon: string;
    number: number;
    text: string;
}

export default function Instructions({icon, number, text}: Instruction) {
  return (
    <li className="flex items-center gap-4">
      <span className="flex items-center self-start justify-center rounded-full w-14 h-14 bg-rose-500 bg-opacity-10 text-rose-500">
        <svg className="text-xl ic">
          <use href={`/assets/ic.svg#${icon}`}></use>
        </svg>
      </span>
      <span className="flex-1">
        <span className="mr-1 font-bold text-indigo-900">{number}.</span>
        <span>{text}</span>
      </span>
    </li>
  );
}
