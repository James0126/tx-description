import { AccAddress, LCDClient, ValAddress } from "@terra-money/terra.js";
import { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NetworkProvider } from "./NetworkProvider";
import ParseAddress from "./ParseAddress";
import Coins from "./Coins";
import ParseWord from "./ParseWord";
import { NetworkConfig } from "./types";
import { isCoins } from "./utility";

const queryClient = new QueryClient();

const TxDescription = ({
  children: sentence,
  config,
  showAllMultipleCoins,
}: {
  children: string;
  config: NetworkConfig;
  showAllMultipleCoins: boolean;
}) => {
  const lcdClient = useMemo(() => new LCDClient(config), [config]);

  return (
    <NetworkProvider value={{ ...config, lcdClient }}>
      <QueryClientProvider client={queryClient}>
        {sentence.split(" ").map((word, index) => (
          <span key={index}>
            {!!index && " "}
            {ValAddress.validate(word) || AccAddress.validate(word) ? (
              <ParseAddress key={index}>{word}</ParseAddress>
            ) : isCoins(word) ? (
              <Coins showAllMultipleCoins={showAllMultipleCoins} key={index}>
                {word}
              </Coins>
            ) : (
              <ParseWord bold={!index} key={index}>
                {word}
              </ParseWord>
            )}
          </span>
        ))}
      </QueryClientProvider>
    </NetworkProvider>
  );
};

export default TxDescription;
