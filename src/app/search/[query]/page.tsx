import HomeContent from "@/components/HomeContent";
import HomeTip from "@/components/HomeTip";
import Features from "@/components/features";
import Form from "@/components/form";
import Instructions from "@/components/instructions";
import List from "@/components/list";
import SearchQuery from "@/components/search";

interface Params {
  params: {
    query: string;
  };
}

export default function SearchPage({ params: { query } }: Params) {
  return (
    <>
      <Form />

      <section className="py-4">
        <SearchQuery value={query} />
      </section>

      <section className="py-4 text-center">
        <HomeContent />
      </section>

      <section className="grid gap-8 py-4 lg:py-8 md:grid-cols-2 lg:gap-16">
        <aside>
          <div className="text-base font-extrabold text-indigo-900 lg:text-xl">
            Instrucciones
          </div>
          <ul className="grid gap-6 mt-6">
            <Instructions icon="ic-search" number={1} text="Utiliza nuestro buscador de MP3 para encontrar tu canción preferida, o puedes pegar el enlace del video de YouTube."/>
            <Instructions icon="ic-select" number={2} text="Selecciona el resultado que más te guste de la lista y espera unos pocos segundos mientras preparamos tu descarga."/>
            <Instructions icon="ic-download" number={3} text="Finalmente presiona el botón de DESCARGAR para obtener tu música gratis en formato MP3."/>
          </ul>
        </aside>
        <aside>
          <div className="text-base font-extrabold text-indigo-900 lg:text-xl">
            Características
          </div>
          <ul className="grid gap-[.8rem] mt-6">
            <Features text="Descargas ilimitadas y siempre gratuitas." />
            <Features text="Máxima velocidad de descarga garantizada." />
            <Features text="No es necesario registrarse para descargar." />
            <Features text="Admite descargas en todos los formatos populares." />
            <Features text="Ofrecemos música de alta calidad para descargar." />
            <Features text="100% libre de virus y malware." />
            <Features text="Interfaz intuitiva y fácil de usar." />
          </ul>
        </aside>
      </section>

      <section className="py-4">
        <div className="bg-slate-50 rounded-xl p-8 gap-8 grid grid-cols-[repeat(auto-fill,_minmax(min(230px,_100%),_1fr))]">
          <List icon="ic-gift" title="Descarga Gratuita" subtitle="Conversión ilimitada y descarga gratuita."/>
          <List icon="ic-playvideo" title="Video y Audio" subtitle="Descarga Directamente Video y Música."/>
          <List icon="ic-downloadbox" title="Descarga Fácil" subtitle="Totalmente compatible con todos los navegadores."/>
        </div>
      </section>

      <section className="py-4">
        <HomeTip />
      </section>
    </>
  );
}
