const generateScreen = (size) => Array.from({ length: size },
  () => Array.from({ length: size }, () => ' '));

const draw = (screen) => {
  console.log('-'.repeat(screen.length + 2));
  console.log(screen.map(lines => `|${lines.join('')}|`).join('\n'));
  console.log('-'.repeat(screen.length + 2));
};

const clearScreen = (screen) => {
  console.clear();
  for (const i in screen)
    for (const j in screen[i])
      screen[i][j] = ' ';
};
const plot = (screen, x, y, symbol) => screen[x][y] = symbol;
const main = () => {
  const screen = generateScreen(10);

  let x = 0;
  let y = 0;
  let deltaX = 1;
  let deltaY = 1;

  setInterval(() => {
    clearScreen(screen);
    x += deltaX;
    if (x === screen.length - 1 || x === 0) {
      deltaX = -deltaX;
    }
    if (x === screen.length - 1) {
      y += deltaY;
    } if (y === screen.length - 1 || y === 0) {
      deltaY = -deltaY;
    }

    plot(screen, x, y, 'o');

    console.log('x is ', x, 'y is ', y);

    draw(screen);
  }, 300);

};
main();