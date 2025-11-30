const numbers = [1, 3, 4, 5];

const shuffle = (numbers = []) => {
  numbers.sort(() => Math.random() > 0.5 ? -1 : 1);
  return numbers;
};

console.log(shuffle(numbers));
