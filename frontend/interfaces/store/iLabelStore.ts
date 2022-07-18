import { ReducerAction } from "react";
import { action, observable } from 'mobx';
import {ILabel} from "../iLabel";

export interface ILabelStore {
  LabelsData: {arrayLabels: Array<ILabel>}
  updateSubmit: () => void;
  submitFire: () => void;
  addLabel: (label: ILabel) => void;
  deleteLabel: (labelName: string) => void;
  updateLabel: (label: ILabel) => void;
  getLabels: () => void;
}
