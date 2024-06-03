import { SITE } from "@/libs/config";

export default function FaqMp3() {
  return (
    <div className="p-6 text-indigo-200 bg-indigo-900 rounded-xl">
      <div className="mb-4 text-2xl font-bold text-white text-center">Preguntas Frecuentes</div>

      <div className="my-4">
        <p className="font-semibold text-slate-100">¿Cómo puedo convertir un video de YouTube a MP3?</p>
        <p className="gap-2 mt-1">Puedes convertir un video de YouTube a MP3 utilizando herramientas en línea gratuitas como {SITE}. Simplemente copia la URL del video de YouTube, pégala en el convertidor y elige la calidad de MP3 que deseas. Luego, descarga el archivo convertido y ¡listo!</p>
      </div>

      <div className="my-4">
        <p className="font-semibold text-slate-100">¿Puedo convertir videos de YouTube a MP3 en mi teléfono móvil?</p>
        <p className="gap-2 mt-1">Sí, muchos convertidores en línea son compatibles con dispositivos móviles y te permiten convertir videos de YouTube a MP3 directamente desde tu teléfono inteligente o tableta. Solo necesitas una conexión a Internet y un navegador web.</p>
      </div>

      <div className="my-4">
        <p className="font-semibold text-slate-100">¿Necesito instalar algún software para convertir videos de YouTube a MP3?</p>
        <p className="gap-2 mt-1">No, puedes convertir videos de YouTube a MP3 en línea sin necesidad de instalar ningún software adicional. Hay varios convertidores en línea gratuitos disponibles que te permiten hacerlo fácilmente desde tu navegador web.</p>
      </div>
    </div>
  );
}
