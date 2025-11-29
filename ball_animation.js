const generateScreen = (size) => Array.from({ length: size },
  () => Array.from({ length: size }, () => ' '));

const draw = (screen) => {
  console.log('-'.repeat(screen.length + 2));
  console.log(screen.map(lines => '|' + lines.join('') + '|').join('\n'));
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

const generateBall = (index, x, y, dxRange, dyRange) => {
  return {
    count: index,
    x: Math.floor(x * Math.random()), y: Math.floor(y * Math.random()),
    symbol: '*',
    dx: Math.random() * dxRange,
    dy: Math.random() * dyRange
  };
};
const generateBalls = (count, dxRange, dyRange) => {
  const balls = [];

  for (let index = 0; index < count; index++)
    balls.push(generateBall(index, index, 10, dxRange, dyRange));

  return balls;
};
const main = () => {
  const screen = generateScreen(10);
  const balls = generateBalls(3, 1, 1);

  setInterval(() => {
    clearScreen(screen);

    balls.forEach((ball) => {
      if (ball.x < 1) {
        ball.x = 1;
        ball.dx = -ball.dx;
      }
      if (ball.y < 1) {
        ball.y = 1;
        ball.dy = -ball.dy;
      }

      if (ball.x > screen.length - 2) {
        ball.dx = -ball.dx;
        if (ball.dx > 0)
          ball.x = screen.length - 2;
      }
      if (ball.y > screen[0].length - 2) {
        ball.dy = -ball.dy;
        if (ball.dx > 0)
          ball.y = screen[0].length - 2;

      }

      const { x, y } = updatePos(ball);

      ball.x = x;
      ball.y = y;


      plotPoints(screen, (ball.x), (ball.y), ball.symbol);

    });

    draw(screen);
  }, 30);

};
main();