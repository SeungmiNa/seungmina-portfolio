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
    ],
  }
} 