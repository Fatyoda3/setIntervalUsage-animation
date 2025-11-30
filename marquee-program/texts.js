import { quotes } from "./data_bank.js";
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
  // const hello = {
  //   text: "HELLO",
  //   offset: -2,
  // };
  // const world = {
  //   text: "WORLD",
  //   offset: -4
  // };
  // const turtle = {
  //   text: "I LIKE TURTLE",
  //   offset: -5
  // };
  // const cool = {
  //   text: "THIS IS COOL AS HELL",
  //   offset: -4
  // };


  // return [{ ...hello }, { ...world }, { ...turtle }, { ...cool }];
};