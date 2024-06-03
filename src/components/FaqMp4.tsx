import { SITE } from "@/libs/config";

export default function FaqMp4() {
  return (
    <div className="p-6 text-indigo-200 bg-indigo-900 rounded-xl">
      <div className="mb-4 text-2xl font-bold text-white text-center">Preguntas Frecuentes</div>

      <div className="my-4">
        <p className="font-semibold text-slate-100">¿Es legal descargar videos de YouTube para verlos sin conexión?</p>
        <p className="gap-2 mt-1">Sí, es legal descargar videos de YouTube siempre y cuando lo hagas para uso personal y no violes los términos de servicio de YouTube. Sin embargo, ten en cuenta que descargar videos con derechos de autor puede infringir los derechos de autor, por lo que es importante verificar la licencia del contenido antes de descargarlo.</p>
      </div>

      <div className="my-4">
        <p className="font-semibold text-slate-100">¿Cómo puedo descargar videos de YouTube de forma segura y legal?</p>
        <p className="gap-2 mt-1">Puedes descargar videos de YouTube de forma segura y legal utilizando aplicaciones y servicios que respeten los derechos de autor y los términos de servicio de YouTube. Hay varias herramientas en línea gratuitas y de pago que te permiten descargar videos de YouTube de manera segura y sin infringir los derechos de autor.</p>
      </div>

      <div className="my-4">
        <p className="font-semibold text-slate-100">¿Qué formatos de video puedo descargar de YouTube?</p>
        <p className="gap-2 mt-1">Puedes descargar videos de YouTube en una variedad de formatos, incluyendo MP4, FLV, WEBM, 3GP y más. Sin embargo, el formato disponible para descargar puede depender del video específico y de la herramienta que estés utilizando para la descarga. Es importante verificar las opciones de formato disponibles antes de iniciar la descarga.</p>
      </div>
    </div>
  );
}
