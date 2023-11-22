"use client";
import classNames from "classnames";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Menu = () => {
  const searchParams = useSearchParams();
  const links: { label: string; href: string }[] = [
    { label: "Trending", href: "fetchTrending" },
    { label: "Top Rated", href: "fetchTopRated" },
  ];
  const genre = searchParams.get("genre");
  return (
    <div className="flex items-center space-x-6 justify-center py-4 dark:bg-slate-700 bg-amber-100">
      {links.map((link) => (
        <Link
          className={classNames({
            " font-semibold p-1": true,
            "text-amber-500 border-b-4 border-amber-500 rounded-lg ":
              genre === link.href,
          })}
          key={link.label}
          href={`/?genre=${link.href}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
