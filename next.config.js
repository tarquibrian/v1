/** @type {import('next').NextConfig} */
const nextConfig = {
  // en
  env: {
    CLOUDNAME: "dskypy0xtt",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;
