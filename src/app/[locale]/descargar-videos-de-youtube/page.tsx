import Mp4Content from "@/components/Mp4Content";
import Form from "@/components/form";
import Features from "@/components/features";
import Instructions from "@/components/instructions";
import List from "@/components/list";

import { URL_ROOT, SITE } from "@/libs/config"
import FaqMp4 from "@/components/FaqMp4";

export async function generateMetadata() {
  const ti = `Descargar Videos de YouTube en HD ~ ${SITE}`;
  const de = `${SITE} es un convertidor gratuito de YOUTUBE a MP4, descargue videos de Youtube en formato mp4, sin necesidad de instalar software.`;
  const ke = 'bullamix, youtube a mp4, convertir videos de youtube a mp4';
  return {
    title: ti,
    description: de,
    keywords: ke,
    authors: [{ name: `${SITE}` }],
    publisher: SITE,
    alternates: {
      canonical: URL_ROOT + '/descargar-videos-de-youtube',
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

function YoutubePage() {
  return (
    <>
      <Form mode="Descargar Videos de YouTube"/>

      <section className="py-4 text-center">
        <Mp4Content />
      </section>

      <section className="grid gap-8 py-4 lg:py-8 md:grid-cols-2 lg:gap-16">
        <aside>
          <div className="text-base font-extrabold text-indigo-900 lg:text-xl">
            Instrucciones
          </div>
          <ul className="grid gap-6 mt-6">
            <Instructions icon="ic-search" number={1} text="Utiliza nuestro buscador de videos para encontrar tu preferida, o puedes pegar el enlace del video de YouTube."/>
            <Instructions icon="ic-select" number={2} text="Selecciona el resultado que más te guste de la lista y espera unos pocos segundos mientras preparamos tu descarga."/>
            <Instructions icon="ic-download" number={3} text="Finalmente presiona el botón de DESCARGAR para obtener tu video gratis en formato MP4."/>
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
          <List icon="ic-gift" title="Descarga gratis" subtitle="Conversión y descarga de videos de YouTube de manera ilimitada y siempre gratuita en la más alta calidad."/>
          <List icon="ic-playvideo" title="Rápido, fácil de usar" subtitle="Simplemente ingrese el enlace de YouTube o escriba para encontrar el video y podrá descargar video MP4."/>
          <List icon="ic-downloadbox" title="Alta velocidad" subtitle="Las velocidades de conversión y descarga son súper rápidas, hasta 1GB/s. No necesita esperar mucho para obtener archivos MP4."/>
        </div>
      </section>

      <section className="py-4">
        <FaqMp4 />
      </section>
    </>
  );
}

export default YoutubePage;
