export default function HomeTip() {
  return (
    <div className="p-6 text-indigo-200 bg-indigo-900 rounded-xl">
      <div className="mb-2 text-2xl font-bold text-white">Sugerencia</div>
      <p>
        Optimiza tu búsqueda ingresando el nombre del artista seguido del título de la canción para resultados más precisos y rápidos.
      </p>
      <div className="flex items-center gap-2 p-2 mt-6 bg-white rounded-xl sm:rounded-full">
        <span className="flex items-center justify-center flex-none w-8 h-8 rounded-full bg-slate-100">
          <svg className="ic text-slate-400">
            <use href="/assets/ic.svg#ic-lock"></use>
          </svg>
        </span>
        <span className="flex-1 min-w-0 text-indigo-900 break-all">
          artista <span className="font-bold text-rose-700">+</span> cancion
        </span>
        <span className="flex items-center justify-center flex-none w-8 h-8 break-all rounded-full bg-emerald-50">
          <svg className="ic text-emerald-500">
            <use href="/assets/ic.svg#ic-check"></use>
          </svg>
        </span>
      </div>
      <ul className="grid gap-4 mt-6">
        <li className="flex items-center gap-4">
          <i className="flex items-center self-start justify-center w-6 h-6 bg-indigo-200 rounded-3xl bg-opacity-10 before:w-2 before:h-2 before:rounded-lg before:bg-indigo-200 before:bg-opacity-20"></i>
          <span className="flex-1">
            Con esta recomendación, encontrarás fácilmente la música que buscas.
          </span>
        </li>
        <li className="flex items-center gap-4">
          <i className="flex items-center self-start justify-center w-6 h-6 bg-indigo-200 rounded-3xl bg-opacity-10 before:w-2 before:h-2 before:rounded-lg before:bg-indigo-200 before:bg-opacity-20"></i>
          <span className="flex-1">
            Selecciona tu canción favorita y descargala en audio mp3 totalmente gratis.
          </span>
        </li>
      </ul>
    </div>
  );
}
