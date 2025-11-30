export const generateScreen = (size, rows) => Array.from({ length: rows },
  () => Array.from({ length: size }, () => '_'));

export const clearScreen = (screen) => {
  console.clear();
  for (const i in screen)
    for (const j in screen[i])
      screen[i][j] = ' ';
};
const colorize = (r, g, b, text) =>
  `\x1b[38;2;${r};${g};${b}m${text}\x1b[0m`;

export const draw = (screen) => {
  const border = '-'.repeat(screen[0].length + 2);
  const body = screen.map((lines, index) =>
    colorize(0, ((index * 20)) % (255), 0, `|${lines.join('')}|`)).join('\n');
  console.log([border, (body), border].join('\n'));
};
