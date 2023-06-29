/** @type {import('next').NextConfig} */
const path = require('path')
 

const nextConfig = { 
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.com',
          },
          {
            protocol: 'https',
            hostname: '**.photos', 
          }
        ],
      },
      experimental: {
        serverComponentsExternalPackages: ['@prisma/client', 'bcrypt'],
        serverActions: true,
      }
}

module.exports = nextConfig
