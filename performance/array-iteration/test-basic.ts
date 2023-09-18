import {
  testEvery,
  testForEach,
  testForLoop,
  testForOfLoop,
  testMap,
  testReduce,
} from ".";
import { largeArr, midArr, smallArr } from "./test-data";

function runPerformanceTest(fn: any, testName: string, arr: number[]) {
  const numRuns = 100;
  let totalTime = 0n;
  let firstRunTime = 0n;

  for (let i = 0; i < numRuns; i++) {
    const start = process.hrtime.bigint();
    fn(arr);
    const end = process.hrtime.bigint();
    const runTime = end - start;

    if (i === 0) {
      firstRunTime = runTime;
    }

    totalTime += runTime;
  }

  console.log(`${testName} - First run: ${Number(firstRunTime) / 1e6}ms`);
  const averageTime = Number(totalTime) / numRuns / 1e6; // convert to milliseconds
  console.log(`${testName} - Average over ${numRuns} runs: ${averageTime}ms`);
}
console.log("////////////////////////////////////////////////////////////////");
runPerformanceTest(testForLoop, "For Loop - small", smallArr);
runPerformanceTest(testForLoop, "For Loop - mid", midArr);
runPerformanceTest(testForLoop, "For Loop - large", largeArr);
console.log("////////////////////////////////////////////////////////////////");
runPerformanceTest(testForOfLoop, "For...of Loop - small", smallArr);
runPerformanceTest(testForOfLoop, "For...of Loop - mid", midArr);
runPerformanceTest(testForOfLoop, "For...of Loop - large", largeArr);
console.log("////////////////////////////////////////////////////////////////");
runPerformanceTest(testForEach, "Array - forEach() - small", smallArr);
runPerformanceTest(testForEach, "Array - forEach() - mid", midArr);
runPerformanceTest(testForEach, "Array - forEach() - large", largeArr);
console.log("////////////////////////////////////////////////////////////////");
runPerformanceTest(testMap, "Array - map() - small", smallArr);
runPerformanceTest(testMap, "Array - map() - mid", midArr);
runPerformanceTest(testMap, "Array - map() - large", largeArr);
console.log("////////////////////////////////////////////////////////////////");
runPerformanceTest(testReduce, "Array - reduce() - small", smallArr);
runPerformanceTest(testReduce, "Array - reduce() - mid", midArr);
runPerformanceTest(testReduce, "Array - reduce() - large", largeArr);
console.log("////////////////////////////////////////////////////////////////");
runPerformanceTest(testEvery, "Array - every() - small", smallArr);
runPerformanceTest(testEvery, "Array - every() - mid", midArr);
runPerformanceTest(testEvery, "Array - every() - large", largeArr);
console.log("////////////////////////////////////////////////////////////////");
