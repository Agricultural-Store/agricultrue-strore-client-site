const [protocol, hostWithPort] = process.env.NEXT_PUBLIC_FILE_HOST.split("://");
const [hostname, port] = hostWithPort.split(":");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol,
        hostname,
        port,
      },
    ],
  },
  experimental: { appDir: true },
};

module.exports = nextConfig;
