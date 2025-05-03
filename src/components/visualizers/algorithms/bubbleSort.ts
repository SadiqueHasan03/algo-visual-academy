
import { Step } from '../types/sortingTypes';

export const bubbleSort = (array: number[]): Step[] => {
  const steps: Step[] = [];
  const arr = [...array];
  const n = arr.length;
  const sorted: number[] = [];
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Comparing step
      steps.push({
        array: [...arr],
        comparing: [j, j + 1],
        swapping: [],
        sorted: [...sorted]
      });
      
      if (arr[j] > arr[j + 1]) {
        // Swapping step
        steps.push({
          array: [...arr],
          comparing: [],
          swapping: [j, j + 1],
          sorted: [...sorted]
        });
        
        // Perform swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    // Mark as sorted
    sorted.unshift(n - i - 1);
    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [],
      sorted: [...sorted]
    });
  }
  
  return steps;
};
