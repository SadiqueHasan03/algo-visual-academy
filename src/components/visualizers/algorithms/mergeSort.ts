
import { Step } from '../types/sortingTypes';

export function mergeSort(array: number[]): Step[] {
  const steps: Step[] = [{ array: [...array], comparing: [], swapping: [], sorted: [] }];
  
  function merge(arr: number[], l: number, m: number, r: number) {
    const n1 = m - l + 1;
    const n2 = r - m;
    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++) L[i] = arr[l + i];
    for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
      steps.push({
        array: [...arr],
        comparing: [l + i, m + 1 + j],
        swapping: [],
        sorted: []
      });

      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }

    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }

  function sort(arr: number[], l: number, r: number) {
    if (l >= r) return;
    const m = l + Math.floor((r - l) / 2);
    sort(arr, l, m);
    sort(arr, m + 1, r);
    merge(arr, l, m, r);
  }

  sort(array, 0, array.length - 1);
  steps.push({ array: [...array], comparing: [], swapping: [], sorted: [...array.keys()] });
  return steps;
}
