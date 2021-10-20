import { AccAddress } from "@terra-money/terra.js";
import { readAmount, readDenom } from "terra-utils";
import { splitTokenText } from "../helpers/utility";
import TokenAddress from "./TokenAddress";
import FinderLink from "./FinderLink";

const Coin = ({ children: coin }: { children: string }) => {
  const { amount, token } = splitTokenText(coin);

  const unit = AccAddress.validate(token) ? (
    <FinderLink address={token}>
      <TokenAddress>{token}</TokenAddress>
    </FinderLink>
  ) : (
    readDenom(token)
  );

  return (
    <strong>
      {readAmount(amount)} {unit}
    </strong>
  );
};

export default Coin;
