import React, { Component} from 'react'
import MemberStore from './MemberStore'
import LabelStore from './LabelStore'
import ProjectStore from './ProjectStore'

class RootStore {
    memberStore: MemberStore
    projectStore: ProjectStore
    labelStore: LabelStore
  
    constructor() {
      this.memberStore = new MemberStore(this)
      this.projectStore = new ProjectStore(this)
      this.labelStore = new LabelStore(this)
    }

    private get getMemberStore (){
      return this.memberStore
    }

    private get getProjectStore (){
      return this.projectStore
    }

    private get stores() {
      return {
        memberStore: this.memberStore,
        projectStore: this.projectStore,
        labelStore: this.labelStore,
      }
    }
  }

  export default RootStore