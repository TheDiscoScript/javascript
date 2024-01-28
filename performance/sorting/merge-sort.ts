import { generateRandomArray } from "../_usefull-functions/generate-num-array";

const LOG = true;

export function mergeSort(numbers: number[]): number[] {
  if (LOG) console.log("🚀 ~ mergeSort ~ numbers:", numbers);
  if (numbers.length <= 1) return numbers;

  const middle = Math.floor(numbers.length / 2);
  if (LOG) console.log("🚀 ~ mergeSort ~ middle:", middle);
  const left = numbers.slice(0, middle);
  if (LOG) console.log("🚀 ~ mergeSort ~ left:", left);
  const right = numbers.slice(middle);
  if (LOG) console.log("🚀 ~ mergeSort ~ right:", right);

  const result = merge(mergeSort(left), mergeSort(right));
  if (LOG) console.log("🚀 ~ mergeSort ~ result:", result);
  if (LOG) console.log("-------------------");
  return result;
}

function merge(left: number[], right: number[]): number[] {
  if (LOG) console.log("🚀 ~ merge ~ right:", right);
  if (LOG) console.log("🚀 ~ merge ~ left:", left);

  const sorted = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sorted.push(left[leftIndex]);
      leftIndex++;
    } else {
      sorted.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate the remaining elements
  // (one of the arrays may have elements left)
  return sorted.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
mergeSort(generateRandomArray(10));
