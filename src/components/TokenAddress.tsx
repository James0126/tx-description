import { useQuery } from "react-query";
import { truncate } from "terra-utils";
import { useLCDClient } from "../helpers/NetworkProvider";

const TokenAddress = ({ children: address }: { children: string }) => {
  const lcd = useLCDClient();
  const { data: token } = useQuery(["token", address], () =>
    lcd.wasm.contractQuery<{ symbol: string }>(address, { token_info: {} })
  );

  return <>{token?.symbol ?? truncate(address)}</>;
};

export default TokenAddress;
