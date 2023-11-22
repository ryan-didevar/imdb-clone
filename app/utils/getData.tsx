import axios from "axios";
const API_KEY = process.env.TMDB_API_KEY;
interface Props {
  type: "movie" | "tv";
  language?: string;
  page?: number;
  genre: string;
}
const baseUrl = "https://api.themoviedb.org/3/";

export const getMovies = async ({
  type,
  language = "en-US",
  page = 1,
  genre,
}: Props) => {
  const URL =
    baseUrl +
    (genre === "fetchTopRated"
      ? `${type}/top_rated`
      : `trending/${type}/week`) +
    `?api_key=${API_KEY}&language=${language}&page=${page}`;
  const data = await axios.get(URL);
  return data;
};
