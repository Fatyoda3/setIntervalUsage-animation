import { quotes } from "./static/data_bank.js";
const getRandom = (quotes) => quotes[Math.floor(Math.random() * quotes.length)];
const generateOffset = () => Math.floor((Math.random() * 20) - 10 + 1);

export const staticData = (count) => {
  const grouped = [];
  for (let index = 0; index < count; index++) {
    const textGroup = {
      text: getRandom(quotes),
      offset: generateOffset()
    };
    grouped.push(textGroup);
  }

  return grouped;
};