/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'news.artnet.com',
            port: '',
          },
        ],
      },
};


export default nextConfig;
