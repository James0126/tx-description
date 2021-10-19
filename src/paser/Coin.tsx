import { AccAddress } from "@terra-money/terra.js";
import { readAmount, readDenom, truncate } from "terra-utils";
import FinderLink from "./FinderLink";
import TokenAddress from "./TokenAddress";
import { splitTokenText } from "./utility";

const Coin = ({ children: coin }: { children: string }) => {
  const { amount, token } = splitTokenText(coin);

  const denom = AccAddress.validate(token) ? (
    <FinderLink address={token}>
      <TokenAddress>{token}</TokenAddress>
    </FinderLink>
  ) : (
    readDenom(token) || truncate(token)
  );

  const value = readAmount(amount);

  return (
    <strong>
      {value} {denom}
    </strong>
  );
};

export default Coin;
