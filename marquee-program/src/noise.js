const getRandom = (threshold) => Math.floor(Math.random() * threshold);
export const noise = (screen, threshold) => {
  for (let index = 0; index < threshold; index++) {
    screen[getRandom(screen.length)][getRandom(screen[0].length)] = '`';
  }
};
