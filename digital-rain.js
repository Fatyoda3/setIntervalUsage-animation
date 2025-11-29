const generateScreen = (rowCount, size) => Array.from({ length: rowCount },
  () => Array.from({ length: size }, () => ' '));

const clearScreen = (screen) => {
  console.clear();
  for (const i in screen)
    for (const j in screen[i])
      screen[i][j] = ' ';
};

const plotVertical = (screen, texts, currentOffset) => {
  texts.forEach((currentText, line) => {
    for (let index = 0; index < currentText.length; index++) {
      const plotPoint = (currentOffset + index);
      if (plotPoint < screen.length && plotPoint >= 0) {
        screen[plotPoint][line] = currentText[index];
      }
    }
  });
};
const draw = (screen) => {
  console.log('-'.repeat(screen.length + 2));
  console.log(screen.map(lines => '|' + lines.join('') + '|').join('\n'));
  console.log('-'.repeat(screen.length + 2));
};
const colorize = (r, g, b, text) => `\x1b[38;2;${r}${g}${b}m${text}\x1b[0m`;

const main = () => {
  const screen = generateScreen(20, 20);
  let offset = 0;
  setInterval(() => {
    if (offset > screen.length) {
      offset = -offset;
    }
    clearScreen(screen);
    plotVertical(screen, ['HELLO'], offset++);
    draw(screen);


  }, 300);
};

main();