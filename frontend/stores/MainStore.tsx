// Will Contain the MainStore include all the sores and permit communication between them
// The MainStore will be the central point of communication between the different stores
//Will contain : LabelStore, UserStore, ProjectStore,

import { createContext, useContext} from 'react';
import {ILabelStore} from '../interfaces/store/iLabelStore'; 
import {IProjectStore} from '../interfaces/store/iProjectStore'; 
import LabelStore from './LabelStore';
import ProjectStore from './ProjectStore'
import MemberStore from './MemberStore';
import { configure } from "mobx"

configure({
    enforceActions: "always",
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    disableErrorBoundaries: true,
    useProxies: "never"
})

// export interface IStore {
//   labelStore: LabelStore;
//   projectStore: ProjectStore;
//   memberStore: MemberStore;
// }
// export const mainStore: IStore = {
//   labelStore: new LabelStore(),
//   projectStore: new ProjectStore(),
//   memberStore: new MemberStore()
// };
// export const StoreContext = createContext(mainStore);
// // export const useStoreContainer = () =>{
// //   // const useStore = useContext(StoreContext);
// //   return useContext(StoreContext);
// // }