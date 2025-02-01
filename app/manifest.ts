import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Seungmi Na Portfolio',
    short_name: 'Seungmi Na',
    description: 'Seungmi Na Portfolio Website',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/s-favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
} 