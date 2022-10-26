/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["malmal.fra1.digitaloceanspaces.com", "fra1.digitaloceanspaces.com"]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
