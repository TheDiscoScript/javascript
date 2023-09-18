export function measureMemory(fn: Function, label: string) {
  const initialMemory = process.memoryUsage().heapUsed;

  // Execute the function
  fn();

  const finalMemory = process.memoryUsage().heapUsed;

  console.log(
    `${label}: ${((finalMemory - initialMemory) / 1024 / 1024).toFixed(2)} MB`
  );
}
