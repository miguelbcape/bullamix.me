interface DataList {
    icon: string;
    title: string;
    subtitle: string;
}

export default function List({icon, title, subtitle}: DataList) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 bg-white rounded-full shadow-lg text-rose-500 shadow-slate-500/5">
        <svg className="text-5xl ic">
          <use href={`/assets/ic.svg#${icon}`}></use>
        </svg>
      </div>
      <h3 className="mb-2 text-lg font-extrabold text-indigo-900">{title}</h3>
      <h4>{subtitle}</h4>
    </div>
  );
}
