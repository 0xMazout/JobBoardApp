import { action, computed, makeAutoObservable, makeObservable, observable, reaction ,autorun, trace} from "mobx";
import React from "react";
import { ILabel } from "../interfaces/iLabel";
import {ILabelStore} from '../interfaces/store/iLabelStore';
// type Props = {}

 export class LabelStore {
  LabelsData = observable({ arrayLabels:new Array<ILabel>()});
  stateLabels = observable({
    isSubmit: false,
  });

  constructor() {
    makeAutoObservable (this)
    // reaction(
    //   () => this.LabelsData.arrayLabels,
    //   (labels) => {
    //     this.data = labels;
    //   }
    // );
   // no work here only assignments
  }

  // Contains CRUD Store for Label
  getLabels = () => {
    return this.LabelsData.arrayLabels;
  };
  
  addLabel = (label: ILabel) => {
    this.LabelsData.arrayLabels.push(label);
    // const labels = this.LabelsData.arrayLabels;
  };
  @action
  updateLabel = (label: ILabel) => {
    const index = this.LabelsData.arrayLabels.findIndex(
      (item) => item.name === label.name
    );
    this.LabelsData.arrayLabels[index] = label;
  }

  //Trigerred when the user submits the form
  @action
  updateSubmit = () =>
    action(() => {
      trace(true);
      console.log("hello i'm labelstore i m updatesubmit");
      this.stateLabels.isSubmit = true;
    });
  //Trigerred when submitState Change
  @action
  submitFire = () =>
    reaction(
      () => this.stateLabels.isSubmit,
      (istrue) => {
        trace(true);
        // Catch Values from all inputs
        console.log(`SubmitFire: ${istrue}`);
        return this.LabelsData
      }
    );

    // autorun(() => {
    //   console.log(`SubmitFire: i made a fucking change bitch`);
    // })
}

export default LabelStore;
