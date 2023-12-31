import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";
import ThemeProvider from "./ThemeProvider";
import "./globals.css";
import QueryClientProvider from "./QueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
