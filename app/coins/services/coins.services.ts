import { Coin } from "../models/coins.models";

export const getData = (): Promise<Coin[]> => {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc`;
  return fetch(url).then((res) => res.json());
};
