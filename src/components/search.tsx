"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LoadingResult from "@/components/loading";
import { videoLink } from "@/libs/functions";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Data {
  value: string;
}

export default function SearchQuery({ value }: Data) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const api_uri =
          "https://apis.noimgs.net/yt/search?lang=es&query=" + value;
        const response = await fetch(api_uri);
        const { results } = await response.json();
        setData(results);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingResult />
      ) : error ? (
        <div
          className="p-3 text-sm text-center rounded bg-rose-500 bg-opacity-10 text-rose-500"
          data-name="error-message"
        >
          <span className="font-bold">Ups...</span> No se encontraron
          resultados. Por favor, inténtelo de nuevo más tarde.
        </div>
      ) : (
        <ul className="grid grid-cols-1 grid-rows-auto gap-5 sm:grid-cols-2 md:grid-cols-3">
          {data.map((d) => (
            <li key={d.id} className="relative">
              <div className="searchBtn mx-auto aspect-[16/9] max-h-[220px]">
                <div className="relative">
                  <LazyLoadImage
                    className="mx-auto aspect-[16/9] max-h-[220px] object-cover rounded-lg"
                    src={d.thumbnail}
                    alt={d.title}
                    effect="blur"
                    width="100%"
                  />
                  <span className="absolute bottom-3 right-2 text-white font-medium bg-[rgba(0,0,0,.8)] rounded-md px-2 text-[.78rem]">
                    {d.duration}
                  </span>
                </div>
                <div className="mt-3 mb-1 text-sm font-semibold text-indigo-900 hover:text-rose-600">
                  <Link
                    href={videoLink(d.id)}
                    className="ytd-rich after:absolute after:inset-0"
                  >
                    {d.title}
                  </Link>
                </div>
                <div className="text-[13px]">
                  <span>{d.views}</span>
                  <span className="before:content-['•'] before:mx-1">
                    {d.uploaded}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
