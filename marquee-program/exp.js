import { generateScreen, clearScreen, draw } from "./src/screen_setup.js";

const text = 'HELLO';
const screen = generateScreen(6, 6);
let offset = 0;
for (const row in screen) {
  // for (const column in screen[row]) {
  if (row === '3')
    offset = 1;
  else
    offset = 0;
  screen[row][1 + offset] = text[row % text.length];
  // }
}

draw(screen);