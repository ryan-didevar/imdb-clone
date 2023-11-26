"use client";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "./utils/getData";
import MovieCard from "./components/MovieCard";
export interface MovieProps {
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
  title?: string;
  name?: string;
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
  const moviesList: MovieProps[] = movies?.data.results;

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {moviesList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
