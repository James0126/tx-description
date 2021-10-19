import { useQuery } from "react-query";
import { truncate } from "terra-utils";
import { useLCDClient } from "./NetworkProvider";

const TokenAddress = ({ children: address }: { children: string }) => {
  const lcd = useLCDClient();
  const { data } = useQuery(["token", address], () =>
    lcd.wasm.contractQuery<{ symbol: string }>(address, { token_info: {} })
  );

  const symbol = data?.symbol;

  return <>{symbol ?? truncate(address)}</>;
};

export default TokenAddress;
