import Link from "next/link";
import { ReactElement } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import BtnSwitchTheme from "./components/BtnSwitchTheme";
const Navbar = () => {
  const links: { label: string; href: string; icon?: ReactElement }[] = [
    { label: "Home", href: "/", icon: <AiFillHome /> },
    { label: "About", href: "/about", icon: <BsFillInfoCircleFill /> },
  ];
  return (
    <nav className="flex justify-between items-center py-6 px-2 sm:mx-auto max-w-6xl">
      <div className="flex gap-1 lg:gap-2 items-center">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="flex gap-2 items-center hover:text-amber-500"
          >
            <div className="inline sm:hidden text-2xl mx-4">{link.icon}</div>
            <p className="sm:inline hidden text-sm my-2">
              {link.label.toUpperCase()}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex space-x-5 items-center">
        <BtnSwitchTheme />
        <Link href="/">
          <h2 className="flex gap-1 items-center">
            <span className="px-2 py-1 bg-amber-500 rounded-lg font-bold ">
              IMDb
            </span>
            <span className="font-semibold hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
