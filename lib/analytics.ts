// Google Analytics 4 configuration and utilities
import { GoogleAnalytics } from '@next/third-parties/google'

// Get the GA4 measurement ID from environment variables
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Check if GA4 is properly configured
export const isGA4Configured = () => {
  return GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX'
}

// Custom event tracking function
export const trackEvent = (eventName: string, parameters?: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// Page view tracking function
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Project view tracking
export const trackProjectView = (projectName: string) => {
  trackEvent('project_view', {
    project_name: projectName,
    page_title: document.title,
  })
}

// Button click tracking
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || 'unknown',
  })
}

// Download tracking
export const trackDownload = (fileName: string) => {
  trackEvent('file_download', {
    file_name: fileName,
  })
}


// Email click tracking
export const trackEmailClick = (emailAddress: string, location: string) => {
  trackEvent('email_click', {
    email_address: emailAddress,
    location: location,
  })
}

// External link click tracking
export const trackExternalLinkClick = (url: string, linkText: string, location: string) => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText,
    location: location,
  })
}

// Social media link tracking
export const trackSocialMediaClick = (platform: string, location: string) => {
  trackEvent('social_media_click', {
    platform: platform,
    location: location,
  })
}

// Video play tracking
export const trackVideoPlay = (videoName: string, videoType: string = 'mp4', location: string) => {
  trackEvent('video_play', {
    video_name: videoName,
    video_type: videoType,
    location: location,
  })
}

// Video pause tracking
export const trackVideoPause = (videoName: string, currentTime: number, location: string) => {
  trackEvent('video_pause', {
    video_name: videoName,
    current_time: currentTime.toString(),
    location: location,
  })
}

// Video completion tracking
export const trackVideoComplete = (videoName: string, duration: number, location: string) => {
  trackEvent('video_complete', {
    video_name: videoName,
    duration: duration.toString(),
    location: location,
  })
}

// Scroll depth tracking
export const trackScrollDepth = (depth: number, page: string) => {
  trackEvent('scroll_depth', {
    scroll_depth: depth.toString(),
    page: page,
  })
}

// Section time tracking
export const trackSectionTime = (sectionName: string, timeSpent: number, page: string) => {
  trackEvent('section_time', {
    section_name: sectionName,
    time_spent: timeSpent.toString(),
    page: page,
  })
}

// Page time tracking
export const trackPageTime = (page: string, timeSpent: number) => {
  trackEvent('page_time', {
    page: page,
    time_spent: timeSpent.toString(),
  })
}

// Section engagement tracking (when user interacts with a section)
export const trackSectionEngagement = (sectionName: string, action: string, page: string) => {
  trackEvent('section_engagement', {
    section_name: sectionName,
    action: action,
    page: page,
  })
}


// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void
  }
}

export { GoogleAnalytics }
