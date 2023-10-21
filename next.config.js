/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-AU"],
    defaultLocale: "en-AU",
  },
  eslint: {
    dirs: ["app"],
  },
};

module.exports = nextConfig;
