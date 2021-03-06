import { AccAddress } from "@terra-money/terra.js";
import { readAmount, readDenom } from "terra-utils";
import { splitTokenText } from "../helpers/utility";
import { DEFAULT_DECIMALS } from "../helpers/constants";
import useTokenContractQuery from "../helpers/useTokenContractQuery";
import TokenAddress from "./TokenAddress";
import FinderLink from "./FinderLink";

const Coin = ({ children: coin }: { children: string }) => {
  const { amount, token } = splitTokenText(coin);
  const { data: tokenInfo } = useTokenContractQuery(token);

  const unit = AccAddress.validate(token) ? (
    <FinderLink address={token}>
      <TokenAddress>{token}</TokenAddress>
    </FinderLink>
  ) : (
    readDenom(token)
  );

  const decimals = tokenInfo?.decimals || DEFAULT_DECIMALS;

  return (
    <strong>
      {readAmount(amount, { decimals })} {unit}
    </strong>
  );
};

export default Coin;
