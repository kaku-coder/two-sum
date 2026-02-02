var twoSum = function (number, target) {
  let result = [];

  number.forEach((a, i) => {
    number.forEach((b, j) => {
      if (i !== j && a + b === target) {
        result = [i, j];
      }
    });
  });
  return result;
};
