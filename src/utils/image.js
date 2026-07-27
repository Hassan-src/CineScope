// This is for generating the movies pictures the api response does not include the Url for more info refer to https://developer.themoviedb.org/docs/getting-started

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

export function getImageUrl(path, size) {
  if (!path) return "";
  return `${IMAGE_BASE_URL}${size}${path}`;
}
