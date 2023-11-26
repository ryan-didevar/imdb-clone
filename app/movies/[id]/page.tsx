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
    <div>
      {movie?.title}

      <Image
        src={img}
        alt="Image is not available"
        width={500}
        height={300}
        className={classNames({
          "sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 max-h-full h-auto":
            true,
        })}
      />
      {movie?.overview}
    </div>
  );
};

export default MovieDetailPage;
