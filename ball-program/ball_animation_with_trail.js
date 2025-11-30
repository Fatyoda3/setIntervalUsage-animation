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

const randomize = (number) => Math.floor(number * Math.random());
const generateBall = (index, xLimit, yLimit, dxLimit, dyLimit) => ({
  count: index,
  x: randomize(xLimit), y: randomize(yLimit),
  symbol: ['*', '+', 'o'][randomize(3)],
  dx: Math.random() * dxLimit,
  dy: Math.random() * dyLimit,
  trail: []
});

const generateBalls = (count, dxRange, dyRange) => {
  const balls = [];
  for (let index = 0; index < count; index++)
    balls.push(generateBall(index, index, 10, dxRange, dyRange));

  return balls;
};

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
  const balls = generateBalls(3, 0.5, 0.5);

  setInterval(() => {
    clearScreen(screen);

    balls.forEach((ball) => {

      flipVelocity(ball, 'x', 'dx');
      flipVelocity(ball, 'y', 'dy');

      IsInBound(ball, 'x', 'dx', screen);
      IsInBound(ball, 'y', 'dy', screen);

      ball.trail.push({ x: ball.x, y: ball.y });
      ball.trail = ball.trail.slice(-3);
      const { x, y } = updatePos(ball);
      ball.x = x;
      ball.y = y;
      // console.log('x', (ball.trail.slice(-1)[0][0]));
      for (let prev = 0; prev < ball.trail.length; prev++) {
        const currentTrail = ball.trail[prev];
        plotPoints(screen, currentTrail.x, currentTrail.y, '`');

      }
      plotPoints(screen, (ball.x), (ball.y), ball.symbol);

    });

    draw(screen);
  }, 300);

};
main();
