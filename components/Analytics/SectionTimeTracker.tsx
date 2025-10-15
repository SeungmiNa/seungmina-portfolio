'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { trackSectionTime, trackSectionEngagement, isGA4Configured } from '@/lib/analytics'

interface SectionTimeTrackerProps {
  sectionName: string
  className?: string
  children: React.ReactNode
  trackEngagement?: boolean
}

export default function SectionTimeTracker({ 
  sectionName, 
  className = '', 
  children, 
  trackEngagement = true 
}: SectionTimeTrackerProps) {
  const pathname = usePathname()
  const startTimeRef = useRef<number>(Date.now())
  const isVisibleRef = useRef<boolean>(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isGA4Configured()) return

    const section = sectionRef.current
    if (!section) return

    // Track when section comes into view
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisibleRef.current) {
            // Section entered viewport
            isVisibleRef.current = true
            startTimeRef.current = Date.now()
            
            if (trackEngagement) {
              trackSectionEngagement(sectionName, 'section_viewed', pathname)
            }
          } else if (!entry.isIntersecting && isVisibleRef.current) {
            // Section left viewport
            isVisibleRef.current = false
            const timeSpent = Date.now() - startTimeRef.current
            
            // Only track if user spent at least 1 second in the section
            if (timeSpent >= 1000) {
              trackSectionTime(sectionName, Math.round(timeSpent / 1000), pathname)
            }
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of section is visible
        rootMargin: '0px 0px -10% 0px' // Add some margin to avoid rapid toggling
      }
    )

    observerRef.current.observe(section)

    // Track page time when component unmounts
    return () => {
      if (isVisibleRef.current) {
        const timeSpent = Date.now() - startTimeRef.current
        if (timeSpent >= 1000) {
          trackSectionTime(sectionName, Math.round(timeSpent / 1000), pathname)
        }
      }
      
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [sectionName, pathname, trackEngagement])

  // Track clicks and other interactions within the section
  const handleInteraction = (action: string) => {
    if (isGA4Configured() && trackEngagement) {
      trackSectionEngagement(sectionName, action, pathname)
    }
  }

  return (
    <div 
      ref={sectionRef}
      className={className}
      onClick={() => handleInteraction('section_clicked')}
      onMouseEnter={() => handleInteraction('section_hovered')}
    >
      {children}
    </div>
  )
}
