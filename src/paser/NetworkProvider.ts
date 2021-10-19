import createContext from "./createContext";
import { Network } from "./types";

export const [useNetwork, NetworkProvider] =
  createContext<Network>("NetworkProvider");

export const useLCDClient = () => {
  const { lcdClient } = useNetwork();
  return lcdClient;
};
