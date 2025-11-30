const plotVerticalLine = (screen, { text, offset }, lineToDrawAt) => {
  for (let index = 0; index < text.length; index++) {
    const plotPoint = offset + index;

    if (plotPoint < screen.length && plotPoint >= 0) {
      screen[plotPoint][lineToDrawAt] = text[index];
    }
  }
};
export const drawVertical = (texts, screen, skipLine) => {
  let separator = skipLine;
  texts.forEach((data) => {
    if (data.offset > screen.length) {
      data.offset = -data.text.length;
    }
    separator += skipLine;
    plotVerticalLine(screen, data, separator);
    data.offset += 1;
  });
};
