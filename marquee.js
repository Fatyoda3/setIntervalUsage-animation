const generateScreen = (size) => Array.from({ length: size },
  () => Array.from({ length: size }, () => ' '));

const clearScreen = (screen) => {
  console.clear();
  for (const i in screen)
    for (const j in screen[i])
      screen[i][j] = ' ';
};

const plotHorizontal = (screen, texts, currentOffset) => {
  for (const line in screen) {
    texts.forEach((currentText) => {
      for (let i = 0; i < currentText.length; i++) {
        if ((currentOffset + i) < screen[line].length)
          screen[line][(currentOffset + i)] = currentText[i];
      }
    });
  }
};
const draw = (screen) => {
  console.log('-'.repeat(screen.length + 2));
  console.log(screen.map(lines => '|' + lines.join('') + '|').join('\n'));
  console.log('-'.repeat(screen.length + 2));
};

const main = () => {
  const texts = ["HELLO WORLD"];
  const screen = generateScreen(20);
  let offset = 0;

  setInterval(() => {
    if (offset > screen.length)
      offset = -texts[0].length;

    const truncated = ++offset;
    clearScreen(screen);
    plotHorizontal(screen, texts, truncated);
    draw(screen);
  }, 300);
};

main();