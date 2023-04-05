/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  db: {
    connection_string: "postgres://ShahzaibSE:LEv81lmCDogI@ep-holy-brook-115218.us-east-2.aws.neon.tech/neondb"
  }
}

module.exports = nextConfig
