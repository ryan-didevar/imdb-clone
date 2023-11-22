"use client";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 h-full">
      <h2 className="font-semibold">Something went wrong!</h2>
      <button className="hover:text-amber-500" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
};

export default Error;
