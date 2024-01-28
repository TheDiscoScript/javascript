export function generateRandomArray(length: number): number[] {
  const set = new Set<number>();
  const range = length; // Ensure this is at least as large as 'length'

  while (set.size < length) {
    const randomNum = Math.floor(Math.random() * range);
    set.add(randomNum);
  }

  return Array.from(set);
}
