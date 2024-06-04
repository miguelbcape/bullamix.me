export default function LoadingVideo() {
  return (
    <div className="animate-pulse bg-slate-50 rounded-lg p-4 grid gap-4 md:p-6 md:grid-cols-[200px,_1fr] lg:gap-6 lg:grid-cols-[290px,_1fr]">
      <aside>
        <div className="relative grid gap-2">
          <figure>
            <div className="bg-slate-300 mx-auto aspect-[16/9] max-h-[220px] rounded-lg"></div>
          </figure>
        </div>
      </aside>
      <aside className="grid">
        <div className="w-full mb-3">
          <div className="bg-slate-300 rounded-full h-5"></div>
        </div>
        <div className="w-1/3">
          <div className="bg-slate-300 rounded-full h-3"></div>
        </div>

        <div className="pt-3 mt-auto">
          <div className="flex gap-2">
            <div className="w-[73px] bg-slate-300 rounded-md h-8"></div>
            <div className="w-[73px] bg-slate-300 rounded-md h-8"></div>
          </div>

          <div className="mt-3">
            <div className="w-full bg-slate-300 rounded-md h-[60px]"></div>
          </div>
        </div>
      </aside>
    </div>
  );
}
