/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.noitatnemucod.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "media.kitsu.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "gogocdn.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "artworks.thetvdb.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "s4.anilist.co",
        port: "",
      },
    ],
  },
};

export default config;
