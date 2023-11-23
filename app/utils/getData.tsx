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
    `?&language=${language}&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzNkNmVlYzA3OWU1NTUwZmE4NDdhMjUyNjI5NDZkOSIsInN1YiI6IjY1NWI0YjkxMDgxNmM3MDBhYmJmNjJmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8Jh3OaLqsayQFcYbMoIFXUhYjk200ZPp-sPutRFWpdw",
    },
  };

  return await axios.get(URL, options);
};
