import { generateScreen, clearScreen, draw } from "./helper_functions.js";
import { texts } from "./texts.js";

const plotHorizontalLine = (screen, { text, offset }, lineToDrawAt) => {

  for (let index = 0; index < text.length; index++) {
    const plotPoint = offset + index;

    if (plotPoint < screen[lineToDrawAt].length && plotPoint >= 0) {
      screen[lineToDrawAt][plotPoint] = text[index];
    }
  }
};

const main = () => {
  const screen = generateScreen(10);

  setInterval(() => {
    clearScreen(screen);

    texts.forEach((data, index) => {
      if (data.offset > screen.length - 1) {
        data.offset = -data.text.length;
      }

      plotHorizontalLine(screen, data, index);
      data.offset += 1;
    });
    draw(screen);
  }, 200);


};

main();