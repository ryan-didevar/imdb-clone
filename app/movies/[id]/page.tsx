import Image from "next/image";
import classNames from "classnames";

interface Props {
  params: {
    id: string;
  };
}
interface MovieDetail {
  adult: string;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  id: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
const baseUrl = "https://api.themoviedb.org/3/";
const MovieDetailPage = async ({ params: { id } }: Props) => {
  const movie: MovieDetail = await fetch(
    `${baseUrl}movie/${id}?api_key=${process.env.TMDB_API_KEY}`
  ).then((res) => res.json());
  const img = `https://image.tmdb.org/t/p/w500${
    movie.backdrop_path || movie.poster_path
  }`;
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={img}
          alt="Image is not available"
          width={500}
          height={300}
          className={classNames({
            "sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 max-h-full h-auto":
              true,
          })}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie.title}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
