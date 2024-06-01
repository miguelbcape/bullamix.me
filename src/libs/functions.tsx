import { URL_ROOT } from "./config";

//funcion para verificar si es una url de youtube
export const isYouTubeURL = (url: string) => {
  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(c\/.+\/|channel\/.+\/|user\/.+\/|watch\?v=.+|embed\/.+|shorts\/.+)|youtu\.be\/.+)$/;
  return youtubeRegex.test(url);
};

//funcion para obtener la id de youtube
export const getYouTubeVideoId = (url: string) => {
  const youtubeIdRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(c\/.+\/|channel\/.+\/|user\/.+\/|watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})$/;
  const match = url.match(youtubeIdRegex);
  return match && match[5];
};

export const clean = (value: string) => {
  return value.replace(/\s+/g, "-");
};

export const searchLink = (value: string) => {
  return URL_ROOT + "/search/" + clean(value);
};

export const videoLink = (value: string) => {
  return URL_ROOT + "/video/" + value;
};
