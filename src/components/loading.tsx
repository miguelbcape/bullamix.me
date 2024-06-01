import { LIMIT_RESULT } from "@/libs/config"

export default function LoadingResult() {
  // Array para almacenar los elementos li
  const items = [];

  // Loop para agregar elementos li al array
  for (let i = 0; i < LIMIT_RESULT; i++) {
    items.push(
      <li key={i}>
        <div className="mx-auto aspect-[16/9] max-h-[220px]">
          <div className="bg-slate-300 mx-auto aspect-[16/9] max-h-[220px] rounded-lg"></div>
          <div className="w-full my-3">
            <div className="bg-slate-300 rounded-full h-4"></div>
          </div>
          <div className="w-10/12 my-3">
            <div className="bg-slate-300 rounded-full h-3"></div>
          </div>
        </div>
      </li>
    );
  }
  return (
    <ul className="animate-pulse grid grid-cols-1 grid-rows-auto gap-5 sm:grid-cols-2 md:grid-cols-3">
      {items}
    </ul>
  );
};