import { LCDClientConfig } from "@terra-money/terra.js";

export interface ComponentProps {
  network: NetworkConfig;
  config?: { showAllCoins?: boolean };
}

export interface NetworkConfig extends LCDClientConfig {
  name: string;
}
