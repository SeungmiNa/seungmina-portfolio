'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackScrollDepth, isGA4Configured } from '@/lib/analytics'

export default function ScrollDepthTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!isGA4Configured()) return

    let maxScrollDepth = 0
    const scrollThresholds = [25, 50, 75, 90, 100] // Track at these percentages
    const trackedThresholds = new Set<number>()

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100)

      // Update max scroll depth
      if (scrollPercentage > maxScrollDepth) {
        maxScrollDepth = scrollPercentage
      }

      // Track specific thresholds
      scrollThresholds.forEach(threshold => {
        if (scrollPercentage >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold)
          trackScrollDepth(threshold, pathname)
        }
      })
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [pathname])

  return null
}
