import { enableStaticRendering } from "mobx-react-lite";
import React, { createContext, ReactNode, useContext } from "react";
import ProjectStore from "../stores/ProjectStore";
import { RootStoreBis} from "../stores/RootStoreBis";

enableStaticRendering(typeof window === "undefined");

let store: RootStoreBis;
const StoreContext = createContext<RootStoreBis | undefined>(undefined);
StoreContext.displayName = "StoreContext";

export function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }

  return context;
}

export function useProjectStore() {
  const { projectStore } = useRootStore();
  return projectStore;
}

export function RootStoreProvider({
  children,
}: {
  children: ReactNode;
}) {
  const store = initializeStore();

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

function initializeStore(): RootStoreBis {
  const _store = store ?? new RootStoreBis();

//   if (initialData) {
//     _store.hydrate(initialData);
//   }
  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}


// export const isServer = typeof window === 'undefined';

// let clientSideStores;

// export function getStores() {
//   if (isServer) {
//     return {
//       projectStore: new ProjectStore(store),
//     };
//   }
//   if (!clientSideStores) {
//     clientSideStores = {
//       projectStore: new ProjectStore(store),
//     };
//   }

//   return clientSideStores;
// }

// export function useMobxStores() {
//   return React.useContext(StoreContext);
// }

// export function StoreProvider(props) {
//   return <StoreContext.Provider value={props.value}>{props.children}</StoreContext.Provider>;
// }