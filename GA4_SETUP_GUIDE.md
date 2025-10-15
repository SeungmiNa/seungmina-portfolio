# Google Analytics 4 (GA4) Setup Guide

## Overview
This guide will help you set up Google Analytics 4 (GA4) for your Next.js portfolio website to track visitor statistics and page views.

## What's Been Implemented

### 1. Automatic Page View Tracking
- All pages automatically track page views when users navigate
- Project pages track specific project views with project names
- Home page tracks general visits

### 2. Enhanced Event Tracking
- Project card clicks on the home page
- Button interactions (customizable)
- File downloads (when implemented)

### 3. Privacy-First Implementation
- Only loads GA4 when properly configured
- No tracking in development mode without proper setup
- GDPR-compliant implementation

## Setup Instructions

### Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" or "Create Account"
4. Enter your website name (e.g., "Seungmi Na Portfolio")
5. Choose your country and timezone
6. Select "Web" as your platform

### Step 2: Get Your Measurement ID
1. In your GA4 property, go to "Admin" (gear icon)
2. Under "Property", click "Data Streams"
3. Click "Add stream" → "Web"
4. Enter your website URL
5. Give your stream a name (e.g., "Portfolio Website")
6. Copy the "Measurement ID" (starts with "G-")

### Step 3: Configure Your Environment
1. Open `.env.local` in your project root
2. Replace `G-XXXXXXXXXX` with your actual Measurement ID:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Step 4: Deploy and Test
1. Build and deploy your website:
   ```bash
   npm run build
   npm run start
   ```
2. Visit your website in production
3. Check Google Analytics Real-time reports to see if data is flowing

## What Gets Tracked

### Automatic Tracking
- **Page Views**: Every page visit is automatically tracked
- **Project Views**: Specific tracking for each project page
- **User Sessions**: Complete user journey tracking

### Custom Events (Already Implemented)
- **Project Card Clicks**: When users click on project cards from the home page
- **Button Interactions**: Custom button click tracking (extensible)
- **File Downloads**: Track when users download your resume
- **Email Clicks**: Track when users click email links (navbar, about page)
- **Social Media Clicks**: Track LinkedIn and GitHub link clicks
- **External Link Clicks**: Track outbound link clicks (ConceptCraft website, GitHub repos)
- **Video Plays**: Track project demo video interactions (Inizio case study, Koala YouTube)
- **Video Pauses**: Track when users pause videos
- **Video Completions**: Track when users finish watching videos
- **Scroll Depth**: Track how far users scroll on pages (25%, 50%, 75%, 90%, 100%)
- **Section Time Tracking**: Track time spent on specific sections (hero, skills, projects)
- **Page Time Tracking**: Track total time spent on each page
- **Section Engagement**: Track interactions within sections (clicks, hovers, views)

### Custom Events (Available for Implementation)
- **Contact Form Submissions**: Track form interactions with success/failure status
- **Custom Video Interactions**: Track specific video timestamps or interactions
- **Advanced Form Analytics**: Track form field interactions and validation
- **Custom Engagement Metrics**: Track specific user behaviors and interactions

## Adding Custom Tracking

### Track Button Clicks
```typescript
import { trackButtonClick } from '@/lib/analytics'

const handleClick = () => {
  trackButtonClick('resume_download', 'about_page')
  // Your button logic here
}
```

### Track File Downloads
```typescript
import { trackDownload } from '@/lib/analytics'

const handleDownload = () => {
  trackDownload('resume.pdf')
  // Your download logic here
}
```

### Track Email Clicks
```typescript
import { trackEmailClick } from '@/lib/analytics'

const handleEmailClick = () => {
  trackEmailClick('naissme0@gmail.com', 'about_page_contact_button')
  // Your email logic here
}
```

### Track Social Media Clicks
```typescript
import { trackSocialMediaClick } from '@/lib/analytics'

const handleSocialClick = () => {
  trackSocialMediaClick('linkedin', 'about_page_footer')
  // Your social media logic here
}
```

### Track External Link Clicks
```typescript
import { trackExternalLinkClick } from '@/lib/analytics'

const handleExternalClick = () => {
  trackExternalLinkClick('https://conceptcraft.ai', 'Visit Website', 'inizio_project_hero')
  // Your external link logic here
}
```

### Track Video Interactions
```typescript
import { trackVideoPlay, trackVideoPause, trackVideoComplete } from '@/lib/analytics'

const handleVideoPlay = () => {
  trackVideoPlay('project_demo', 'mp4', 'about_page')
}

const handleVideoPause = () => {
  trackVideoPause('project_demo', currentTime, 'about_page')
}

const handleVideoComplete = () => {
  trackVideoComplete('project_demo', duration, 'about_page')
}
```

### Track Scroll Depth
```typescript
import { trackScrollDepth } from '@/lib/analytics'

// Automatically tracked, but you can also manually trigger:
trackScrollDepth(75, 'about_page')
```

### Track Section Time and Engagement
```typescript
import { trackSectionTime, trackSectionEngagement } from '@/lib/analytics'

// Track time spent in a section
trackSectionTime('about_skills', 45, 'about_page')

// Track user interactions within a section
trackSectionEngagement('home_projects', 'section_viewed', 'home_page')
trackSectionEngagement('inizio_hero', 'section_clicked', 'inizio_project')
```

### Track Page Time
```typescript
import { trackPageTime } from '@/lib/analytics'

// Automatically tracked when users leave pages
trackPageTime('about_page', 120) // 2 minutes on about page
```


### Track Custom Events
```typescript
import { trackEvent } from '@/lib/analytics'

const handleCustomAction = () => {
  trackEvent('custom_action', {
    action_type: 'video_play',
    video_name: 'project_demo'
  })
}
```

## Viewing Your Analytics Data

### Real-time Reports
1. Go to Google Analytics
2. Click "Reports" → "Realtime"
3. View live visitor data

### Standard Reports
1. **Audience**: Who visits your site
2. **Acquisition**: How visitors find your site
3. **Behavior**: What pages they visit
4. **Conversions**: Goal completions

### Custom Reports
- **Project Performance**: See which projects get the most views
- **User Journey**: Track how users navigate through your portfolio
- **Engagement**: Measure time spent on different sections

## Troubleshooting

### No Data Appearing
1. Check that your Measurement ID is correct in `.env.local`
2. Ensure you're testing in production (not development)
3. Wait 24-48 hours for data to appear in standard reports
4. Check Real-time reports for immediate verification

### Development vs Production
- GA4 only loads in production when properly configured
- No tracking occurs in development mode
- This prevents test data from polluting your analytics

### Privacy Considerations
- The implementation respects user privacy
- No personal data is collected
- Complies with GDPR and other privacy regulations

## Next Steps

1. **Set up Goals**: Define what constitutes a successful visit
2. **Create Audiences**: Segment your visitors for better insights
3. **Set up Alerts**: Get notified of traffic spikes or issues
4. **Link to Google Search Console**: Get search performance data
5. **Create Custom Dashboards**: Build reports specific to your needs

## Support

If you encounter any issues:
1. Check the Google Analytics Help Center
2. Verify your Measurement ID is correct
3. Ensure your website is deployed and accessible
4. Check browser console for any JavaScript errors

Your GA4 implementation is now ready to provide valuable insights into your portfolio's performance!
