import { SITE } from "@/libs/config";

export default function FaqHome() {
  return (
    <div className="p-6 text-indigo-200 bg-indigo-900 rounded-xl">
      <div className="mb-4 text-2xl font-bold text-white text-center">Preguntas Frecuentes</div>

      <div className="my-4">
        <p className="font-semibold text-slate-100">¿Dónde puedo descargar música gratis?</p>
        <p className="gap-2 mt-1">Puedes descargar música de diversas plataformas en línea que ofrecen música gratuita y libre de derechos de autor, como bibliotecas de música gratuita, sitios web de artistas emergentes y servicios de transmisión de música con opciones gratuitas una de ellas es {SITE}.</p>
      </div>

      <div className="my-4">
        <p className="font-semibold text-slate-100">¿Cómo puedo descargar música gratis en mi dispositivo móvil?</p>
        <p className="gap-2 mt-1">Puedes descargar música gratis en tu dispositivo móvil utilizando aplicaciones de música gratuitas que ofrecen descargas offline, como {SITE} (no necesitas suscripción), SoundCloud, Audiomack y Bandcamp, entre otras.</p>
      </div>

      <div className="my-4">
        <p className="font-semibold text-slate-100">¿Qué tipo de música puedo descargar gratis?</p>
        <p className="gap-2 mt-1">Puedes encontrar una amplia variedad de géneros musicales disponibles para descarga gratuita, desde música indie y música electrónica hasta música clásica y música pop. Muchos artistas emergentes también ofrecen su música de forma gratuita como una forma de promoción.</p>
      </div>
    </div>
  );
}
