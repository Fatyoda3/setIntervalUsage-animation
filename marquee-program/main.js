import { staticData } from "./src/texts.js";
import { drawHorizontal } from "./src/drawHorizontal.js";
import { drawVertical } from "./src/drawVertical.js";
import { noise } from "./src/noise.js";
import { generateScreen, clearScreen, draw } from "./src/screen_setup.js";
import { displace } from "./src/displace.js";
const effects = {
  H: drawHorizontal,
  V: drawVertical,
  N: noise,
};

const main = () => {
  const screen = generateScreen(64, 20);
  const horizontalText = staticData(1);
  const verticalText = staticData(1);

  setInterval(() => {
    clearScreen(screen);

    // noise(screen, 30);
    drawHorizontal(horizontalText, screen, 0);
    drawVertical(verticalText, screen, 0);
    displace(screen, 0, 0);
    draw(screen);
  }, 300);
};

main();