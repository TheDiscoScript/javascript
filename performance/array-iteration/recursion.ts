export function fibonacciForLoop(depth: number): number[] {
  if (depth <= 1) return [1];
  const sequence = [];

  let [a, b] = [1, 0];

  for (let i = 0; i < depth; i++) {
    [a, b] = [a + b, a];
    sequence.push(a);
  }

  return sequence;
}

export function fibonacciRecursion(depth: number): number[] {
  const sequence = [];

  const fib = (n: number): number => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  };

  for (let i = 0; i < depth; i++) {
    sequence.push(fib(i));
  }

  return sequence;
}

export function fibonacciRecursionCache(depth: number): number {
  const memo = new Map<number, number>();

  const fib = (n: number): number => {
    if (n <= 1) return n;

    if (memo.has(n)) return memo.get(n)!;

    const result = fib(n - 1) + fib(n - 2);
    memo.set(n, result);
    return result;
  };

  const sequence = [];
  for (let i = 0; i < depth; i++) {
    sequence.push(fib(i));
  }

  return fib(depth);
}

export function fibonacciArithmetic(depth: number): number[] {
  const phi = (1 + Math.sqrt(5)) / 2;
  const sequence = [];

  for (let i = 0; i < depth; i++) {
    sequence.push(Math.round(Math.pow(phi, i) / Math.sqrt(5)));
  }

  return sequence;
}
