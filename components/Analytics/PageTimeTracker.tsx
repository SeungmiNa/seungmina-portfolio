'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageTime, isGA4Configured } from '@/lib/analytics'

export default function PageTimeTracker() {
  const pathname = usePathname()
  const startTimeRef = useRef<number>(Date.now())
  const isActiveRef = useRef<boolean>(true)

  useEffect(() => {
    if (!isGA4Configured()) return

    startTimeRef.current = Date.now()

    // Track page time when user leaves the page
    const handleBeforeUnload = () => {
      if (isActiveRef.current) {
        const timeSpent = Date.now() - startTimeRef.current
        // Only track if user spent at least 5 seconds on the page
        if (timeSpent >= 5000) {
          trackPageTime(pathname, Math.round(timeSpent / 1000))
        }
      }
    }

    // Track page time when user switches tabs or minimizes window
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User switched away from the page
        if (isActiveRef.current) {
          const timeSpent = Date.now() - startTimeRef.current
          if (timeSpent >= 5000) {
            trackPageTime(pathname, Math.round(timeSpent / 1000))
          }
        }
        isActiveRef.current = false
      } else {
        // User returned to the page
        isActiveRef.current = true
        startTimeRef.current = Date.now()
      }
    }

    // Track page time when user navigates away
    const handleRouteChange = () => {
      if (isActiveRef.current) {
        const timeSpent = Date.now() - startTimeRef.current
        if (timeSpent >= 5000) {
          trackPageTime(pathname, Math.round(timeSpent / 1000))
        }
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Cleanup
    return () => {
      handleRouteChange()
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [pathname])

  return null
}
