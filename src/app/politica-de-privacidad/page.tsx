import { SITE, URL_ROOT } from "@/libs/config";

export async function generateMetadata() {
  const ti = `Política de privacidad para nuestros usuarios ~ ${SITE}.`;
  const de = `Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la información proporcionada por los usuarios.`;
  const ke = "";
  return {
    title: ti,
    description: de,
    keywords: ke,
    authors: [{ name: `${SITE}` }],
    publisher: SITE,
    alternates: {
      canonical: URL_ROOT + "/politica-de-privacidad",
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

export default function Politica() {
  return (
    <section className="py-4">
      <h1 className="mx-auto text-2xl font-extrabold leading-snug text-indigo-900 text-center mb-4">
        Política de Privacidad
      </h1>
      <div className="p-6 mt-6 prose border rounded-lg border-slate-200">
        <p className="my-2">
          <strong>1. Introducción</strong>
        </p>
        <p className="my-2">
          Bienvenido a {SITE}. Nos comprometemos a proteger la privacidad de
          nuestros usuarios y a garantizar el manejo adecuado de la información
          personal. Esta política de privacidad describe cómo recopilamos,
          utilizamos y protegemos la información proporcionada por los usuarios.
        </p>
        <p className="my-2">
          <strong>2. Información Recopilada</strong>
        </p>
        <p className="my-2">
          <strong>2.1 Información Personal:</strong>
        </p>
        <p className="my-2">
          Recopilamos información personal, como nombre y dirección de correo
          electrónico, cuando los usuarios se registran en nuestro sitio o
          realizan descargas. Esta información es necesaria para proporcionar
          servicios personalizados y para la gestión de cuentas.
        </p>
        <p className="my-2">
          <strong>2.2 Información de Uso:</strong>
        </p>
        <p className="my-2">
          Recopilamos datos sobre el uso del sitio, incluyendo descargas
          realizadas, interacciones con el contenido y preferencias del usuario.
          Estos datos nos ayudan a mejorar la experiencia del usuario y a
          personalizar nuestros servicios.
        </p>
        <p className="my-2">
          <strong>3. Uso de la Información</strong>
        </p>
        <p className="my-2">
          Utilizamos la información recopilada para: Proporcionar y mejorar
          nuestros servicios, Personalizar la experiencia del usuario, Enviar
          comunicaciones relacionadas con el sitio y actualizaciones, Gestionar
          cuentas de usuario y garantizar la seguridad del sitio.
        </p>
        <p className="my-2">
          <strong>4. Compartir Información</strong>
        </p>
        <p className="my-2">
          No compartimos información personal con terceros, excepto cuando es
          necesario para cumplir con requisitos legales, proteger nuestros
          derechos o garantizar la seguridad del sitio. No vendemos ni
          alquilamos información personal a terceros con fines publicitarios.
        </p>
        <p className="my-2">
          <strong>5. Cookies y Tecnologías Similares</strong>
        </p>
        <p className="my-2">
          Utilizamos cookies y tecnologías similares para mejorar la
          funcionalidad del sitio y personalizar la experiencia del usuario. Los
          usuarios pueden gestionar las preferencias de cookies a través de la
          configuración de su navegador.
        </p>
        <p className="my-2">
          <strong>6. Seguridad de la Información</strong>
        </p>
        <p className="my-2">
          Tomamos medidas razonables para proteger la información del usuario.
          Sin embargo, no podemos garantizar la seguridad absoluta. Los usuarios
          son responsables de mantener la confidencialidad de sus credenciales
          de inicio de sesión.
        </p>
        <p className="my-2">
          <strong>7. Enlaces a Terceros</strong>
        </p>
        <p className="my-2">
          Nuestro sitio puede contener enlaces a sitios web de terceros. No
          somos responsables de las prácticas de privacidad de estos sitios y
          recomendamos revisar sus políticas de privacidad.
        </p>
        <p className="my-2">
          <strong>8. Cambios en la Política de Privacidad</strong>
        </p>
        <p className="my-2">
          Nos reservamos el derecho de actualizar esta política de privacidad.
          Los cambios entrarán en vigencia tan pronto como se publiquen en el
          sitio. Se alienta a los usuarios a revisar periódicamente esta
          política para estar informados sobre cómo protegemos la información
          personal.
        </p>
        <p className="my-2">
          <strong>9. Preguntas y Contacto</strong>
        </p>
        <p className="my-2">
          Si tienes preguntas sobre esta política de privacidad o la gestión de
          tu información personal, contacta con nosotros a través de contacto@
          {SITE}s.site.
        </p>
        <p className="my-2">
          Al utilizar {SITE}, aceptas los términos de esta política de
          privacidad.
        </p>
        <p className="my-2">Fecha de última actualización: 01/06/2024</p>
      </div>
    </section>
  );
}
