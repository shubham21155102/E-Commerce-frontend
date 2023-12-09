/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", 'fmcweekend24.s3.ap-south-1.amazonaws.com', 'lh4.googleusercontent.com', 'lh3.googleusercontent.com', 'lh5.googleusercontent.com', 'lh6.googleusercontent.com', 'cdn.animaapp.com', 'res.cloudinary.com', 'drive.google.com','scontent.cdninstagram.com','tailwindui.com',"www.ethnicplus.in",'rukminim1.flixcart.com'],
  },
   compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  }
}

module.exports = nextConfig
