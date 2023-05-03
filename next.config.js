/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: { appDir: true },
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
