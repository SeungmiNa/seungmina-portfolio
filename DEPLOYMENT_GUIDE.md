# 🚀 Deployment Guide for Seungmi Na Portfolio

## Overview
This guide will help you deploy your Next.js portfolio with GA4 tracking to GitHub Pages using GitHub Actions.

## ✅ What's Already Set Up

### 1. GitHub Actions Workflow
- **File**: `.github/workflows/nextjs.yml`
- **Triggers**: Push to `main` branch or manual dispatch
- **Deployment**: Automatic deployment to GitHub Pages

### 2. Environment Configuration
- **Local**: `.env.local` (not committed to git)
- **Production**: GitHub Secrets (secure environment variables)

### 3. Next.js Configuration
- **Static Export**: Configured for GitHub Pages
- **Image Optimization**: Disabled for static hosting
- **Trailing Slashes**: Enabled for proper routing

## 🔧 Setup Steps

### Step 1: Add GA4 Measurement ID to GitHub Secrets

1. **Go to your repository**: [https://github.com/SeungmiNa/seungmina-portfolio](https://github.com/SeungmiNa/seungmina-portfolio)

2. **Navigate to Settings**:
   - Click "Settings" tab
   - Go to "Secrets and variables" → "Actions"

3. **Add Repository Secret**:
   - Click "New repository secret"
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: Your actual GA4 Measurement ID (e.g., `G-XXXXXXXXXX`)
   - Click "Add secret"

### Step 2: Verify Your GA4 Setup

1. **Check your `.env.local`** (local development):
   ```bash
   # .env.local
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

2. **Verify it's in `.gitignore`** (should not be committed):
   ```bash
   # .gitignore
   .env*.local
   ```

### Step 3: Deploy to Production

#### Option A: Automatic Deployment (Recommended)
1. **Commit and push your changes**:
   ```bash
   git add .
   git commit -m "Add GA4 tracking and update deployment config"
   git push origin main
   ```

2. **Monitor the deployment**:
   - Go to "Actions" tab in your GitHub repository
   - Watch the "Deploy Next.js site to Pages" workflow
   - Wait for it to complete (usually 2-3 minutes)

#### Option B: Manual Deployment
1. **Go to Actions tab** in your GitHub repository
2. **Click "Deploy Next.js site to Pages"**
3. **Click "Run workflow"** → "Run workflow"

### Step 4: Verify Deployment

1. **Check your live site**: Your site will be available at:
   ```
   https://seungmina.github.io/seungmina-portfolio/
   ```

2. **Test GA4 tracking**:
   - Visit your live site
   - Navigate between pages
   - Check Google Analytics Real-time reports
   - Verify data is flowing (may take a few minutes)

## 🔍 Troubleshooting

### Build Failures
- **Check GitHub Actions logs**: Go to Actions → Failed workflow → View logs
- **Common issues**:
  - Missing environment variables
  - TypeScript errors
  - Missing dependencies

### GA4 Not Working
- **Verify Measurement ID**: Check it's correctly set in GitHub Secrets
- **Check Real-time reports**: Data may take 5-10 minutes to appear
- **Verify deployment**: Ensure the latest code is deployed

### Page Not Loading
- **Check GitHub Pages settings**: Repository → Settings → Pages
- **Verify source**: Should be "GitHub Actions"
- **Check workflow status**: Ensure deployment completed successfully

## 📊 Monitoring Your Deployment

### GitHub Actions
- **Status**: Green checkmark = success, red X = failure
- **Logs**: Click on any workflow run to see detailed logs
- **Timing**: Usually takes 2-3 minutes to complete

### Google Analytics
- **Real-time**: Immediate data (within 5-10 minutes)
- **Standard reports**: 24-48 hour delay
- **Custom events**: Track project views, button clicks, etc.

## 🎯 What Gets Tracked

### Automatic Tracking
- ✅ **Page Views**: All pages automatically tracked
- ✅ **Project Views**: Specific project page visits
- ✅ **User Sessions**: Complete user journeys
- ✅ **Button Clicks**: Project card interactions

### Available for Custom Tracking
- 🔧 **File Downloads**: Resume downloads
- 🔧 **Form Submissions**: Contact form interactions
- 🔧 **External Links**: Outbound link clicks
- 🔧 **Video Plays**: Project demo videos

## 🚀 Next Steps After Deployment

1. **Set up Google Analytics Goals**:
   - Define what constitutes a successful visit
   - Track project engagement
   - Monitor user journey

2. **Create Custom Dashboards**:
   - Portfolio performance metrics
   - Project popularity rankings
   - User engagement insights

3. **Set up Alerts**:
   - Traffic spikes
   - Error notifications
   - Performance issues

4. **Link Additional Tools**:
   - Google Search Console
   - Google Tag Manager (if needed)
   - Other analytics tools

## 📝 Important Notes

- **Environment Variables**: Never commit `.env.local` to git
- **GitHub Secrets**: Secure way to store production environment variables
- **Static Export**: Your site is pre-built and served as static files
- **GA4 Tracking**: Only works in production, not in development

Your portfolio is now ready for production deployment with full GA4 tracking! 🎉
