import { URL_ROOT } from "./config";

//funcion para verificar si es una url de youtube
export const isYouTubeURL = (url: string) => {
  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(c\/.+\/|channel\/.+\/|user\/.+\/|watch\?v=.+|embed\/.+|shorts\/.+)|youtu\.be\/.+)$/;
  return youtubeRegex.test(url);
};

//funcion para obtener la id de youtube
// export const getYouTubeVideoId = (url: string) => {
//   const youtubeIdRegex =
//     /^(https?:\/\/)?(www\.)?(youtube\.com\/(c\/.+\/|channel\/.+\/|user\/.+\/|watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})$/;
//   const match = url.match(youtubeIdRegex);
//   return match && match[5];
// };

export const getYouTubeVideoId = (url: string) => {
  const youtubeIdRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})$/;
  const match = url.match(youtubeIdRegex);
  if (match && match[5]) {
    return match[5];
  }

  // Si la URL no coincide con el regex principal, intenta manejar casos adicionales
  if (url.includes("youtu.be/")) {
    return url.split("youtu.be/")[1].split("?")[0];
  }

  if (url.includes("shorts/")) {
    return url.split("shorts/")[1];
  }

  if (url.includes("embed/")) {
    return url.split("embed/")[1].split("?")[0];
  }

  // Si ninguno de los casos anteriores coincide, devuelve null
  return null;
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
