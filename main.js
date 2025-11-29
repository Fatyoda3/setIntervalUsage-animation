const generateScreen = (size) => {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => '_'));
};

const draw = (screen) =>
  console.log(screen.map(lines => lines.join('')).join('\n'));

const clearScreen = (screen) => {
  console.clear();
  for (let i = 0; i < screen.length; i++) {
    for (let j = 0; j < screen[i].length; j++) {
      screen[i][j] = '_';
    }
  }
};

const plotter = (screen, x, y, symbol) => screen[x][y] = symbol;
const updatePosition = ({ x, y, dx, dy }) => ({ x: x + dx, y: y + dy });

const main = () => {
  const screen = generateScreen(20);
  const ball0 = { count: 0, x: 0, y: 3, symbol: '*', dx: 1, dy: 0.5 };
  const ball1 = { count: 1, x: 5, y: 3, symbol: 'o', dx: 1, dy: 1.5 };
  const ball2 = { count: 2, x: 1, y: 3, symbol: '*', dx: 0.5, dy: 0.5 };
  const balls = [ball0, ball1, ball2];

  setInterval(() => {
    clearScreen(screen);

    balls.forEach((ball) => {
      if (ball.x < 0) {
        ball.x = 0;
        ball.dx = -ball.dx;
      }
      if (ball.y < 0) {
        ball.y = 0;
        ball.dy = -ball.dy;
      }

      if (ball.x > screen.length - 2) {
        ball.dx = -ball.dx;

        if (ball.dx > 0) {
          ball.x = screen.length - 2;
        }

      }
      if (ball.y > screen[0].length - 2) {
        ball.dy = -ball.dy;
        if (ball.dx > 0) {
          ball.y = screen[0].length - 2;
        }
      }

      const { x, y } = updatePosition(ball);

      ball.x = x;
      ball.y = y;

      console.log(ball.dx, ball.dy);
      console.log(ball.x, ball.y);

      plotter(screen, Math.floor(ball.x), Math.floor(ball.y), ball.symbol);

    });

    draw(screen);
  }, 200);

};
main();