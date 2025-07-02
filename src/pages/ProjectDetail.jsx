import React from 'react'
import { useParams } from 'react-router-dom'
import FortniteDropCalculator from './FortniteDropCalculator'
import JapaneseDictionary from './JapaneseDictionary'
import ClimbSight from './ClimbSight'
import LanGAPP from './LanGAPP'

const ProjectDetail = () => {
  const { projectId } = useParams()

  const projectComponents = {
    'fortnite-drop-calculator': FortniteDropCalculator,
    'japanese-dictionary': JapaneseDictionary,
    'climbsight': ClimbSight,
    'langapp': LanGAPP
  }

  const ProjectComponent = projectComponents[projectId]

  if (!ProjectComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-lg"
          >
            Return Home
          </button>
        </div>
      </div>
    )
  }

  return <ProjectComponent />
}

export default ProjectDetail 