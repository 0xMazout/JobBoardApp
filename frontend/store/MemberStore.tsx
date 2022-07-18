import { action, computed, makeAutoObservable, makeObservable, observable, reaction ,autorun, trace} from "mobx";
import React from "react";
import {IMember} from '../interfaces/iMember';
// type Props = {}

 export class MemberStore {
  arrayMembers = observable({ arraymembers:new Array<IMember>()});
  stateMembers = observable({
    isSubmit: false,
  });

  constructor() {
    makeAutoObservable (this)
    // reaction(
    //   () => this.arrayMembers.arraymembers,
    //   (members) => {
    //     this.data = members;
    //   }
    // );
   // no work here only assignments
  }

  // Contains CRUD Store for member
  getMembers = () => {
    return this.arrayMembers.arraymembers;
  };
  
  addMember = (member: IMember) => {
    this.arrayMembers.arraymembers.push(member);
    // const members = this.arrayMembers.arraymembers;
  };
  @action
  updatemember = (member: IMember) => {
    const index = this.arrayMembers.arraymembers.findIndex(
      (item) => item.name === member.name
    );
    this.arrayMembers.arraymembers[index] = member;
  }

  //Trigerred when the user submits the form
  @action
  updateSubmit = () =>
    action(() => {
      trace();
      console.log("hello i'm memberstore i m updatesubmit");
      this.stateMembers.isSubmit = true;
    });
  //Trigerred when submitState Change
  @action
  submitFire = () =>
    reaction(
      () => this.stateMembers.isSubmit,
      (istrue) => {
        trace();
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
