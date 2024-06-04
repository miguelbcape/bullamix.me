import Mp3Content from "@/components/Mp3Content";
import Form from "@/components/form";
import Features from "@/components/features";
import Instructions from "@/components/instructions";
import List from "@/components/list";

import { URL_ROOT, SITE } from "@/libs/config"
import FaqMp3 from "@/components/FaqMp3";

export async function generateMetadata() {
  const ti = `Convertidor de YouTube a MP3 Gratis ~ ${SITE}`;
  const de = `${SITE} es un convertidor gratuito de YOUTUBE a MP3, permite MP3 desde YouTube gratis en PC, iPhone y Android sin instalar software.`;
  const ke = 'bullamix, youtube a mp3, convertir videos de youtube a mp3';
  return {
    title: ti,
    description: de,
    keywords: ke,
    authors: [{ name: `${SITE}` }],
    publisher: SITE,
    alternates: {
      canonical: URL_ROOT + '/youtube-a-mp3',
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
      <Form mode="Convertidor de YouTube a MP3"/>

      <section className="py-4 text-center">
        <Mp3Content />
      </section>

      <section className="grid gap-8 py-4 lg:py-8 md:grid-cols-2 lg:gap-16">
        <aside>
          <div className="text-base font-extrabold text-indigo-900 lg:text-xl">
          Cómo convertir videos de YouTube a MP3 en línea gratis
          </div>
          <ul className="grid gap-6 mt-6">
            <Instructions icon="ic-search" number={1} text="Ingrese la URL del video de YouTube o la palabra clave en el cuadro de búsqueda y haga clic en BUSCAR."/>
            <Instructions icon="ic-select" number={2} text="Elija la mejor calidad deseada para su archivo MP3 con el botón verde."/>
            <Instructions icon="ic-download" number={3} text="Después de la conversión exitosa, haga clic en el botón DESCARGAR MP3 para obtener su archivo MP3."/>
          </ul>
        </aside>
        <aside>
          <div className="text-base font-extrabold text-indigo-900 lg:text-xl">
            Ventajas de {SITE}
          </div>
          <ul className="grid gap-[.8rem] mt-6">
            <Features text="Convierta y descargue archivos MP3 de YouTube sin restricciones." />
            <Features text="No es necesario instalar software ni registrarse para usar nuestro servicio." />
            <Features text="Nuestro convertidor de YouTube es 100% seguro y protegido." />
            <Features text="Funciona en todos los navegadores y dispositivos, sin importar cuál sea su preferencia." />
            <Features text="Convierta sus videos de YouTube a MP3 de alta calidad de forma gratuita, sin cargos ocultos." />
          </ul>
        </aside>
      </section>

      <section className="py-4">
        <div className="bg-slate-50 rounded-xl p-8 gap-8 grid grid-cols-[repeat(auto-fill,_minmax(min(230px,_100%),_1fr))]">
          <List icon="ic-gift" title="Conversión Rápida y Sencilla" subtitle="Convertir videos de YouTube a MP3 nunca ha sido tan fácil. Simplemente ingresa la URL del video que deseas convertir y haz clic en el botón Descargar. En cuestión de segundos, tendrás tus archivos MP3 listos para disfrutar."/>
          <List icon="ic-playvideo" title={`Calidad Garantizada con ${SITE}`} subtitle={`En ${SITE}, nos comprometemos a ofrecerte la mejor calidad de audio posible. Con nuestras opciones de conversión, puedes obtener tus MP3 en formatos de alta calidad, desde 64 kbps hasta impresionantes 320 kbps.`}/>
          <List icon="ic-downloadbox" title={`Convierte Sin Límites con ${SITE}`} subtitle={`¿Quieres convertir todos tus videos de YouTube a MP3 sin preocupaciones? ¡Con ${SITE}, puedes hacerlo sin límites! Nuestro servicio te permite convertir cualquier video de YouTube a MP3 de forma gratuita.`}/>
        </div>
      </section>

      <section className="py-4">
        <FaqMp3 />
      </section>
    </>
  );
}

export default YoutubePage;
