/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "http",
        hostname: "xml.tepper.nl",
        port: "",
        pathname: "/images/productimages/**",
      },
    ],
  },
};

export default nextConfig;
