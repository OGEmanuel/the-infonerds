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

export function advancedShuffleArray<T>(
  array: T[],
  options: {
    seed?: string;
    iterations?: number;
    diversityFactor?: number;
  } = {},
): T[] {
  const {
    seed,
    iterations = 3, // Multiple passes for increased randomness
    diversityFactor = 0.5, // Controls the intensity of shuffling
  } = options;

  // Create a copy of the original array
  let shuffledArray = [...array];

  // Create a seeded or standard random number generator
  const rng = seed ? seedrandom(seed) : Math.random;

  // Multiple shuffling techniques for increased randomness
  for (let iteration = 0; iteration < iterations; iteration++) {
    // Modified Fisher-Yates shuffle
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      // More dynamic swapping range
      const maxSwapRange = Math.max(
        1,
        Math.floor(i * (1 - diversityFactor * Math.pow(rng(), 2))),
      );

      const j = Math.max(0, i - Math.floor(rng() * maxSwapRange));

      // Swap elements
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    // Ensure item count remains consistent
    if (shuffledArray.length !== array.length) {
      shuffledArray = [...array];
    }
  }

  // Final probabilistic sorting for additional randomness
  if (rng() > 0.5) {
    shuffledArray.sort(() => rng() - 0.5);
  }

  return shuffledArray;
}

export function replaceHyphens(input: string): string {
  return input.replace(/-/g, ' ');
}
