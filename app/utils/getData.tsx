import axios from "axios";
interface Props {
  type: "movie" | "tv";
  language?: string;
  page?: number;
  genre?: string;
  query?: string;
}
export const baseUrl = "https://api.themoviedb.org/3/";

export const getMovies = async ({
  type,
  language = "en-US",
  page = 1,
  genre,
  query,
}: Props) => {
  const whatToFetch =
    genre === "fetchTopRated"
      ? `${type}/top_rated`
      : genre === "fetchTrending"
      ? `trending/${type}/week`
      : genre === "search" && `search/${type}`;
  const URL = baseUrl + whatToFetch + `?language=${language}&page=${page}`;
  const options = {
    method: "GET",
    params: {
      query,
    },
    headers: {
      accept: "application/json",
      Authorization: process.env.ACCESS_TOKEN_KEY,
    },
  };
  const data = await axios.get(URL, options);
  return data;
};
