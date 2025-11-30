import { staticData } from "./src/texts.js";
import { drawHorizontal } from "./src/drawHorizontal.js";
import { drawVertical } from "./src/drawVertical.js";
import { noise } from "./src/noise.js";
import { generateScreen, clearScreen, draw } from "./src/screen_setup.js";

const main = () => {
  const screen = generateScreen(64, 20);
  const horizontalText = staticData(5);
  const verticalText = staticData(4);

  setInterval(() => {
    clearScreen(screen);

    noise(screen, 30);
    drawHorizontal(horizontalText, screen, 3);
    drawVertical(verticalText, screen, 5);
    draw(screen);
  }, 300);
};

main();