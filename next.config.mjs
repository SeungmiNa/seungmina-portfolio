/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  // No output: 'export' — Vercel runs full Next.js (enables Image Optimization)
  // No images.unoptimized — Vercel will optimize images (WebP/AVIF, sizing)
};

export default nextConfig;
