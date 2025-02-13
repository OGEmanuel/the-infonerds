import { clsx, type ClassValue } from 'clsx';
import seedrandom from 'seedrandom';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffleArray<T>(array: T[], seed?: string): T[] {
  // Create a copy of the array to avoid modifying the original
  const shuffledArray = [...array];

  if (seed) {
    // Use a seeded random number generator
    const rng = seedrandom(seed);

    // Fisher-Yates shuffle with seeded randomness
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
  } else {
    // Fallback to standard shuffle if no seed provided
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
  }

  return shuffledArray;
}

export function replaceHyphens(input: string): string {
  return input.replace(/-/g, ' ');
}
