export const generateScreen = (size, rows) => Array.from({ length: rows },
  () => Array.from({ length: size }, () => '_'));

export const clearScreen = (screen) => {
  console.clear();
  for (const i in screen)
    for (const j in screen[i])
      screen[i][j] = ' ';
};

export const draw = (screen) => {
  const border = '-'.repeat(screen[0].length + 2);
  const body = screen.map(lines => `|${lines.join('')}|`).join('\n');
  console.log([border, body, border].join('\n'));
};
