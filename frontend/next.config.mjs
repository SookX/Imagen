/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'news.artnet.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'icons8.com',
            port: ''
          }
        ],
      },
};


export default nextConfig;
