
import { Step } from '../types/sortingTypes';

export const selectionSort = (array: number[]): Step[] => {
  const steps: Step[] = [];
  const arr = [...array];
  const n = arr.length;
  const sorted: number[] = [];
  
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    
    // Find the minimum element in the unsorted part
    for (let j = i + 1; j < n; j++) {
      // Comparing step
      steps.push({
        array: [...arr],
        comparing: [minIdx, j],
        swapping: [],
        sorted: [...sorted]
      });
      
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    
    // If the minimum element is not at position i
    if (minIdx !== i) {
      // Swapping step
      steps.push({
        array: [...arr],
        comparing: [],
        swapping: [i, minIdx],
        sorted: [...sorted]
      });
      
      // Swap the found minimum element with the first element
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    
    // Mark current position as sorted
    sorted.push(i);
    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [],
      sorted: [...sorted]
    });
  }
  
  return steps;
};
