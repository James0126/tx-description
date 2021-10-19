import axios from "axios";

export const ASSETS = axios.create({ baseURL: "https://assets.terra.money" });
export const REGEXP = {
  ADDRESS: /(terra1[a-z0-9]{38})|(terravaloper[a-z0-9]{39})/g,
  COIN: /^\d+((terra1[a-z0-9]{38})|(u[a-z]{1,4}))/g,
};

export const splitTokenText = (string = "") => {
  const [, amount, token] = string.split(/(\d+)(\w+)/);
  return { amount, token };
};

export const isCoins = (word: string) => word.match(REGEXP.COIN);
