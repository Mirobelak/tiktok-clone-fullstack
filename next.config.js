/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i1.sndcdn.com"]
  }
}

module.exports = nextConfig
