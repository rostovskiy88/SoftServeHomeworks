let array = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let val = 'test';

//  push

// function push(arr, arg) {
//   arr[arr.length] = arg;
//   return arr;
// }
// console.log(push(array, val));
// console.log(array);

Array.prototype.customPush = function (value) {
  this[this.length] = value;
  return this;
};
// array.customPush(val);
// console.log(array);

// pop
Array.prototype.customPop = function () {
  let el = this.length - 1;
  let value = this[el];
  this.length -= 1;
  return value;
};
// console.log(array.customPop());
// console.log(array);

//  shift

Array.prototype.customShift = function () {
  let tmp = this[0];
  for (let i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }
  this.length -= 1;
  return tmp;
};
// console.log(array.customShift());
// console.log(array);

// unshift

Array.prototype.customUnshift = function (value) {
  let arr = this;
  arr = [value, ...this];
  for (let i = 0; i < arr.length; i++) {
    this[i] = arr[i];
  }
  return this;
};
// array.customUnshift(val);
// console.log(array);

// concat

Array.prototype.customConcat = function (concatArray) {
  let arr = [];
  arr = [...this, ...concatArray];
  return arr;
};
// let newArray = array.customConcat(array2);
// console.log(newArray);

// Reduce

let fruits = ['Яблоко', 'Банан', 'Ананас'];

// map task
// console.log(fruits.map((el) => el[0]));
const fruitsMap = fruits.reduce((total, el) => {
  total.push(el[0]);
  return total;
}, []);

console.log(fruitsMap);

// filter task

const fruitsFilter = fruits.reduce((total, el) => {
  if (el[0].toLowerCase() == 'а') {
    total.push(el);
  }
  return total;
}, []);
//console.log(fruitsFilter);

// forEach task

// console.log(fruits.forEach((el, i, arr) => (arr[i] = `${i + 1}: ${el};`)));
