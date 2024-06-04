"use client";
import { SITE } from "@/libs/config";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [ismenu, setMenu] = useState<boolean>(false);
  //const [islang, setLang] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenu(!ismenu);
  };

  // const toggleLang = () => {
  //   setLang(!islang);
  // };

  return (
    <header className="w-full bg-indigo-900 text-slate-50 sm:bg-white sm:text-indigo-900 z-10">
      <div className="flex items-center justify-between order-first flex-wrap gap-4 text-sm lg:gap-8 lg:max-w-5xl p-3 w-full mx-auto">
        <button
          className="btn -ml-2 h-10 w-10 lg:hidden"
          data-name="mobile-btn"
          type="button"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span>
            <svg data-name="closed" className="ic text-l">
              <use
                href={`/assets/ic.svg#${ismenu ? "ic-close" : "ic-menu"}`}
              ></use>
            </svg>
          </span>
          <span className="sr-only">menu</span>
        </button>
        <Link
          className="flex flex-row items-center justify-center gap-3"
          href="/"
          title={SITE}
        >
          <img
            className="w-[28px] lg:w-[35px]"
            src="/assets/logo.svg"
            title="Descargar Musica"
          />
          <span className="font-semibold text-xl lg:text-2xl lg:font-extrabold">{SITE}</span>
        </Link>
        <nav
          className={`order-last w-full ${
            ismenu ? "" : "hidden"
          } lg:order-none lg:block lg:w-auto lg:items-center`}
        >
          <ul className="flex flex-col gap-x-2 font-bold text-white sm:text-indigo-900 lg:flex-row lg:items-center">
            <li>
              <Link
                title="Descargar Musica"
                className="flex h-10 items-center rounded px-4 hover:bg-indigo-900 hover:bg-opacity-10"
                href="/"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                title="YouTube a MP3"
                className="flex h-10 items-center rounded px-4 hover:bg-indigo-900 hover:bg-opacity-10"
                href="/youtube-a-mp3"
                onClick={toggleMenu}
              >
                YouTube a MP3
              </Link>
            </li>
            <li>
              <Link
                title="YouTube a MP4"
                className="flex h-10 items-center rounded px-4 hover:bg-indigo-900 hover:bg-opacity-10"
                href="/descargar-videos-de-youtube"
                onClick={toggleMenu}
              >
                Descargar Videos de YouTube
              </Link>
            </li>
          </ul>
        </nav>
        <div className="relative z-20">
          <button
            type="button"
            className="btn h-10 text-current sm:text-slate-500 text-[15px]"
            aria-label="Idioma"
            //onClick={toggleLang}
          >
            <svg className="ic">
              <use href="/assets/ic.svg#ic-lang"></use>
            </svg>
            <span className="hidden font-semibold	sm:block">Español</span>
            <svg className="ic">
              <use href="/assets/ic.svg#ic-down"></use>
            </svg>
          </button>
          {/* {islang ? (
            <div>
              <ul className="absolute right-0 top-full z-20 mt-2 w-40 rounded border border-slate-200 bg-white px-2 py-4 text-sm shadow-md">
                <li>
                  <Link
                    href="/"
                    className="block rounded px-4 py-2 text-indigo-900 hover:bg-indigo-900 hover:bg-opacity-10 font-medium"
                  >
                    Español
                  </Link>
                </li>
              </ul>
              <div
                className="fixed inset-0 bg-transparent"
                onClick={toggleLang}
              ></div>
            </div>
          ) : (
            ""
          )} */}
        </div>
      </div>
    </header>
  );
}
