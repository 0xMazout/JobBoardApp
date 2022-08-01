import { action, computed, makeAutoObservable, makeObservable, observable, reaction ,autorun, trace} from "mobx";
import React from "react";
import {IMemberRequest} from '../interfaces/iMemberRequest';
// type Props = {}

 export class MemberStore {
  updateTitle(value: string) {
    throw new Error('Method not implemented.');
  }
  arrayMembers = observable({ arraymembers:new Array<IMemberRequest>()});
  stateMembers = observable({
    isSubmit: false,
  });

  MemberData : IMemberRequest = {
    key: 0,
    title: "" ,
    typeworkProfiles: new Array<String>,
    listStatus: new Array<String>,
    workLoad: "",
    missionDescription:"", 
    technicalSocialsSkills:""
  }

  constructor() {
    makeAutoObservable (this)
  }

  // Contains CRUD Store for member
  getMembers = () => {
    return this.arrayMembers.arraymembers;
  };
  
  addMember = action((member: IMemberRequest) => {
    this.arrayMembers.arraymembers.push(member);
    // const members = this.arrayMembers.arraymembers;
  });
  @action
  updatemember = (member: IMemberRequest) => {
    const index = this.arrayMembers.arraymembers.findIndex(
      (item) => item.key === member.key
    );
    this.arrayMembers.arraymembers[index] = member;
  }

  //Trigerred when the user submits the form
  @action
  updateSubmit = () =>
    action(() => {
      trace(true);
      console.log("hello i'm memberstore i m updatesubmit");
      this.stateMembers.isSubmit = true;
    });
  //Trigerred when submitState Change
  @action
  submitFire = () =>
    reaction(
      () => this.stateMembers.isSubmit,
      (istrue) => {
        trace(true);
        // Catch Values from all inputs
        console.log(`SubmitFire: ${istrue}`);
        return this.arrayMembers
      }
    );

    // autorun(() => {
    //   console.log(`SubmitFire: i made a fucking change bitch`);
    // })
}

export default MemberStore;
