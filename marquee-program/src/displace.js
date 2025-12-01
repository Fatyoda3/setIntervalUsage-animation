export const displace = (screen, rowToAffect, columnToAffect) => {
  for (const row in screen) {
    for (const column in screen[rowToAffect]) {
      console.log(screen[row][column]);

      if (parseInt(row) === rowToAffect && parseInt(column) === columnToAffect) {
        screen[rowToAffect][columnToAffect + 1] = screen[row][column];
        screen[row][column] = ' ';
      }
    }
  }
};