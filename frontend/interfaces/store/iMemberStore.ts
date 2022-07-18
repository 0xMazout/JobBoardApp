import { ReducerAction } from "react";
import { action, observable } from "mobx";
import { IMember } from "../iMember";

export interface IMemberStore {
  MembersData: { arrayMembers: Array<IMember> };
  submitFire: () => void;
  addMember: (member: IMember) => void;
  deleteMember: (memberName: string) => void;
  updateMember: (member: IMember) => void;
  getMembers: () => void;
}
