"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
//import { useRouter } from "next/navigation";
import { useRouter } from 'next-nprogress-bar';
import Input from "@/components/input";
import { getYouTubeVideoId, isYouTubeURL, searchLink, videoLink } from "@/libs/functions";
import Image from "next/image";

type Suggestion = [string, number, Array<number>];
type SuggestionsResponse = [string, Array<Suggestion>];

interface DataMode {
  mode: string;
}

export default function Form({mode}: DataMode) {
  const [searchInput, setSearchInput] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Array<string>>([]);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchInput) {
      displaySuggestions(searchInput);
    } else {
      setSuggestions([]);
    }
  }, [searchInput]);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>, search: string) => {
    e.preventDefault();

    if (isYouTubeURL(search)) {
      let videoId = getYouTubeVideoId(search);
      videoId = videoId ? videoId : '';
      router.push(videoLink(videoId));
      return;
    }

    router.push(searchLink(search));
  };

  const displaySuggestions = async (searchValue: string) => {
    const callbackName = "jsonpCallback_" + Date.now();
    const url = `https://suggestqueries.google.com/complete/search?jsonp=${callbackName}&q=${searchValue}&hl=en&ds=yt&client=youtube`;
    const script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);

    (window as any)[callbackName] = (data: SuggestionsResponse) => {
      if (data[1].length > 0) {
        setSuggestions(data[1].map((suggestion) => suggestion[0]));
      } else {
        setSuggestions([]);
      }
      document.head.removeChild(script);
      delete (window as any)[callbackName];
    };
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center relative py-8">
        <div className="container px-0">
          <h1 className="mx-auto text-2xl font-extrabold leading-snug text-center text-indigo-900 sm:max-w-lg sm:text-4xl sm:leading-snug md:max-w-2xl md:text-5xl md:leading-tight">
            {mode}
          </h1>
          <form
            className="relative gap-2 p-1 mt-4 rounded bg-gradient-to-r from-rose-600 to-orange-500 sm:flex sm:p-2 lg:mt-8"
            onSubmit={(e) => handleSubmit(e, searchInput)}
          >
            <label htmlFor="search" className="relative flex sm:flex-1">
              <span className="absolute items-center justify-center hidden w-12 h-12 opacity-50 left-2 top-2 sm:flex">
                <svg className="ic">
                  <use href="/assets/ic.svg#ic-search"></use>
                </svg>
              </span>
              <Input value={searchInput} onChange={handleInputChange} />
            </label>
            <button
              className="w-full h-12 px-4 mt-1 text-white btn group sm:mt-0 sm:h-16 sm:w-auto"
              type="submit"
            >
              <span className="font-bold text-sm uppercase">Iniciar</span>
              <svg
                className="transition ic group-hover:translate-x-1"
                aria-hidden="true"
              >
                <use href="/assets/ic.svg#ic-arrowr"></use>
              </svg>
            </button>
            {suggestions.length > 0 && (
              <div ref={suggestionsRef} className="absolute left-0 right-0 z-20 p-2 mt-2 overflow-auto bg-white border rounded shadow-md top-full max-h-80 border-slate-200">
                {suggestions.map((suggestion, index) => (
                  <button key={index} className="w-full px-4 py-2 text-left rounded hover:bg-slate-100" type="button" onClick={(e) => handleSubmit(e, suggestion)}>{suggestion}</button>
                ))}
              </div>
            )}
          </form>
          <Image
            className="absolute -left-24 bottom-12 -z-10 opacity-20 hidden lg:block"
            src="/assets/points.png"
            width={131}
            height={131}
            alt="points"
            title="points"
          />
          <Image
            className="absolute -right-[4rem] bottom-24 -z-10 hidden lg:block"
            src="/assets/arrow.png"
            width={142}
            height={147}
            alt="arrow"
            title="arrow"
          />
        </div>
        <p className="container max-w-3xl px-0 mt-4 text-center text-[.8rem] font-medium lg:text-sm">
          Al utilizar nuestro servicio, usted acepta cumplir nuestros{" "}
          <Link
            className={`ml-1 text-rose-700 font-bold hover:underline`}
            href="/terminos-de-uso"
            title="Términos de uso"
          >
            términos de uso
          </Link>
        </p>
      </section>
    </>
  );
}
