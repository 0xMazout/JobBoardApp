import {ProjectStore} from "./ProjectStore";

export class RootStoreBis {
  projectStore: ProjectStore;
  

  constructor() {
    this.projectStore = new ProjectStore(this);
  }
}