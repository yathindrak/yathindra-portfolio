/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.ctfassets.net",
      "cdn-images-1.medium.com",
      "cdn-images-4.medium.com",
    ],
  },
};

module.exports = nextConfig;
