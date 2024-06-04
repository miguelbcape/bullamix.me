"use client";
import React, { useEffect, useState, useRef } from "react";
import LoadingVideo from "@/components/loadingVideo";

interface Data {
  value: string;
}

interface VideoData {
  thumbnail: string;
  title: string;
  duration: string;
}

export default function VideoId({ value }: Data) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<VideoData | null>(null);
  const [hidden, setHidden] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState("audio");
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const api_uri = "https://apis.noimgs.net/yt/details?id=" + value;
        const response = await fetch(api_uri);
        const data = await response.json();
        setData(data);
        setLoading(false);

        // Realizar el scroll hacia los resultados después de que se carguen
        if (resultsRef.current) {
          const elementTop = resultsRef.current.getBoundingClientRect().top;
          const newPosition = elementTop - 15; // Disminuir 15px de la posición
        
          window.scrollTo({
            top: newPosition,
            behavior: "smooth",
          });
        }
      } catch (error) {}
    };

    fetchData();
  }, [value]);

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <>
      {loading ? (
        <LoadingVideo />
      ) : (
        <>
          {data && (
            <div
              className="bg-slate-50 rounded-lg p-4 grid gap-4 md:p-6 md:grid-cols-[200px,_1fr] lg:gap-6 lg:grid-cols-[290px,_1fr]"
              ref={resultsRef}
            >
              <aside>
                <div className="relative grid gap-2">
                  <figure className="relative">
                    <img
                      alt={data.title}
                      width="480"
                      height="360"
                      decoding="async"
                      className="w-full rounded-lg aspect-thumb"
                      src={data.thumbnail}
                    />
                    <button
                      className="absolute flex items-center justify-center inset-0 w-full h-full rounded-lg bg-[rgba(0,0,0,.6)] transition-opacity duration-100 ease-out opacity-0 hover:opacity-100"
                      onClick={toggleHidden}
                    >
                      <img
                        src="/assets/play.svg"
                        alt=""
                        className="w-[40px] opacity-80"
                      />
                    </button>
                  </figure>
                </div>
                {hidden && (
                  <div data-name="modal">
                    <div className="fixed inset-0 z-50 flex p-4">
                      <div className="relative z-20 w-full max-w-2xl m-auto bg-white rounded modal-cn">
                        <div className="flex items-center gap-4 p-4 border-b modal-hd border-slate-200">
                          <div className="flex-1 font-bold text-indigo-900">
                            {data.title}
                          </div>
                          <button
                            className="flex-none w-10 h-10 text-red-500 btn bg-red-50"
                            onClick={toggleHidden}
                          >
                            <svg className="ic">
                              <use href="/assets/ic.svg#ic-close"></use>
                            </svg>
                          </button>
                        </div>
                        <div className="m-4">
                          <iframe
                            src={`https://ymusik.github.io/?videoId=${value}`}
                            width="100%"
                            height="315"
                            scrolling="no"
                            frameBorder="none"
                            allow="autoplay"
                          ></iframe>
                        </div>
                      </div>
                      <div className="fixed inset-0 z-10 bg-black modal-ov bg-opacity-80"></div>
                    </div>
                  </div>
                )}
              </aside>
              <aside className="grid">
                <p className="font-bold text-indigo-900 truncate lg:text-lg">
                  {data.title}
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <svg className="ic">
                    <use href="/assets/ic.svg#ic-clock"></use>
                  </svg>
                  <span className="mr-1" data-name="duration">
                    Duración {data.duration} min
                  </span>
                </p>
                <div className="pt-3 mt-auto">
                  <ul className="flex gap-2 text-indigo-900">
                    <li>
                      <button
                        className={`btn rounded px-4 py-2 text-sm font-bold ${
                          selectedTab === "audio"
                            ? "bg-indigo-900 bg-opacity-10"
                            : ""
                        }`}
                        onClick={() => handleTabClick("audio")}
                      >
                        Audio
                      </button>
                    </li>
                    <li>
                      <button
                        className={`btn rounded px-4 py-2 text-sm font-bold ${
                          selectedTab === "video"
                            ? "bg-indigo-900 bg-opacity-10"
                            : ""
                        }`}
                        onClick={() => handleTabClick("video")}
                      >
                        Video
                      </button>
                    </li>
                  </ul>
                  <div>
                    <iframe
                      src={`https://button.noimgs.net/es/mp3/${value}`}
                      className={`w-full h-[80px] mt-2 rounded-md lg:h-[60px] ${
                        selectedTab !== "audio" && "hidden"
                      }`}
                    ></iframe>
                    <iframe
                      src={`https://button.noimgs.net/es/mp4/${value}`}
                      className={`w-full h-[80px] mt-2 rounded-md lg:h-[60px] ${
                        selectedTab !== "video" && "hidden"
                      }`}
                    ></iframe>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </>
      )}
    </>
  );
}
