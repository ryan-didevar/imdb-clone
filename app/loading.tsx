import { Skeleton } from "@/app/components";
const Loading = () => {
  const moviesList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {moviesList.map((movie) => (
        <div
          key={movie}
          className="h-50 p-4 cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group"
        >
          <Skeleton className="w-20" height="10rem" />
          <div>
            <Skeleton className="w-20" height="2rem" />
            <Skeleton className="w-20" height="2rem" />
            <Skeleton className="w-20" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
