const twoSum = (numbers, target) => {
  const map = {};

  for (let index = 0; index < numbers.length; index++) {
    const part = numbers[index];

    if (part in map) {
      return [map[part], index];

    } else {
      map[target - part] = index;
    }
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));