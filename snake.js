const generateScreen = (size) => Array.from({ length: size },
  () => Array.from({ length: size }, () => ' '));

const draw = (screen) => {
  console.log('-'.repeat(screen.length + 2));
  console.log(screen.map(lines => `|${lines.join('')}|`).join('\n'));
  console.log('-'.repeat(screen.length + 2));
};

const clearScreen = (screen) => {
  console.clear();
  for (const i in screen)
    for (const j in screen[i])
      screen[i][j] = ' ';
};

const plotPoints = (screen, x, y, symbol) => screen[Math.floor(x)][Math.floor(y)] = symbol;

const updatePos = ({ x, y, dx, dy }) => ({ x: x + dx, y: y + dy });

const generateSnake = (dxLimit, dyLimit) => ({
  x: 5, y: 5,
  symbol: '0',
  dx: Math.random() * dxLimit,
  dy: Math.random() * dyLimit,
  trail: []
});

const IsInBound = (ball, prop, prop2, screen) => {
  if (ball[prop] > screen.length - 1) {
    ball[prop2] = -ball[prop2];
    if (ball[prop2] > 0) {
      ball[prop] = screen.length - 1;
    }
  }
};
const flipVelocity = (ball, position, prop2) => {
  if (ball[position] <= 1) {
    ball[position] = 1;
    ball[prop2] = -ball[prop2];
  }
};
const main = () => {
  const screen = generateScreen(10);
  const snake = generateSnake(1, 0.5, 0.5);

  setInterval(() => {
    clearScreen(screen);


    flipVelocity(snake, 'x', 'dx');
    flipVelocity(snake, 'y', 'dy');

    IsInBound(snake, 'x', 'dx', screen);
    IsInBound(snake, 'y', 'dy', screen);

    snake.trail.push({ trailX: snake.x, trailY: snake.y });
    snake.trail = snake.trail.slice(-5);

    const { x, y } = updatePos(snake);
    snake.x = x;
    snake.y = y;
    for (let prev = 0; prev < snake.trail.length; prev++) {
      const { trailX, trailY } = snake.trail[prev];
      plotPoints(screen, trailX, trailY, 'o');
    }
    plotPoints(screen, snake.x, snake.y, snake.symbol);
    draw(screen);
  }, 300);

};
main();
