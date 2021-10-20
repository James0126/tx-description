import { useState } from "react";
import TxDescription from "./components/TxDescription";

const CONFIG = {
  name: "testnet",
  URL: "https://bombay-lcd.terra.dev",
  chainID: "bombay-12",
};

const samples = [
  "Send 1234567uluna to terra1fs6c6y65c65kkjanjwvmnrfvnm2s58ph88t9ky",
  "Send 1000000ukrw,1000000uluna to terra17lmam6zguazs5q5u6z5mmx76uj63gldnse2pdp",
  "Swap 1234567uusd to uluna",
  "Delegate 1000000uluna to terravaloper1dcegyrekltswvyy0xy69ydgxn9x8x32zdy3ua5",
  "Undelegate 1000000uluna to terravaloper1dcegyrekltswvyy0xy69ydgxn9x8x32zdy3ua5",
  "Redelegate 1000000uluna from terravaloper1krj7amhhagjnyg2tkkuh6l0550y733jnjnnlzy to terravaloper1dcegyrekltswvyy0xy69ydgxn9x8x32zdy3ua5",
  "Execute send on terra10llyp6v3j3her8u3ce66ragytu45kcmd9asj3u with 1000000uluna",
  "Execute send on terra10llyp6v3j3her8u3ce66ragytu45kcmd9asj3u",
  "Execute withdraw on terra1s9ehcjv0dqj2gsl72xrpp0ga5fql7fj7y3kq3w",
  "Provide 57592368terra1fs6c6y65c65kkjanjwvmnrfvnm2s58ph88t9ky, 1115778731uusd Liquidity to terra1722gzus7s6prj24wnzsqfkn0t8k7hc4p847tlw",
  "Withdraw 21189794uusd, 9568308terra10llyp6v3j3her8u3ce66ragytu45kcmd9asj3u Liquidity from terra1cz6qp8lfwht83fh9xm9n94kj04qc35ulga5dl0",
  "Claim Reward 1789250483terra10llyp6v3j3her8u3ce66ragytu45kcmd9asj3u",
];

const App = () => {
  const [showAllCoins, setShowAllCoins] = useState(false);
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <input
        id="showAllCoins"
        type="checkbox"
        checked={showAllCoins}
        onChange={() => setShowAllCoins(!showAllCoins)}
      />
      <label htmlFor="showAllCoins">showAllCoins</label>

      <section>
        <TxDescription config={{ showAllCoins }} network={CONFIG}>
          {input}
        </TxDescription>
      </section>

      <ul>
        {samples.map((text, index) => (
          <li key={index}>
            <button onClick={() => setInput(text)}>{text}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
