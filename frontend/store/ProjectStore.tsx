import React from 'react'
import { IProject } from '../interfaces/iProject'

type Props = {}

export class ProjectStore {

  
  ProjectData : IProject = {
    title: "", // string
    theme: "", // string
    description: "", // string
    links: new Array<string>, // array of strings
    team: new Array<number>, // array of strings
    tags: new Array<string>, // array of strings
    typeWork: "", // array of strings
    isSplitSharing: false, // boolean
    isCommercial: false, // boolean
    members: new Array<number>, // array of strings
    membersWanted: new Array<string>, // array of strings
    blockChain: "", // string
    createdAt: new Date, // string
    updatedAt: new Date, // string
    id: 0, // number
  }
  

  // if It's an Update Search Project in BDD then
  // Past ProjectData into the Project Object then Register into BDD 


  // if It's a new Past ProjectData into BDD

  // Contains CRUD Store for Project
  
  updateCommercialProject(checked: boolean) {
    this.ProjectData.isCommercial = checked;
  }
    // Create Project
    createProject: (project: any) => {
      // TODO
    }
    // Read Project
    readProject: (id: string) => {
      // TODO
    }
    // Update Project
    updateProject: (project: any) => {
      // TODO
    }
    // Delete Project
    deleteProject: (id: string) => {
      // TODO
    }
  
}

export default ProjectStore