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

const main = () => {
  const screen = generateScreen(64, 20);
  const horizontalText = staticData();
  const verticalText = staticData();

  setInterval(() => {
    clearScreen(screen);

    drawHorizontal(horizontalText, screen, 2);
    drawVertical(verticalText, screen, 4);

    draw(screen);
  }, 200);
};

main();