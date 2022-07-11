// Will Contain the MainStore include all the sores and permit communication between them
// The MainStore will be the central point of communication between the different stores
//Will contain : LabelStore, UserStore, ProjectStore,

import { createContext, useContext} from 'react';
import {ILabelStore} from '../interfaces/store/iLabelStore'; 
import {IProjectStore} from '../interfaces/store/iProjectStore'; 
import LabelStore from './LabelStore';
import ProjectStore from './ProjectStore'

export interface IStore {
  labelStore: ILabelStore;
  projectStore: IProjectStore;
}
export const mainStore: IStore = {
    labelStore: new LabelStore(),
  projectStore: new ProjectStore()
};
export const StoreContext = createContext(mainStore);
export const useStore = () => {
  return useContext(StoreContext);
};