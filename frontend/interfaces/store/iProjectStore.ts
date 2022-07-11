import { ReducerAction } from "react";
import { action, observable } from 'mobx';


export interface IProjectStore {
  name: string;
  value: any;
  addData: typeof action;
}
