import { LIMIT_RESULT } from "@/libs/config"

export default function LoadingVideo() {
  // Array para almacenar los elementos li
  const items = [];

  // Loop para agregar elementos li al array
  for (let i = 0; i < 1; i++) {
    items.push(
      <li key={i}>
        <div className="mx-auto rounded-lg bg-slate-50 p-4">
          <div className="bg-slate-300 mx-auto aspect-[16/9] max-h-[220px] rounded-lg"></div>
         <div className="w-full max-w-[390px] mx-auto">
         <div className="w-full my-3">
            <div className="bg-slate-300 rounded-full h-4"></div>
          </div>
          <div className="w-full my-3">
            <div className="w-3/4 bg-slate-300 rounded-full h-4"></div>
          </div>
         </div>
         <div className="w-full mt-6 max-w-[500px] mx-auto">
            <div className="w-full bg-slate-300 rounded-md h-20"></div>
          </div>
        </div>
      </li>
    );
  }
  return (
    <ul className="animate-pulse">
      {items}
    </ul>
  );
};