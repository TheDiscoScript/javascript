import Benchmark from "benchmark";
import {
  fibonacciArithmetic,
  fibonacciForLoop,
  fibonacciRecursion,
  fibonacciRecursionCache,
} from "../recursion";
import {
  fibonnaciDepth_1,
  fibonnaciDepth_10,
  fibonnaciDepth_5,
  fibonnaciDepth_20,
  fibonnaciDepth_30,
  fibonnaciDepth_50,
  fibonnaciDepth_100,
} from "../test-data";

const suite = new Benchmark.Suite();

suite
  .add("Fibonacci - 1 - for loop", function () {
    fibonacciForLoop(fibonnaciDepth_1);
  })
  .add("Fibonacci - 1 - recursion", function () {
    fibonacciRecursion(fibonnaciDepth_1);
  })
  .add("Fibonacci - 1 - recursion cache", function () {
    fibonacciRecursionCache(fibonnaciDepth_1);
  })
  .add("Fibonacci - 1 - arithmetic", function () {
    fibonacciArithmetic(fibonnaciDepth_1);
  })
  //
  .add("Fibonacci - 5 - for loop", function () {
    fibonacciForLoop(fibonnaciDepth_5);
  })
  .add("Fibonacci - 5 - recursion", function () {
    fibonacciRecursion(fibonnaciDepth_5);
  })
  .add("Fibonacci - 5 - recursion cache", function () {
    fibonacciRecursionCache(fibonnaciDepth_5);
  })
  .add("Fibonacci - 5 - arithmetic", function () {
    fibonacciArithmetic(fibonnaciDepth_5);
  })
  //
  .add("Fibonacci - 10 - for loop", function () {
    fibonacciForLoop(fibonnaciDepth_10);
  })
  .add("Fibonacci - 10 - recursion", function () {
    fibonacciRecursion(fibonnaciDepth_10);
  })
  .add("Fibonacci - 10 - recursion cache", function () {
    fibonacciRecursionCache(fibonnaciDepth_10);
  })
  .add("Fibonacci - 10 - arithmetic", function () {
    fibonacciArithmetic(fibonnaciDepth_10);
  })
  //
  .add("Fibonacci - 20 - for loop", function () {
    fibonacciForLoop(fibonnaciDepth_20);
  })
  .add("Fibonacci - 20 - recursion", function () {
    fibonacciRecursion(fibonnaciDepth_20);
  })
  .add("Fibonacci - 20 - recursion cache", function () {
    fibonacciRecursionCache(fibonnaciDepth_20);
  })
  .add("Fibonacci - 20 - arithmetic", function () {
    fibonacciArithmetic(fibonnaciDepth_20);
  })
  //
  .add("Fibonacci - 30 - for loop", function () {
    fibonacciForLoop(fibonnaciDepth_30);
  })
  .add("Fibonacci - 30 - recursion", function () {
    fibonacciRecursion(fibonnaciDepth_30);
  })
  .add("Fibonacci - 30 - recursion cache", function () {
    fibonacciRecursionCache(fibonnaciDepth_30);
  })
  .add("Fibonacci - 30 - arithmetic", function () {
    fibonacciArithmetic(fibonnaciDepth_30);
  })
  //
  .add("Fibonacci - 50 - for loop", function () {
    fibonacciForLoop(fibonnaciDepth_50);
  })
  //   .add("Fibonacci - 50 - recursion", function () {
  //     //    fibonacciRecursion(fibonnaciDepth_50);
  //     // console.log("fibonacciRecursion(fibonnaciDepth_50) is too slow");
  //     return;
  //   })
  .add("Fibonacci - 50 - recursion cache", function () {
    fibonacciRecursionCache(fibonnaciDepth_50);
  })
  .add("Fibonacci - 50 - arithmetic", function () {
    fibonacciArithmetic(fibonnaciDepth_50);
  })
  //
  .add("Fibonacci - 100 - for loop", function () {
    fibonacciForLoop(fibonnaciDepth_100);
  })
  //   .add("Fibonacci - 100 - recursion", function () {
  //     return;
  //     //  fibonacciRecursion(fibonnaciDepth_100);
  //   })
  .add("Fibonacci - 100 - recursion cache", function () {
    fibonacciRecursionCache(fibonnaciDepth_100);
  })
  .add("Fibonacci - 100 - arithmetic", function () {
    fibonacciArithmetic(fibonnaciDepth_100);
  })
  //
  .on("cycle", function (event: any) {
    console.log(String(event.target));
  })
  // .on("complete", function (this: any) {
  //   console.log("\n--- Memory Benchmarks ---");
  // })
  .run({ async: true, minSamples: 20 });
