// 1. for loop
export function testForLoop(arr: number[]) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 2. for...of loop
export function testForOfLoop(arr: number[]) {
  let sum = 0;
  for (let value of arr) {
    sum += value;
  }
  return sum;
}

// 3. Array.prototype.forEach()
export function testForEach(arr: number[]) {
  let sum = 0;
  arr.forEach((value) => {
    sum += value;
  });
  return sum;
}

// 4. Array.prototype.map()
export function testMap(arr: number[]) {
  let sum = 0;
  arr.map((value) => (sum += value));
  return sum;
}

// 6. Array.prototype.reduce()
export function testReduce(arr: number[]) {
  return arr.reduce((accumulator, value) => accumulator + value, 0);
}

// 8. Array.prototype.every()
export function testEvery(arr: number[]) {
  return arr.every((value) => value >= 0);
}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
////// 5. Array.prototype.filter()
export function testFilter(arr: number[]) {
  return arr.filter((value) => value % 2 === 0);
}
// 7. Array.prototype.some()
export function testSome(arr: number[]) {
  return arr.some((value) => value < 0);
}
