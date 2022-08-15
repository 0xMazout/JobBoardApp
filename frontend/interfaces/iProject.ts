import { ReactElement } from "react";
import { IProfil } from "./iProfil";
import { IMemberRequest } from "./iMemberRequest";

export interface IProject {
  title: string;
  theme: string;
  description: string;
  links: string[];
  team: number[]; //Actually contain id team number //IProfil
  tags: string[];
  typeWork: string;
  isSplitSharing: boolean;
  isCommercial: boolean;
  status: string;
  members?: number[]; //Actually contain id team number //IProfil
  membersWanted: IMemberRequest[];
  blockChain: string;
  createdAt: Date;
  updatedAt: Date;
  id: number;
  arrayMembers: ReactElement[];
}
