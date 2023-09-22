/** @type {import('next').NextConfig} */
const nextConfig = {
  // en
  env: {
    CLOUDNAME: "dskypy0xt",
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

  async headers() {
    return [
      {
        source: "/projects",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
