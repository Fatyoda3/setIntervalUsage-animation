import { generateScreen, clearScreen, draw } from "./helper_functions.js";
import { STATIC_DATA } from "./texts.js";

const plotHorizontalLine = (screen, { text, offset }, lineToDrawAt) => {

  for (let index = 0; index < text.length; index++) {
    const plotPoint = offset + index;

    if (plotPoint < screen[lineToDrawAt].length && plotPoint >= 0) {
      screen[lineToDrawAt][plotPoint] = text[index];
    }
  }
};

const drawHorizontal = (texts, screen) => {
  texts.forEach((data, index) => {
    if (data.offset > screen[index].length - 1) {
      data.offset = -data.text.length;
    }

    plotHorizontalLine(screen, data, index);
    data.offset += 1;
  });
};
const plotVerticalLine = (screen, { text, offset }, lineToDrawAt) => {
  for (let index = 0; index < text.length; index++) {
    const plotPoint = offset + index;
    // console.log('screen at plotPoint', plotPoint, screen[plotPoint] === undefined);

    if (plotPoint < screen.length && plotPoint >= 0) {
      screen[plotPoint][lineToDrawAt] = text[index];
    }
  }
};

const drawVertical = (texts, screen, skipLine) => {
  let separator = skipLine;
  texts.forEach((data, lineToDrawAt) => {
    if (data.offset > screen.length) {
      data.offset = -data.text.length;
    }
    separator += skipLine;
    plotVerticalLine(screen, data, separator);
    data.offset += 1;
  });
};
const main = () => {
  const screen = generateScreen(32, 20);
  const horizontalText = STATIC_DATA();
  const verticalText = STATIC_DATA();
  // const hello = { text: 'name', offset: -1 };
  setInterval(() => {
    clearScreen(screen);
    // drawHorizontal(horizontalText, screen);
    drawVertical(verticalText, screen ,3);
    // if (hello.offset > screen.length - 1) {
    //   hello.offset = -hello.text.length;
    // }
    // // console.log(hello.offset, 'offset value ');

    // plotVerticalLine(screen, hello, 0);
    // hello.offset += 1;

    draw(screen);
  }, 200);


};

main();