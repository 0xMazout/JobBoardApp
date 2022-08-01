import { useContext } from "react";
import { StoreContext } from "../store/MainStore";
export function useStoreContainer () {
    // const useStore = useContext(StoreContext);
    return useContext(StoreContext);
  }