import React from 'react'
import { IProject } from '../interfaces/iProject'

type Props = {}

function ProjectStore (_props: Props) {

  const ProjectData : IProject = {
    title: "", // string
    theme: "", // string
    description: "", // string
    links: new Array<string>, // array of strings
    team: new Array<number>, // array of strings
    tags: new Array<string>, // array of strings
    typeWork: "", // array of strings
    isSplitSharing: false, // boolean
    members: new Array<number>, // array of strings
    membersWanted: new Array<string>, // array of strings
    blockChain: "", // string
    createdAt: new Date, // string
    updatedAt: new Date, // string
    id: 0, // number
  }

  // Contains CRUD Store for Project
  const ProjectStore = {
    // Create Project
    createProject: (project: any) => {
      // TODO
    },
    // Read Project
    readProject: (id: string) => {
      // TODO
    },
    // Update Project
    updateProject: (project: any) => {
      // TODO
    },
    // Delete Project
    deleteProject: (id: string) => {
      // TODO
    }
  }


  return (
    <div>ProjectStore</div>
  )
}

export default ProjectStore