/** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    remotePatterns: [
      { 
        hostname: 'images.unsplash.com', 
      },
      { 
        hostname: 'fmcweekend24.s3.ap-south-1.amazonaws.com',
      },
      { 
        hostname: 'lh[3-6].googleusercontent.com', 
      },
      { 
        hostname: 'cdn.animaapp.com', 
      },
      {
        hostname:'www.ethnicplus.in'
      },
      {
        hostname:'rukminim1.flixcart.com'
      }
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
