import { generateScreen, clearScreen, draw } from "./helper_functions.js";

const plotHorizontalLine = (screen, { text, offset }, lineToDrawAt) => {

  for (let index = 0; index < text.length; index++) {
    const plotPoint = offset + index;

    if (plotPoint < screen[lineToDrawAt].length && plotPoint >= 0) {
      screen[lineToDrawAt][plotPoint] = text[index];
    }
  }
};

const main = () => {

  const hello = {
    text: "HELLO",
    offset: -2,
  };
  const world = {
    text: "WORLD",
    offset: -4
  };

  const turtle = {
    text: "I LIKE TURTLE",
    offset: -5
  };
  const cool = {
    text: "THIS IS COOL AS HELL",
    offset: -4
  };

  const texts = [hello, world, turtle, cool];

  const screen = generateScreen(10);

  setInterval(() => {
    clearScreen(screen);

    texts.forEach((data, index) => {
      if (data.offset > screen.length - 1) {
        data.offset = -data.text.length;
      }

      plotHorizontalLine(screen, data, index);

      data.offset++;
    });
    draw(screen);

  }, 300);


};

main();