/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY,
  },
  images: {
    remotePatterns: [
      { hostname: "image.tmdb.org" },
      { hostname: "api.themoviedb.org" },
    ],
  },
};

module.exports = nextConfig;
