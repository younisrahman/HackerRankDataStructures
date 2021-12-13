// let d = 4;
// let arr = [1, 2, 3, 4, 5];
let d = 10;
let arr = [
  41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51,
];

const rotateLeft = (arr, d) => {
  let newArr = [];
  newArr.push(...arr.slice(d, arr.length));
  newArr.push(...arr.slice(0, d));
  return newArr;
};

console.log(rotateLeft(arr, d));
