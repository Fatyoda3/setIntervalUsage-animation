export const generateScreen = (size) => Array.from({ length: size },
  () => Array.from({ length: size }, () => '_'));

export const clearScreen = (screen) => {
  console.clear();
  for (const i in screen)
    for (const j in screen[i])
      screen[i][j] = ' ';
};

export const draw = (screen) => {
  const border = '-'.repeat(screen.length + 2);
  const body = screen.map(lines => `|${lines.join('')}|`).join('\n');
  console.log([border, body, border].join('\n'));
};
