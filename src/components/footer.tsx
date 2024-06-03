import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 py-4 mt-auto text-sm">
      <nav className="mt-2">
        <ul className="flex flex-wrap items-center justify-center font-bold">
          <li>
            <Link className="block p-2 text-indigo-900 hover:underline" href="/terminos-de-uso" title="términos de uso">
              Términos de uso
            </Link>
          </li>
          <li>
            <Link className="block p-2 text-indigo-900 hover:underline" href="/politica-de-privacidad" title="política de privacidad">
              Política de privacidad
            </Link>
          </li>
          <li>
            <Link className="block p-2 text-indigo-900 hover:underline" href="/contacto" title="contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <p className="font-bold">@ 2024 derechos reservados por BullaMix</p>
    </footer>
  );
}
