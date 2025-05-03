
import { Step } from '../types/sortingTypes';

export const insertionSort = (array: number[]): Step[] => {
  const steps: Step[] = [];
  const arr = [...array];
  const n = arr.length;
  const sorted: number[] = [0]; // First element is considered sorted initially
  
  steps.push({
    array: [...arr],
    comparing: [],
    swapping: [],
    sorted: [...sorted]
  });
  
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    
    // Compare key with elements before it
    while (j >= 0) {
      // Comparing step
      steps.push({
        array: [...arr],
        comparing: [j, i],
        swapping: [],
        sorted: [...sorted]
      });
      
      if (arr[j] > key) {
        // Moving elements
        steps.push({
          array: [...arr],
          comparing: [],
          swapping: [j, j + 1],
          sorted: [...sorted]
        });
        
        arr[j + 1] = arr[j];
        j--;
      } else {
        break;
      }
    }
    
    // Place the key in its correct position
    arr[j + 1] = key;
    
    // Mark the element as sorted
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
