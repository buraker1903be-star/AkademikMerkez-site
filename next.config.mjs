/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/teklif", destination: "/teklif-al", permanent: true },
    ];
  },
};

export default nextConfig;
