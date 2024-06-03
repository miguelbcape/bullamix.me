"use client";
import React, { useEffect, useState } from "react";
import LoadingVideo from "@/components/loadingVideo";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Data {
  value: string;
}

interface VideoData {
  thumbnail: string;
  title: string;
  author: string;
  duration: string;
  // Otros campos que esperas recibir de la API
}

export default function VideoId({ value }: Data) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<VideoData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const api_uri = "https://apis.noimgs.net/yt/details?id=" + value;
        const response = await fetch(api_uri);
        const data = await response.json();
        setData(data);
        console.log(data);
        setLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, [value]);

   return (
    <>
      {loading ? (
        <LoadingVideo />
      ) : (
        <>
          {data && (
            <ul>
              <li>
                <div className="mx-auto rounded-lg bg-slate-50 p-4">
                  <div className="mx-auto aspect-[16/9] max-h-[220px] rounded-lg">
                    <LazyLoadImage
                      className="mx-auto aspect-[16/9] max-h-[220px] object-cover rounded-lg"
                      src={data.thumbnail}
                      alt={data.title}
                      effect="blur"
                      width="100%"
                    />
                  </div>
                  <div className="w-full max-w-[390px] mx-auto">
                    <div className="w-full mt-2">
                      <div className="text-base font-semibold text-indigo-900">{data.title}</div>
                    </div>
                    <div className="w-full flex items-center gap-3">
                      <div className="text-[14px] flex items-center gap-1"><strong>Autor: </strong>{data.author}</div>
                      <div className="text-[14px] flex items-center gap-1"><strong>Duración: </strong>{data.duration} min</div>
                    </div>
                  </div>
                  <div className="w-full mt-4 max-w-[500px] mx-auto">
                    <div className="w-full rounded-md h-20">
                      <iframe
                        src={`https://button.noimgs.net/es/mp3/${value}`}
                        className="w-full h-20 rounded-md"
                      ></iframe>
                    </div>
                    <div className="w-full rounded-md h-20 mt-[10px]">
                      <iframe
                        src={`https://button.noimgs.net/es/mp4/${value}`}
                        className="w-full h-20 rounded-md"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          )}
        </>
      )}
    </>
  );
}
