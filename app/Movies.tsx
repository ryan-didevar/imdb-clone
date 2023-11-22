"use client";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "./utils/getData";
interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  genre_ids: [];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
const Movies = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") || "fetchTrending";
  const {
    data: movies,
    error,
    isLoading,
  } = useQuery({
    queryKey: [genre === "fetchTrending" ? "trending" : "top_rated"],
    queryFn: () => getMovies({ type: "movie", genre }),
    staleTime: 60 * 1000, //60s
    retry: 3,
  });
  const moviesList: Movie[] = movies?.data.results;
  if (isLoading) return <>loading...</>;
  return (
    <div>
      {moviesList.map((m) => (
        <p key={m.id}>{m.title}</p>
      ))}
    </div>
  );
};

export default Movies;
