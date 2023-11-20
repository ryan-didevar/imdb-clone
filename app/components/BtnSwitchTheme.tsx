"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsMoonFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
const BtnSwitchTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <>
      {mounted ? (
        currentTheme === "dark" ? (
          <MdLightMode
            className="text-xl hover:text-amber-500 cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsMoonFill
            className="text-xl hover:text-amber-500 cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default BtnSwitchTheme;
