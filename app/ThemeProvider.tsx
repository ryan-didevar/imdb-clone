"use client";
import { ThemeProvider as Provider } from "next-themes";
import { PropsWithChildren } from "react";
const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider enableSystem={true} attribute="class">
      <div className="dark:bg-slate-800 dark:text-gray-200 text-gray-700 transition-color duration-300 min-h-screen select-none">
        {children}
      </div>
    </Provider>
  );
};

export default ThemeProvider;
