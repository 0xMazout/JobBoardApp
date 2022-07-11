import { ReducerAction } from "react";
import { action, observable } from 'mobx';
import {ILabel} from "../iLabel";

export interface ILabelStore {
  name: string;
  value: any;
  LabelsData: {arrayLabels: Array<ILabel>}
  updateSubmit: () => void;
  submitFire: (action: string) => void;
  addLabel: (label: ILabel) => void;
  deleteLabel: (labelName: string) => void;
  updateLabel: (action: string) => void;
  getLabels: (action: string) => void;
}
