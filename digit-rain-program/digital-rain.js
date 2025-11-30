import { draw, clearScreen, generateScreen } from "./helper_functions.js";

const plotVerticalLine = (screen, { text, offset }, lineToDrawAt) => {
  for (let index = 0; index < text.length; index++) {
    const plotPoint = offset + index;

    if (plotPoint < screen.length && plotPoint >= 0) {
      screen[plotPoint][lineToDrawAt] = text[index];
    }
  }
};

const drawVertical = (texts, screen, skipLine) => {
  let separator = skipLine;
  texts.forEach((data) => {
    if (data.offset > screen.length) {
      data.offset = -data.text.length;
    }
    plotVerticalLine(screen, data, separator);
    separator += skipLine;
    data.offset += 1;
  });
};

const generateChar = (value) => String.fromCharCode(value);
const line = (values) => (values.map(generateChar));
const randomInt = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);

const randomIntegers = (min, max, count) =>
  Array.from({ length: count }, () => randomInt(min, max));

const generateLine = (len) => ({
  text: line(randomIntegers(33, 64, len)).join(''),
  offset: randomInt(-10, 10)
});

const generateLines = (count) => {
  const lines = [];
  for (let index = 0; index < count; index++) {
    lines.push(generateLine(randomInt(index, 20)));
  }
  return lines;
};

const shuffle = (numbers) => numbers.sort(() => Math.random() > 0.5 ? -1 : 1);

const main = () => {
  const screen = generateScreen(20, 10);


  let refresh = 0;
  const texts = generateLines(20);
  setInterval(() => {
    clearScreen(screen);
    if (refresh === 50) {
      shuffle(texts);
      refresh = 0;
    }
    drawVertical(texts, screen, 2);
    draw(screen);
    refresh += 1;
  }, 300);
};

main();