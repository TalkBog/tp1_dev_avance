/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "media.dev.to",
          },
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
          },
        ],
      },
};

export default nextConfig;
