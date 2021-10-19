import { LCDClient, LCDClientConfig } from "@terra-money/terra.js";

export interface NetworkConfig extends LCDClientConfig {
  name: string;
}

export interface Network extends NetworkConfig {
  lcdClient: LCDClient;
}
