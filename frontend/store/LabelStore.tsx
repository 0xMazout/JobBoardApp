import { action, observable, reaction } from "mobx";
import React from "react";
import { ILabel } from "../interfaces/iLabel";
// type Props = {}

export function LabelStore() {
  const LabelsData = observable({ arrayLabels:new Array<ILabel>()});

  const stateLabels = observable({
    isSubmit: false,
  });
  // const LabelData : ILabel = {
  //     name: "", // string
  //     value: "", // string
  // }

  // Contains CRUD Store for Label
  const getLabels = () => {
    // TODO
  };
  const updateLabel = (label: ILabel) => {
    // TODO
  };
  const deleteLabel = (labelName: string) => {
    // TODO
  };

  const fetchLabels = () => {};

  const addLabel = (label: ILabel) => {
    LabelsData.arrayLabels.push(label);
  };

  //Trigerred when the user submits the form
  const updateSubmit = () =>
    action((isSubmit) => {
      stateLabels.isSubmit = true;
    });
  //Trigerred when submitState Change
  const submitFire = () =>
    reaction(
      () => stateLabels.isSubmit,
      () => {
        // Catch Values from all inputs
        return LabelsData;
      }
    );
}

export default LabelStore;
