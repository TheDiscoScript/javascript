import Benchmark from "benchmark";
import {
  testEvery,
  testForEach,
  testForLoop,
  testForOfLoop,
  testMap,
  testReduce,
} from "..";
import { largeArr, midArr, smallArr, tinyArr } from "../test-data";

const suite = new Benchmark.Suite();

suite
  .add("For Loop - tiny", function () {
    testForLoop(tinyArr);
  })
  .add("For Loop - small", function () {
    testForLoop(smallArr);
  })
  .add("For Loop - mid", function () {
    testForLoop(midArr);
  })
  .add("For Loop - large", function () {
    testForLoop(largeArr);
  })
  //
  .add("For...of Loop - tiny", function () {
    testForOfLoop(tinyArr);
  })
  .add("For...of Loop - small", function () {
    testForOfLoop(smallArr);
  })
  .add("For...of Loop - mid", function () {
    testForOfLoop(midArr);
  })
  .add("For...of Loop - large", function () {
    testForOfLoop(largeArr);
  })
  //
  .add("Array - forEach() - tiny", function () {
    testForEach(tinyArr);
  })
  .add("Array - forEach() - small", function () {
    testForEach(smallArr);
  })
  .add("Array - forEach() - mid", function () {
    testForEach(midArr);
  })
  .add("Array - forEach() - large", function () {
    testForEach(largeArr);
  })
  //
  .add("Array - map() - tiny", function () {
    testMap(tinyArr);
  })
  .add("Array - map() - small", function () {
    testMap(smallArr);
  })
  .add("Array - map() - mid", function () {
    testMap(midArr);
  })
  .add("Array - map() - large", function () {
    testMap(largeArr);
  })
  //
  .add("Array - reduce() - tiny", function () {
    testReduce(tinyArr);
  })
  .add("Array - reduce() - small", function () {
    testReduce(smallArr);
  })
  .add("Array - reduce() - mid", function () {
    testReduce(midArr);
  })
  .add("Array - reduce() - large", function () {
    testReduce(largeArr);
  })
  //
  .add("Array - every() - tiny", function () {
    testEvery(tinyArr);
  })
  .add("Array - every() - small", function () {
    testEvery(smallArr);
  })
  .add("Array - every() - mid", function () {
    testEvery(midArr);
  })
  .add("Array - every() - large", function () {
    testEvery(largeArr);
  })
  .on("cycle", function (event: any) {
    console.log(String(event.target));
  })
  // .on("complete", function (this: any) {
  //   console.log("\n--- Memory Benchmarks ---");
  // })
  .run({ async: true, minSamples: 100 });
