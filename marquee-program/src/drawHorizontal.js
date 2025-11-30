const plotHorizontalLine = (screen, { text, offset }, lineToDrawAt) => {
  const drawableLine = screen[lineToDrawAt];

  for (let index = 0; index < text.length; index++) {
    const plotPoint = offset + index;
    if (plotPoint < drawableLine.length && plotPoint >= 0) {
      drawableLine[plotPoint] = text[index];
    }
  }
};
export const drawHorizontal = (texts, screen, skipLine) => {
  let separator = skipLine;

  texts.forEach((data, index) => {
    if (data.offset > screen[index].length - 1) {
      data.offset = -data.text.length;
    }
    separator += skipLine;
    plotHorizontalLine(screen, data, separator);
    data.offset += 1;
  });
};
