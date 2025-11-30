import { generateScreen, clearScreen, draw } from "./helper_functions.js";
import { staticData } from "./texts.js";

const plotHorizontalLine = (screen, { text, offset }, lineToDrawAt) => {
  const drawableLine = screen[lineToDrawAt];

  for (let index = 0; index < text.length; index++) {
    const plotPoint = offset + index;
    if (plotPoint < drawableLine.length && plotPoint >= 0) {
      drawableLine[plotPoint] = text[index];
    }
  }
};
const drawHorizontal = (texts, screen, skipLine) => {
  let separator = skipLine;

  texts.forEach((data, index) => {
    if (data.offset > screen[index].length - 1) {
      data.offset = -data.text.length;
    }
    separator += skipLine;
    plotHorizontalLine(screen, data, separator);
    data.offset += 1;
  });
};
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
    separator += skipLine;
    plotVerticalLine(screen, data, separator);
    data.offset += 1;
  });
};
const getRandom = (threshold) => Math.floor(Math.random() * threshold);
const noise = (screen, threshold/* , refresh = false */) => {
  // const noisePoints = Array.from({ length: screen[0].length }, () => getRandom(threshold));
  for (let index = 0; index < threshold; index++) {
    screen[getRandom(screen.length)][getRandom(screen[0].length)] = '`';
    // screen[getRandom(screen.length)][noisePoints[getRandom(screen[0].length)]] = '`';
  }

};

const main = () => {
  const screen = generateScreen(64, 20);
  const horizontalText = staticData(5);
  const verticalText = staticData(4);

  setInterval(() => {
    clearScreen(screen);

    noise(screen, 30);
    drawHorizontal(horizontalText, screen, 2);
    drawVertical(verticalText, screen, 4);
    draw(screen);
  }, 200);
};

main();