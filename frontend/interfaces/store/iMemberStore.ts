import { ReducerAction } from "react";
import { action, observable } from "mobx";
import { IMemberRequest } from "../iMemberRequest";

export interface IMemberRequestStore {
  MembersData: { arrayMembers: Array<IMemberRequest> };
  submitFire: () => void;
  addMember: (member: IMemberRequest) => void;
  deleteMember: (memberName: string) => void;
  updateMember: (member: IMemberRequest) => void;
  getMembers: () => void;
}
