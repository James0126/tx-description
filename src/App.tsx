import { useState } from "react";
import "./App.css";
import TxDescription from "./paser";

const CONFIG = {
  name: "testnet",
  URL: "https://bombay-lcd.terra.dev",
  chainID: "bombay-12",
};

const samples = [
  "Send 1234567uluna to terra1fs6c6y65c65kkjanjwvmnrfvnm2s58ph88t9ky",
  "Swap 1234567uusd to uluna",
];

//10000000terra1fs6c6y65c65kkjanjwvmnrfvnm2s58ph88t9ky
const App = () => {
  const [showAllMultipleCoins, setShowAllMultipleCoins] = useState(false);
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <input
        id="showAllMultipleCoins"
        type="checkbox"
        checked={showAllMultipleCoins}
        onChange={() => setShowAllMultipleCoins(!showAllMultipleCoins)}
      />
      <label htmlFor="showAllMultipleCoins">showAllMultipleCoins</label>

      <section>
        <TxDescription
          showAllMultipleCoins={showAllMultipleCoins}
          config={CONFIG}
        >
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

//prepare ibc

export default App;
