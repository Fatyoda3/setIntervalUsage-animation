const generateScreen = (size) => Array.from({ length: size },
  () => Array.from({ length: size }, () => '_'));

const clearScreen = (screen) => {
  console.clear();
  for (const i in screen)
    for (const j in screen[i])
      screen[i][j] = ' ';
};

const plotHorizontal = (screen, texts, currentOffset) => {
  texts.forEach((currentText, line) => {
    for (let index = 0; index < currentText.length; index++) {
      const plotPoint = (currentOffset + index);
      if (plotPoint < screen[line].length && plotPoint >= 0) {
        screen[line][plotPoint] = currentText[index];
      }
    }
  });
};

const plotHorizontalRev = (screen, texts, currentOffset) => {
  texts.forEach((currentText, line) => {
    for (let index = currentText.length - 1; index > -1; index--) {
      const plotPoint = (currentOffset + index);
      if (plotPoint < screen[line].length && plotPoint >= 0) {
        screen[line][plotPoint] = currentText[index];
      }
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

    // setInterval(() => {
    //   // clearScreen(screen);
    //   // if (offset > screen.length) {
    //   //   offset = -text.length;
    //   // }
    //   // const truncated = ++offset;
    //   // plotHorizontal(screen, texts, truncated);
    // }, 300);
    let offset = text.length;

    setInterval(() => {
      clearScreen(screen);
      if (offset <= 0) {
        offset = -(offset + text.length);
      }

      const truncated = --offset;
      // console.log(truncated);

      plotHorizontalRev(screen, texts, truncated);
      draw(screen);
    }, 400);
  });

};

main();