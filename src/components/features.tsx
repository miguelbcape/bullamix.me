interface Text {
  text: string;
}

function Features({ text }: Text) {
  return (
    <li className="flex items-center gap-4">
      <i
        aria-hidden="true"
        className="flex items-center self-start justify-center w-6 h-6 bg-indigo-900 rounded-3xl bg-opacity-10 before:w-2 before:h-2 before:rounded-lg before:bg-indigo-900 before:bg-opacity-20"
      ></i>
      <span className="flex-1">{text}</span>
    </li>
  );
}

export default Features;
