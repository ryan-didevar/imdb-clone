import { MovieProps } from "@/app/Movies";
import MovieCard from "@/app/components/MovieCard";
import { getMovies } from "@/app/utils/getData";

interface Props {
  params: {
    searchTerm: string;
  };
}
const SearchPage = async ({ params: { searchTerm } }: Props) => {
  const movies = await getMovies({
    type: "movie",
    genre: "search",
    query: searchTerm,
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

export default SearchPage;
