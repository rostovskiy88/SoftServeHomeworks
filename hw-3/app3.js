let pointsNumbers = [
  [2, 2], //  A
  [2, 8], //  B
  [5, 5], //  C
  [6, 3], //  D
  [6, 7], //  E
  [7, 4], //  F
  [7, 9], //  G
];

function distance(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

function findCommonElement(array1, array2) {
  const a = [];
  a.push(distance(...array1, ...array2));
  return [...a][0];
}

const obj = {};
const p = [];

for (let i = 0; i < pointsNumbers.length; i++) {
  for (let j = 0; j < pointsNumbers.length; j++) {
    if (findCommonElement(pointsNumbers[i], pointsNumbers[j]) !== 0) {
      p.push(findCommonElement(pointsNumbers[i], pointsNumbers[j]));
      obj[pointsNumbers[i] + ',' + pointsNumbers[j]] = findCommonElement(
        pointsNumbers[i],
        pointsNumbers[j]
      );
    }
  }
}

const min = function (numbers) {
  let smallestNum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallestNum) {
      smallestNum = numbers[i];
    }
  }
  return smallestNum;
};

const minDistance = min(p);
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
const finalResult = getKeyByValue(obj, minDistance);
let resultArray = [];
let splitted = finalResult.split(',');
let leftArray = splitted.slice(0, 2);
let rightArray = splitted.slice(-2);
let final1 = leftArray.map((el) => +el);
let final2 = rightArray.map((el) => +el);
resultArray.push(final1, final2);
console.log(resultArray);
