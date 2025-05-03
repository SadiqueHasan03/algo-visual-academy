# Big O Notation

## Introduction

Big O Notation is a mathematical notation used in computer science to describe the performance or complexity of an algorithm. It provides an upper bound on the growth rate of the function.

### Why Does Efficiency Matter?

As input sizes grow, the differences in efficiency between algorithms become more apparent. An inefficient algorithm may be acceptable for small datasets but completely impractical for larger ones.

### Common Time Complexities

- **O(1) - Constant time:** The execution time remains the same regardless of the input size. Examples: Accessing an array element, adding a node to the front of a linked list.
- **O(log n) - Logarithmic time:** The execution time grows logarithmically as the input size increases. Examples: Binary search, balanced binary search trees.
- **O(n) - Linear time:** The execution time grows linearly with the input size. Examples: Linear search, traversing an array.
- **O(n log n) - Linearithmic time:** Common in efficient sorting algorithms. Examples: Merge sort, quicksort (average case).
- **O(n²) - Quadratic time:** The execution time is proportional to the square of the input size. Examples: Bubble sort, insertion sort, selection sort.
- **O(2^n) - Exponential time:** The execution time doubles with each addition to the input. Examples: The naive recursive approach to the Fibonacci sequence, the traveling salesman problem.

### Analyzing Algorithms with Big O

When analyzing an algorithm:

1. Focus on the dominant term (highest order of growth)
2. Drop coefficients and lower-order terms
3. Consider the worst-case scenario

### Example Analysis

```javascript
function findMax(arr) {
  let max = arr[0]; // O(1)
  for (let i = 1; i < arr.length; i++) { // O(n)
    if (arr[i] > max) { // O(1)
      max = arr[i]; // O(1)
    }
  }
  return max; // O(1)
}
```

This function has a time complexity of O(n) since it traverses the array once.