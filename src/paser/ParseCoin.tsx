import { AccAddress } from "@terra-money/terra.js";
import { readAmount, readDenom, truncate } from "terra-utils";
import { splitTokenText } from "./utility";
import TokenAddress from "./TokenAddress";
import FinderLink from "./FinderLink";

const ParseCoin = ({
  children,
  showAllMultipleCoins,
}: {
  children: string;
  showAllMultipleCoins: boolean;
}) => <strong>{formatCoin(children, showAllMultipleCoins)}</strong>;

export default ParseCoin;

const formatCoin = (coin: string, showAllMultipleCoins: boolean) => {
  const coins = coin.split(",");

  if (coins.length > 1 && showAllMultipleCoins) {
    return <>multiple coins</>;
  }

  return (
    <>
      {coins.map((coin, index) => {
        const { amount, token } = splitTokenText(coin);
        const value = <>{readAmount(amount)}</>;
        const unit = AccAddress.validate(token) ? (
          <FinderLink address={token}>
            <TokenAddress>{token}</TokenAddress>
          </FinderLink>
        ) : (
          readDenom(token) || truncate(token)
        );

        return (
          <span key={index}>
            {!!index && ", "}
            {value} {unit}
          </span>
        );
      })}
    </>
  );
};
