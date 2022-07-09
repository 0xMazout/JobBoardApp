import { IProfil } from "./iProfil";

export interface IProject {
  title: string;
  theme: string;
  description: string;
  links: string[];
  team: number[]; //Actually contain id team number //IProfil
  tags: string[];
  typeWork: string;
  isSplitSharing: boolean;
  members: number[]; //Actually contain id team number //IProfil
  membersWanted: string[];
  blockChain: string;
  createdAt: Date;
  updatedAt: Date;
  id: number;
}
