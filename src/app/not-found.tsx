import Link from "next/link";
import React from "react";

export async function generateMetadata() {
  const ti = `404: No se pudo encontrar esta página.`;
  return {
    title: ti,
  };
}

export default function NotFound() {
  return (
    <section className="relative py-4 flex items-center justify-center h-calcvh-200 lg:py-8">
      <div className="py-16 text-center">
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-indigo-900 sm:text-5xl">
          Página no encontrada.
        </h1>
        <p className="mt-4 text-base">
          Lo sentimos, no pudimos encontrar la página que estás buscando.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="px-6 py-3 font-bold rounded btn bg-slate-100 hover:bg-slate-200 hover:text-indigo-900"
          >
            Regresa a casa<span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
