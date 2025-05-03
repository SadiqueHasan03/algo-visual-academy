
import { Step } from '../types/sortingTypes';

export function quickSort(array: number[]): Step[] {
  const steps: Step[] = [{ array: [...array], comparing: [], swapping: [], sorted: [] }];
  
  function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
      steps.push({
        array: [...arr],
        comparing: [j, high],
        swapping: [],
        sorted: []
      });

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        steps.push({
          array: [...arr],
          comparing: [],
          swapping: [i, j],
          sorted: []
        });
      }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [i + 1, high],
      sorted: []
    });
    
    return i + 1;
  }

  function sort(arr: number[], low: number, high: number) {
    if (low < high) {
      const pi = partition(arr, low, high);
      steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        sorted: [pi]
      });
      
      sort(arr, low, pi - 1);
      sort(arr, pi + 1, high);
    }
  }

  sort(array, 0, array.length - 1);
  steps.push({
    array: [...array],
    comparing: [],
    swapping: [],
    sorted: [...array.keys()]
  });
  return steps;
}
