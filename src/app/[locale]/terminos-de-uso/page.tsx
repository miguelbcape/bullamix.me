import {SITE, URL_ROOT} from "@/libs/config"

export async function generateMetadata() {
    const ti = `Términos de uso de nuestro sitio web ~ ${SITE}.`;
    const de = `Antes de utilizar nuestros servicios, por favor, lea detenidamente estos términos de uso.`;
    const ke = "";
    return {
      title: ti,
      description: de,
      keywords: ke,
      authors: [{ name: `${SITE}` }],
      publisher: SITE,
      alternates: {
        canonical: URL_ROOT + "/terminos-de-uso'",
      },
      src: [
        {
          url: "/assets/ogg.jpg",
          width: 768,
          height: 432,
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
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      openGraph: {
        title: ti,
        description: de,
        url: URL_ROOT,
        siteName: SITE,
        images: [
          {
            url: "/assets/ogg.jpg",
            width: 768,
            height: 432,
            alt: SITE,
          },
        ],
        locale: "es",
        type: "website",
      },
    };
  }

export default function TermPage() {
  return (
    <section className="py-4">
      <h1 className="mx-auto text-2xl font-extrabold leading-snug text-indigo-900 text-center mb-4">
      Términos de uso
      </h1>
      <div className="p-6 mt-6 prose border rounded-lg border-slate-200">
        <p className="my-2">
        Bienvenido a {SITE}, una plataforma creada con fines recreativos para compartir contenido permitido por los derechos de autor. Antes de utilizar nuestros servicios, por favor, lee detenidamente estos términos de uso.
        </p>
        <p className="my-2"><strong>1. Aceptación de los Términos</strong></p>
        <p className="my-2">Al acceder y utilizar {SITE}, aceptas cumplir con estos términos de uso. Si no estás de acuerdo con alguno de los términos, te instamos a que no utilices nuestra plataforma.</p>
        <p className="my-2"><strong>2. Uso Permitido</strong></p>
        <p className="my-2">{SITE} permite la descarga y distribución de contenido solo para el cual posees los derechos de autor o que está disponible para su descarga legal y permitida. No se permite el uso de nuestro servicio para la descarga, distribución o promoción de contenido que viole los derechos de autor u otras leyes aplicables.</p>
        <p className="my-2"><strong>3. Responsabilidad del Usuario</strong></p>
        <p className="my-2">Eres el único responsable de garantizar que el contenido que descargas y compartes a través de {SITE} cumple con los derechos de autor y otras leyes aplicables. No nos responsabilizamos por el uso inadecuado del contenido descargado por parte de los usuarios.</p>
        <p className="my-2"><strong>4. Derechos de Autor y Propiedad Intelectual</strong></p>
        <p className="my-2">Respetamos los derechos de autor y la propiedad intelectual. Si eres propietario de los derechos de algún contenido y consideras que ha sido compartido de manera no autorizada en nuestra plataforma, contáctanos de inmediato para que podamos abordar el problema.</p>
        <p className="my-2"><strong>5. Modificaciones de los Términos</strong></p>
        <p className="my-2">Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigencia tan pronto como se publiquen en el sitio. Es tu responsabilidad revisar periódicamente estos términos para estar al tanto de las actualizaciones.</p>
        <p className="my-2">Al utilizar {SITE} aceptas estos términos y te comprometes a utilizar nuestros servicios de manera ética y legal. Apreciamos tu colaboración para mantener una comunidad respetuosa de los derechos de autor y las leyes aplicables.</p>
        <p className="my-2">Fecha de vigencia: 01/06/2024</p>
      </div>
    </section>
  )
}
