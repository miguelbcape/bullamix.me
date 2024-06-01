"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [hidden, setHidden] = useState<boolean>(false);

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <header className="w-full bg-indigo-900 text-slate-50 sm:bg-white sm:text-indigo-900">
      <div className="flex items-center justify-between gap-4 text-sm lg:gap-8 lg:max-w-5xl p-3 w-full mx-auto">
        <button
          className="btn -ml-2 h-10 w-10 lg:hidden"
          data-name="mobile-btn"
          type="button"
          aria-expanded="false"
        >
          <span>
            <svg data-name="closed" className="ic text-l">
              <use href="/assets/ic.svg#ic-menu"></use>
            </svg>
            {/* <svg data-name="opened" className="hidden ic text-lg text-rose-600">
              <use href="/assets/ic.svg#ic-close"></use>
            </svg> */}
          </span>
          <span className="sr-only">menu</span>
        </button>
        <Link
          className="flex flex-row items-center justify-center gap-3"
          href="/"
        >
          <img className="w-[28px] lg:w-[35px]" src="/assets/logo.svg" alt="" />
          <span className="font-extrabold text-xl lg:text-2xl">
            BullaMix
          </span>
        </Link>
        <nav className="order-last hidden w-full lg:order-none lg:block lg:w-auto lg:items-center">
          <ul className="flex flex-col gap-x-2 font-bold text-indigo-900 lg:flex-row lg:items-center">
            <li>
              <a
                title="YouTube to MP3"
                className="flex h-10 items-center rounded px-4 hover:bg-indigo-900 hover:bg-opacity-10"
                href="/"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                title="YouTube to MP3"
                className="flex h-10 items-center rounded px-4 hover:bg-indigo-900 hover:bg-opacity-10"
                href="/youtube-mp3"
              >
                YouTube a MP3
              </a>
            </li>
            <li>
              <a
                title="Download Shorts YouTube"
                className="flex h-10 items-center rounded px-4 hover:bg-indigo-900 hover:bg-opacity-10"
                href="/convertir-videos-a-mp3"
              >
                Convertir Videos a MP3
              </a>
            </li>
          </ul>
        </nav>
        <div className="relative z-20">
          <button
            type="button"
            className="btn h-10 text-current sm:text-slate-500 text-[15px]"
            onClick={toggleHidden}
          >
            <svg className="ic">
              <use href="/assets/ic.svg#ic-lang"></use>
            </svg>
            <span className="hidden font-semibold	sm:block">Español</span>
            <svg className="ic">
              <use href="/assets/ic.svg#ic-down"></use>
            </svg>
          </button>
          {hidden ? (
            <div>
              <ul className="absolute right-0 top-full z-20 mt-2 grid w-64 grid-cols-2 rounded border border-slate-200 bg-white p-4 text-sm shadow-md sm:w-96 sm:grid-cols-3">
                <li>
                  <a
                    href="/es"
                    className="block w-fit rounded px-4 py-2 text-indigo-900 hover:bg-indigo-900 hover:bg-opacity-10 hover:font-bold"
                  >
                    Español
                  </a>
                </li>
                <li>
                  <a
                    href="/en1"
                    className="block w-fit rounded px-4 py-2 text-indigo-900 hover:bg-indigo-900 hover:bg-opacity-10 hover:font-bold"
                  >
                    English
                  </a>
                </li>
              </ul>
              <div
                className="fixed inset-0 bg-transparent"
                onClick={toggleHidden}
              ></div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
}
