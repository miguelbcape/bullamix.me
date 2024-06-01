import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 py-4 mt-auto text-sm">
      <nav className="mt-2">
        <ul className="flex flex-wrap items-center justify-center font-bold">
          <li>
            <a className="block p-2 text-indigo-900 hover:underline" href="#">
              Términos de uso
            </a>
          </li>
          <li>
            <a className="block p-2 text-indigo-900 hover:underline" href="#">
              Política de privacidad
            </a>
          </li>
          <li>
            <a className="block p-2 text-indigo-900 hover:underline" href="#">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <p className="font-bold">@ 2024 derechos reservados por BullaMix</p>
    </footer>
  );
}
