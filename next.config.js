/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source:'/presentation',
        destination: '/presentation/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
