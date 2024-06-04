import HomeContent from "@/components/HomeContent";
import HomeTip from "@/components/FaqHome";

import Form from "@/components/form";
import Features from "@/components/features";
import Instructions from "@/components/instructions";
import List from "@/components/list";

import { URL_ROOT, SITE } from "@/libs/config"

export async function generateMetadata() {
  const ti = `${SITE} ~ Descarga Música Gratis en MP3`;
  const de = `En ${SITE} puedes DESCARGAR MÚSICA MP3 de tus canciones favoritas completamente GRATIS, no necesitas registrarte para bajar canciones a tu celular.`;
  const ke = 'bullamix, descargar musica, descargar musica mp3, descargar musica gratis, bajar musica, bajar musica gratis';
  return {
    title: ti,
    description: de,
    keywords: ke,
    authors: [{ name: `${SITE}` }],
    publisher: SITE,
    alternates: {
      canonical: URL_ROOT,
    },
    src: [
      {
        url: '/assets/ogg.jpg',
        width: 768,
        height: 432
      },
    ],
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: ti,
      description: de,
      url: URL_ROOT,
      siteName: SITE,
      images: [
        {
          url: '/assets/ogg.jpg',
          width: 768,
          height: 432,
          alt: SITE,
        },
      ],
      locale: 'es',
      type: 'website',
    },
  }
}

function HomePage() {
  return (
    <>
      <Form mode="Descargar Música Gratis"/>

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

export default HomePage;
