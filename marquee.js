const generateScreen = (size) => Array.from({ length: size },
  () => Array.from({ length: size }, () => '_'));
const clearScreen = (screen) => {
  console.clear();
  for (const i in screen)
    for (const j in screen[i])
      screen[i][j] = ' ';
};
const draw = (screen) => {
  const border = '-'.repeat(screen.length + 2);
  const body = screen.map(lines => `|${lines.join('')}|`).join('\n');
  console.log([border, body, border].join('\n'));
};
const plotHorizontal = (screen, { text, offset }, lineToDrawAt) => {

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

      plotHorizontal(screen, data, index + 2);

      data.offset++;
    });
    draw(screen);

  }, 300);


};

main();