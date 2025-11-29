const generateScreen = (size) => Array.from({ length: size },
  () => Array.from({ length: size }, () => ' '));

const clearScreen = (screen) => {
  console.clear();
  for (const i in screen)
    for (const j in screen[i])
      screen[i][j] = ' ';
};

const plotHorizontal = (screen, texts, currentOffset) => {
  texts.forEach((currentText, line) => {
    for (let index = 0; index < currentText.length; index++) {
      if ((currentOffset + index) < screen[line].length)
        screen[line][currentOffset + index] = currentText[index];
    }
  });
};
const draw = (screen) => {
  console.log('-'.repeat(screen.length + 2));
  console.log(screen.map(lines => '|' + lines.join('') + '|').join('\n'));
  console.log('-'.repeat(screen.length + 2));
};

const main = () => {
  const texts = ["HELLO", "WORLD", "I LIKE TURTLE", 'THIS IS COOL AS HELL'];
  const screen = generateScreen(20);

  texts.forEach((text) => {
    let offset = 0;

    setInterval(() => {
      if (offset > screen.length) {
        offset = -text.length;
      }

      clearScreen(screen);
      const truncated = ++offset;

      plotHorizontal(screen, texts, truncated);
      draw(screen);
    }, 300);
  });

};

main();