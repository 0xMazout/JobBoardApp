import { makeAutoObservable } from 'mobx'
import React, { ReactElement } from 'react'
import { arrayBuffer } from 'stream/consumers'
import CardMembersSearched from '../components/Cards/CardMembersSearched'
import { IProject } from '../interfaces/iProject'

type Props = {}

export class ProjectStore {

  constructor() {
    makeAutoObservable (this),
    this.ProjectData
    this.ProjectData.arrayMembers.push(CardMembersSearched(1))
  }
  
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
    arrayMembers: new Array<ReactElement>
  }
  

  // if It's an Update Search Project in BDD then
  // Past ProjectData into the Project Object then Register into BDD 


  // if It's a new Past ProjectData into BDD

  // Contains CRUD Store for Project
  
  updateCommercialProject(checked: boolean) {
    this.ProjectData.isCommercial = checked;
  }
  updateSplitSharing(checked: boolean) {
    this.ProjectData.isSplitSharing = checked;
  }
  
    // Create Project
    createProject: (project: IProject) => {
      // TODO
    }
    // Read Project
    readProject: (id: number) => {
      // TODO
    }
    // Update Project
    updateProject: (project: IProject) => {
      // TODO
    }
    // Delete Project
    deleteProject: (id: number) => {
      // TODO
    }
  
}

export default ProjectStore