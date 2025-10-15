'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView, isGA4Configured } from '@/lib/analytics'

export default function PageViewTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (isGA4Configured()) {
      trackPageView(pathname)
    }
  }, [pathname])

  return null
}
