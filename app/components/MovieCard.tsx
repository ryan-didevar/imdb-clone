import Image from "next/image";
import { MovieProps } from "../Movies";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
import classNames from "classnames";
interface Props {
  movie: MovieProps;
}
const MovieCard = ({ movie }: Props) => {
  const img = `https://image.tmdb.org/t/p/w500${
    movie.backdrop_path || movie.poster_path
  }`;
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link
        href={`/movies/${movie.id}`}
        className="flex flex-col justify-between h-full items-center"
      >
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
          <p className="line-clamp-2 text-md">{movie.overview}</p>
          <h2 className="line-clamp-1 text-lg font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="flex items-center">
            {movie.release_date || movie.release_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" /> {movie.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
