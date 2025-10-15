'use client'

import { useEffect } from 'react'
import { trackProjectView, isGA4Configured } from '@/lib/analytics'
import { Project } from '@/app/types/project'

interface ProjectViewTrackerProps {
  project: Project
}

export default function ProjectViewTracker({ project }: ProjectViewTrackerProps) {
  useEffect(() => {
    if (isGA4Configured()) {
      trackProjectView(project.title)
    }
  }, [project.title])

  return null
}
