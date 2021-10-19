import Coin from "./Coin";

interface Props {
  children: string;
  showAllMultipleCoins: boolean;
}

const Coins = ({ children: coins, showAllMultipleCoins }: Props) => {
  const splitCoins = coins.split(",");

  if (splitCoins.length > 1 && showAllMultipleCoins) {
    return <strong>multiple coins</strong>;
  }

  return coins.endsWith(",") ? (
    <>
      <Coin>{coins.slice(0, -1)}</Coin>,
    </>
  ) : (
    <>
      {splitCoins.map((coin, index) => (
        <span key={index}>
          {!!index && ", "}
          <Coin>{coin}</Coin>
        </span>
      ))}
    </>
  );
};

export default Coins;
