import { action, computed, makeAutoObservable, makeObservable, observable, reaction ,autorun, trace} from "mobx";
import React from "react";
import {IMemberRequest} from '../interfaces/iMemberRequest';
import RootStore from "./RootStore";
import { RootStoreBis } from "./RootStoreBis";
// type Props = {}

 export class MemberStore {
  root: RootStoreBis
  updateTitle(value: string) {
    throw new Error('Method not implemented.');
  }
  arrayMembersRequest = observable({ arrayMembersRequest:new Array<IMemberRequest>()});
  stateMembers = observable({
    isSubmit: false,
  });

  MemberData : IMemberRequest = {
    key: 0,
    title: "" ,
    typeworkProfiles: new Array<String>,
    StatusMember: "",
    workLoad: "",
    missionDescription:"", 
    technicalSocialsSkills:""
  }

  constructor(root: RootStoreBis) {
    makeAutoObservable (this)
    this.root = root
  }

  // Contains CRUD Store for member
  getMembers = () => {
    return this.arrayMembersRequest.arrayMembersRequest;
  };
  
  addMember = action((member: IMemberRequest) => {
    this.arrayMembersRequest.arrayMembersRequest.push(member);
    // const members = this.arrayMembersRequest.arrayMembersRequest;
  });
  @action
  updatemember = (member: IMemberRequest) => {
    const index = this.arrayMembersRequest.arrayMembersRequest.findIndex(
      (item) => item.key === member.key
    );
    this.arrayMembersRequest.arrayMembersRequest[index] = member;
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
        return this.arrayMembersRequest
      }
    );

    // autorun(() => {
    //   console.log(`SubmitFire: i made a fucking change bitch`);
    // })
}

export default MemberStore;
