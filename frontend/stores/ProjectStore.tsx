import { makeAutoObservable } from 'mobx'
import React, { ReactElement } from 'react'
import { arrayBuffer } from 'stream/consumers'
import CardMembersSearched from '../components/Cards/CardMembersSearched'
import { IMemberRequest } from '../interfaces/iMemberRequest'
import { IProject } from '../interfaces/iProject'
import MemberStore from './MemberStore'
import RootStore from './RootStore'
import {RootStoreBis} from './RootStoreBis'
import { action, observable } from 'mobx';

type Props = {}

export class ProjectStore {
  memberStore: MemberStore
  root: RootStoreBis
  constructor(rootStore: RootStoreBis) {
    this.root = rootStore;
    this.memberStore = new MemberStore(rootStore);
    makeAutoObservable (this)
    this.ProjectData.arrayMembers.push(CardMembersSearched(this,1))
  }
  
  isSubmit:boolean = false;

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
    membersWanted: new Array<IMemberRequest>, // array of strings
    blockChain: "", // string
    createdAt: new Date, // string
    updatedAt: new Date, // string
    id: 0, // number
    arrayMembers: new Array<ReactElement>,
    status: "", // string
  }
  

  // if It's an Update Search Project in BDD then
  // Past ProjectData into the Project Object then Register into BDD 


  // if It's a new Past ProjectData into BDD

  // Contains CRUD Store for Project
  
  updateProjectTitle(title: string) {
    this.ProjectData.title = title;
  }
  AddMembersWanted (memberWanted: IMemberRequest) { 
    this.ProjectData.membersWanted.push(memberWanted);
  }



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