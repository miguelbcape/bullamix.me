import { SITE, URL_ROOT } from "@/libs/config";

export async function generateMetadata() {
  const ti = `Página de contacto y sugerencias ~ ${SITE}.`;
  const de = `Valoramos tu interés y estamos aquí para ayudarte. Si tienes preguntas, comentarios o necesitas asistencia, por favor, contáctanos.`;
  const ke = '';
  return {
    title: ti,
    description: de,
    keywords: ke,
    authors: [{ name: `${SITE}` }],
    publisher: SITE,
    alternates: {
      canonical: URL_ROOT + '/contacto',
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

export default function Contacto() {
  return (
    <section className="py-4">
      <h1 className="mx-auto text-2xl font-extrabold leading-snug text-indigo-900 text-center mb-4">
        Contacto
      </h1>
      <div className="p-6 mt-6 prose border rounded-lg border-slate-200">
        <p className="my-2">
          ¡Gracias por visitar {SITE}! Valoramos tu interés y estamos aquí para
          ayudarte. Si tienes preguntas, comentarios o necesitas asistencia, por
          favor, contáctanos a través de los siguientes medios:
        </p>
        <p className="my-2">
          <strong>1. Correo Electrónico:</strong>
        </p>
        <p className="my-2">
          Puedes enviarnos un correo electrónico a contacto_mp3@gmail.com. Nos
          esforzamos por responder a todos los correos electrónicos en un plazo
          de 24 horas, durante días laborables.
        </p>
        <p className="my-2">
          <strong>2. Formulario de Contacto:</strong>
        </p>
        <p className="my-2">
          Visita nuestra página de contacto para completar un formulario
          detallado. Proporcionar información específica nos ayudará a responder
          de manera más efectiva.
        </p>
        <p className="my-2">
          <strong>3. Redes Sociales:</strong>
        </p>
        <p className="my-2">
          Síguenos en nuestras redes sociales para estar al tanto de las últimas
          actualizaciones y noticias. También puedes enviarnos mensajes directos
          a través de estas plataformas.
        </p>
        <p className="my-2">
          <strong>4. Horario de Atención al Cliente:</strong>
        </p>
        <p className="my-2">
          Nuestro equipo de atención al cliente está disponible para ayudarte de
          9am hastas 6pm durante días laborables. Si nos contactas fuera de este
          horario, haremos nuestro mejor esfuerzo para responderte lo antes
          posible.
        </p>
        <p className="my-2">
          Apreciamos tu retroalimentación y estamos comprometidos a brindarte el
          mejor servicio posible. Gracias por elegir {SITE}.
        </p>
      </div>
    </section>
  );
}
