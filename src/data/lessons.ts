interface Lesson {
  slug: string;
  title: string;
  category: string;
  description: string;
  content: string; // Should contain Markdown
  examples?: string; // Should contain Markdown
  resources?: string; // Should contain Markdown
  visualizerPath?: string;
  nextLesson?: {
    slug: string;
    title: string;
  };
  prevLesson?: {
    slug: string;
    title: string;
  };
}

export const lessons: Lesson[] = [
  {
    slug: "what-are-algorithms",
    title: "What are Algorithms?",
    category: "Introduction to Algorithms",
    description: "Understanding the fundamentals of algorithms",
    content: `
## Introduction to Algorithms

An algorithm is a step-by-step procedure for solving a problem or accomplishing a task. In computer science, algorithms serve as the foundation for everything we do with computers.

### Key Characteristics of Algorithms

-   **Input:** An algorithm takes zero or more values as input
-   **Output:** An algorithm produces at least one value as output
-   **Definiteness:** Each step must be precisely defined
-   **Finiteness:** Must terminate after finite steps
-   **Effectiveness:** Each step must be basic enough to execute

### Why Study Algorithms?

1.  **Efficiency:** Solve problems faster with fewer resources
2.  **Scalability:** Crucial for growing data sizes
3.  **Problem-Solving:** Improves general problem-solving skills
4.  **Foundation:** Building blocks for complex systems

### Common Algorithm Categories

-   Search algorithms
-   Sorting algorithms
-   Graph algorithms
-   Dynamic programming
-   Divide and conquer
    `,
    nextLesson: {
      slug: "big-o-notation",
      title: "Big O Notation"
    }
  },

  {
    slug: "big-o-notation",
    title: "Big O Notation",
    category: "Introduction to Algorithms",
    description: "Understanding how to analyze algorithm efficiency",
    content: `
## Big O Notation

Big O Notation is a mathematical notation used in computer science to describe the performance or complexity of an algorithm. It provides an upper bound on the growth rate of the function.

### Why Does Efficiency Matter?

As input sizes grow, the differences in efficiency between algorithms become more apparent. An inefficient algorithm may be acceptable for small datasets but completely impractical for larger ones.

### Common Time Complexities

-   **O(1) - Constant time:** The execution time remains the same regardless of the input size. Examples: Accessing an array element, adding a node to the front of a linked list.
-   **O(log n) - Logarithmic time:** The execution time grows logarithmically as the input size increases. Examples: Binary search, balanced binary search trees.
-   **O(n) - Linear time:** The execution time grows linearly with the input size. Examples: Linear search, traversing an array.
-   **O(n log n) - Linearithmic time:** Common in efficient sorting algorithms. Examples: Merge sort, quicksort (average case).
-   **O(n²) - Quadratic time:** The execution time is proportional to the square of the input size. Examples: Bubble sort, insertion sort, selection sort.
-   **O(2^n) - Exponential time:** The execution time doubles with each addition to the input. Examples: The naive recursive approach to the Fibonacci sequence, the traveling salesman problem.

### Analyzing Algorithms with Big O

When analyzing an algorithm:

1.  Focus on the dominant term (highest order of growth)
2.  Drop coefficients and lower-order terms
3.  Consider the worst-case scenario

### Example Analysis

\`\`\`javascript
function findMax(arr) {
  let max = arr[0]; // O(1)
  for (let i = 1; i < arr.length; i++) { // O(n)
    if (arr[i] > max) { // O(1)
      max = arr[i]; // O(1)
    }
  }
  return max; // O(1)
}
\`\`\`

This function has a time complexity of O(n) since it traverses the array once.
    `,
    examples: `
### Big O Examples

#### O(1) - Constant Time
\`\`\`javascript
function getFirstElement(array) {
  return array[0];
}
\`\`\`

#### O(n) - Linear Time
\`\`\`javascript
function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
\`\`\`

#### O(n²) - Quadratic Time Example
\`\`\`javascript
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) { // O(n)
    for (let j = 0; j < array.length - 1; j++) { // O(n)
      if (array[j] > array[j + 1]) {
        // Swap elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
\`\`\`

#### O(log n) - Logarithmic Time Example
\`\`\`javascript
function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (sortedArray[mid] === target) {
      return mid; // Found the target
    } else if (sortedArray[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target not found
}
\`\`\`
    `,
    resources: `
### Additional Resources on Big O Notation

-   [Visual Big O Cheat Sheet](#)
-   [Interactive Complexity Calculator](#)
-   [Big O Notation Practice Problems](#)

#### Recommended Reading

-   "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein
-   "Algorithms" by Robert Sedgewick

#### Online Courses

-   MIT OpenCourseWare: Introduction to Algorithms
-   Stanford's Algorithms Specialization on Coursera
    `,
    prevLesson: {
      slug: "what-are-algorithms",
      title: "What are Algorithms?"
    },
    nextLesson: {
      slug: "time-space-complexity",
      title: "Time & Space Complexity"
    }
  },

  {
    slug: "time-space-complexity",
    title: "Time & Space Complexity",
    category: "Introduction to Algorithms",
    description: "Understanding the trade-offs between time and memory usage",
    content: `
## Time & Space Complexity

When analyzing algorithms, we consider both time complexity (how long an algorithm takes to run) and space complexity (how much memory an algorithm uses).

### Time Complexity

Time complexity measures the number of operations an algorithm performs as a function of the input size. We've already covered this in detail with Big O notation.

### Space Complexity

Space complexity measures the amount of memory an algorithm uses as a function of the input size. We also use Big O notation to express space complexity.

#### Types of Space Usage

-   **Input Space:** Memory needed to store the input data.
-   **Auxiliary Space:** Extra space used by the algorithm (not including input space).
-   **Total Space:** Input space plus auxiliary space.

### Common Space Complexities

-   **O(1) - Constant Space:** The algorithm uses a fixed amount of memory regardless of input size.
-   **O(n) - Linear Space:** The algorithm's memory usage grows linearly with the input size.
-   **O(n²) - Quadratic Space:** The algorithm's memory usage grows quadratically with the input size.

### Time-Space Trade-offs

Often, algorithms can be optimized for either time or space, but not both simultaneously. This creates trade-offs:

-   **Memoization:** Trading space for time by storing previously computed results.
-   **In-place algorithms:** Trading time for space by modifying the input directly.
-   **Compression:** Trading time for space by compressing data before processing.

### Example: Time-Space Trade-off in Sorting

Merge sort uses O(n) extra space but guarantees O(n log n) time complexity, while quicksort uses only O(log n) extra space on average but can degrade to O(n²) time in the worst case.
    `,
    examples: `
### Time & Space Complexity Examples

#### Example 1: Linear Search (O(n) time, O(1) space)
\`\`\`javascript
function linearSearch(arr, target) {
  // Time Complexity: O(n) - may need to check every element
  // Space Complexity: O(1) - only uses a few variables

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
\`\`\`

#### Example 2: Creating a Duplicate Array (O(n) time, O(n) space)
\`\`\`javascript
function duplicateArray(arr) {
  // Time Complexity: O(n) - processes each element once
  // Space Complexity: O(n) - creates a new array of the same size

  const duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    duplicate[i] = arr[i];
  }
  return duplicate;
}
\`\`\`

#### Example 3: Recursive Fibonacci (O(2^n) time, O(n) space)
\`\`\`javascript
function fibonacci(n) {
  // Time Complexity: O(2^n) - exponential due to repeated calculations
  // Space Complexity: O(n) - maximum call stack depth

  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
\`\`\`

#### Example 4: Memoized Fibonacci (O(n) time, O(n) space)
\`\`\`javascript
function fibonacciMemoized(n, memo = {}) {
  // Time Complexity: O(n) - each value computed only once
  // Space Complexity: O(n) - stores n results in the memo object

  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
  return memo[n];
}
\`\`\`

This demonstrates the classic time-space trade-off: by using extra memory in the memoized version, we dramatically improve the time complexity from O(2^n) to O(n).
    `,
    resources: `
### Additional Resources on Time & Space Complexity

#### Interactive Tools
-   [Algorithm Visualization Platform](#)
-   [Memory Usage Profiler](#)

#### Practice Problems
-   [Time Complexity Analysis Exercises](#)
-   [Space Complexity Challenges](#)

#### Additional Reading
-   "Cracking the Coding Interview" by Gayle Laakmann McDowell
-   "Algorithms in a Nutshell" by George T. Heineman
    `,
    prevLesson: {
      slug: "big-o-notation",
      title: "Big O Notation"
    },
    nextLesson: {
      slug: "bubble-sort",
      title: "Bubble Sort"
    }
  },

  {
    slug: "bubble-sort",
    title: "Bubble Sort",
    category: "Sorting Algorithms",
    description: "Learn about the bubble sort algorithm",
    content: `
## Bubble Sort Algorithm

Bubble Sort is one of the simplest sorting algorithms. It works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order.

### How Bubble Sort Works

1.  Start at the beginning of the array.
2.  Compare adjacent elements. If the first is greater than the second, swap them.
3.  Move to the next pair of adjacent elements and repeat the comparison and swap if necessary.
4.  After one complete pass through the array, the largest element will have "bubbled up" to the end.
5.  Repeat the process for all elements except the last one (which is already sorted).
6.  Continue until no more swaps are needed, indicating that the array is sorted.

### Bubble Sort Implementation

\`\`\`javascript
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    // Flag to optimize if array is already sorted
    let swapped = false;

    // Last i elements are already sorted
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no swapping occurred in this pass, array is sorted
    if (!swapped) {
      break;
    }
  }

  return arr;
}
\`\`\`

### Time and Space Complexity

-   **Best Case Time Complexity:** O(n) - Occurs when the array is already sorted
-   **Average Case Time Complexity:** O(n²)
-   **Worst Case Time Complexity:** O(n²) - Occurs when the array is sorted in reverse order
-   **Space Complexity:** O(1) - Only requires a constant amount of additional space

### Advantages and Disadvantages

#### Advantages:

-   Very simple to understand and implement
-   Requires only a constant amount of additional memory space
-   Performs well on small data sets or nearly sorted data

#### Disadvantages:

-   Inefficient for large data sets with O(n²) time complexity
-   Significantly slower than more advanced algorithms like quicksort, mergesort, or heapsort
    `,
    examples: `
### Bubble Sort Examples

#### Example 1: Sorting [5, 1, 4, 2, 8]

First Pass:
-   Compare 5 > 1? Yes, swap: \`[1, 5, 4, 2, 8]\`
-   Compare 5 > 4? Yes, swap: \`[1, 4, 5, 2, 8]\`
-   Compare 5 > 2? Yes, swap: \`[1, 4, 2, 5, 8]\`
-   Compare 5 > 8? No, don't swap: \`[1, 4, 2, 5, 8]\`

Second Pass:
-   Compare 1 > 4? No, don't swap: \`[1, 4, 2, 5, 8]\`
-   Compare 4 > 2? Yes, swap: \`[1, 2, 4, 5, 8]\`
-   Compare 4 > 5? No, don't swap: \`[1, 2, 4, 5, 8]\`

Third Pass:
-   Compare 1 > 2? No, don't swap: \`[1, 2, 4, 5, 8]\`
-   Compare 2 > 4? No, don't swap: \`[1, 2, 4, 5, 8]\`

Fourth Pass:
-   Compare 1 > 2? No, don't swap: \`[1, 2, 4, 5, 8]\`

The array is now sorted.

#### Optimized Bubble Sort Implementation
\`\`\`javascript
function optimizedBubbleSort(arr) {
  let n = arr.length; // Corrected to let for reassignment
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    // Decrease n because the largest element is already at the end
    n--;
  } while (swapped);

  return arr;
}
\`\`\`
    `,
    resources: `
### Bubble Sort Resources

#### Visualizations
-   [Interactive Bubble Sort Visualization](#)
-   [Side-by-side Algorithm Comparison](#)

#### Practice Problems
-   [Implement Bubble Sort with Custom Comparators](#)
-   [Optimize Bubble Sort for Nearly Sorted Data](#)

#### Advanced Topics
-   [Cocktail Sort - A Variation of Bubble Sort](#)
-   [Parallelizing Bubble Sort](#)
    `,
    visualizerPath: "/visualizers/sorting?algorithm=bubble",
    prevLesson: {
      slug: "time-space-complexity",
      title: "Time & Space Complexity"
    },
    nextLesson: {
      slug: "selection-sort",
      title: "Selection Sort"
    }
  },

  {
    slug: "selection-sort",
    title: "Selection Sort",
    category: "Sorting Algorithms",
    description: "Learn about the selection sort algorithm",
    content: `
## Selection Sort Algorithm

Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: a sorted sublist built up from left to right and a sublist of the remaining unsorted items.

### How Selection Sort Works

1.  Find the minimum element in the unsorted part of the array.
2.  Swap it with the element at the beginning of the unsorted part.
3.  Move the boundary between the sorted and unsorted parts one element to the right.
4.  Repeat until the entire array is sorted.

### Selection Sort Implementation

\`\`\`javascript
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in the unsorted portion
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the element at position i
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}
\`\`\`

### Time and Space Complexity

-   **Best Case Time Complexity:** O(n²) - Even if the array is already sorted, selection sort will still check all elements
-   **Average Case Time Complexity:** O(n²)
-   **Worst Case Time Complexity:** O(n²)
-   **Space Complexity:** O(1) - Only requires a constant amount of additional space

### Advantages and Disadvantages

#### Advantages:

-   Simple implementation
-   Performs well on small data sets
-   Has a low memory requirement (O(1) auxiliary space)
-   Minimizes the number of swaps (O(n) swaps in the worst case, which is better than bubble sort's O(n²))

#### Disadvantages:

-   O(n²) time complexity makes it inefficient for large data sets
-   Does not adapt to the data set (performs the same number of operations regardless of initial order)
-   Not stable (may change the relative order of equal elements)
    `,
    examples: `
### Selection Sort Examples

#### Example: Sorting [64, 25, 12, 22, 11]

First Pass:
-   Find minimum in \`[64, 25, 12, 22, 11]\`: 11 at index 4
-   Swap 64 and 11: \`[11, 25, 12, 22, 64]\`

Second Pass:
-   Find minimum in \`[25, 12, 22, 64]\`: 12 at index 2 (relative to original index, so 2)
-   Swap 25 and 12: \`[11, 12, 25, 22, 64]\`

Third Pass:
-   Find minimum in \`[25, 22, 64]\`: 22 at index 3
-   Swap 25 and 22: \`[11, 12, 22, 25, 64]\`

Fourth Pass:
-   Find minimum in \`[25, 64]\`: 25 at index 3
-   Since 25 is already at the correct position, no swap needed

The array is now sorted: \`[11, 12, 22, 25, 64]\`

*(Note: The provided "Binary Insertion Sort" example in the original data seems misplaced under Selection Sort. It's an optimization for Insertion Sort. I'll keep it here as per the original data but add a note)*

#### Interesting Variation (Misplaced Example: Binary Insertion Sort)
\`\`\`javascript
function binaryInsertionSort(arr) {
  // Note: This is actually a variation of Insertion Sort, not Selection Sort.
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let left = 0;
    let right = i - 1;

    // Use binary search to find the position to insert current element
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] > key) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    // Move all elements after left one position ahead
    for (let j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j];
    }

    // Insert the current element at correct position
    arr[left] = key;
  }

  return arr;
}
\`\`\`
This variation reduces the number of comparisons but still has O(n²) time complexity due to the element shifting operation (in Insertion Sort context).
    `,
    resources: `
### Selection Sort Resources

#### Visualizations
-   [Interactive Selection Sort Visualization](#)
-   [Comparison with Other Elementary Sorting Algorithms](#)

#### Practice Problems
-   [Implement Selection Sort for Linked Lists](#)
-   [Selection Sort with Multiple Keys](#)

#### Advanced Topics
-   [Heapsort - An Optimized Version of Selection Sort](#)
-   [Dual Selection Sort - Finding Min and Max in Same Pass](#)
    `,
    visualizerPath: "/visualizers/sorting?algorithm=selection",
    prevLesson: {
      slug: "bubble-sort",
      title: "Bubble Sort"
    },
    nextLesson: {
      slug: "insertion-sort",
      title: "Insertion Sort"
    }
  },

  {
    slug: "insertion-sort",
    title: "Insertion Sort",
    category: "Sorting Algorithms",
    description: "Learn about the insertion sort algorithm",
    content: `
## Insertion Sort Algorithm

Insertion Sort is a simple sorting algorithm that builds the sorted array one item at a time. It's much like sorting playing cards in your hand.

### How Insertion Sort Works

1.  Start with the second element (consider the first element as already sorted).
2.  Compare the current element with the previous elements in the sorted portion.
3.  If a previous element is greater than the current element, move the previous element one position ahead.
4.  Repeat step 3 until you find an element smaller than or equal to the current element, or reach the beginning of the array.
5.  Insert the current element at the correct position (just after the element smaller than or equal to it, or at the beginning).
6.  Repeat steps 2-5 for all elements in the array.

### Insertion Sort Implementation

\`\`\`javascript
function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // Store the current element to be positioned
    const key = arr[i];

    // Initialize position for comparison (start from the element before the key)
    let j = i - 1;

    // Find position for the current element by shifting larger elements to the right
    while (j >= 0 && arr[j] > key) {
      // Shift elements to the right
      arr[j + 1] = arr[j];
      j--;
    }

    // Place the current element (key) at its correct sorted position
    arr[j + 1] = key;
  }

  return arr;
}
\`\`\`

### Time and Space Complexity

-   **Best Case Time Complexity:** O(n) - Occurs when the array is already sorted
-   **Average Case Time Complexity:** O(n²)
-   **Worst Case Time Complexity:** O(n²) - Occurs when the array is sorted in reverse order
-   **Space Complexity:** O(1) - Only requires a constant amount of additional space

### Advantages and Disadvantages

#### Advantages:

-   Simple implementation
-   Efficient for small data sets
-   More efficient in practice than most other simple O(n²) algorithms like selection sort or bubble sort, especially for nearly sorted data.
-   Adaptive - efficient for data sets that are already substantially sorted
-   Stable - doesn't change the relative order of elements with equal keys
-   In-place - only requires a constant amount O(1) of additional memory space
-   Online - can sort a list as it receives it

#### Disadvantages:

-   O(n²) time complexity makes it inefficient for large data sets
-   For large data sets, other sorting techniques like merge sort, quicksort, or heapsort are more efficient
    `,
    examples: `
### Insertion Sort Examples

#### Example: Sorting [12, 11, 13, 5, 6]

Start with considering the first element as sorted: \`[12]\`

Pass 1 (i=1, key=11):
-   Compare 11 with 12. 12 > 11.
-   Shift 12 to index 1: \`[12, 12, 13, 5, 6]\`
-   j becomes -1. Insert key (11) at j+1 (index 0): \`[11, 12, 13, 5, 6]\`

Pass 2 (i=2, key=13):
-   Compare 13 with 12. 12 < 13.
-   Stop comparison. Insert key (13) at j+1 (index 2): \`[11, 12, 13, 5, 6]\` (no change)

Pass 3 (i=3, key=5):
-   Compare 5 with 13. 13 > 5. Shift 13: \`[11, 12, 13, 13, 6]\`
-   Compare 5 with 12. 12 > 5. Shift 12: \`[11, 12, 12, 13, 6]\`
-   Compare 5 with 11. 11 > 5. Shift 11: \`[11, 11, 12, 13, 6]\`
-   j becomes -1. Insert key (5) at j+1 (index 0): \`[5, 11, 12, 13, 6]\`

Pass 4 (i=4, key=6):
-   Compare 6 with 13. 13 > 6. Shift 13: \`[5, 11, 12, 13, 13]\`
-   Compare 6 with 12. 12 > 6. Shift 12: \`[5, 11, 12, 12, 13]\`
-   Compare 6 with 11. 11 > 6. Shift 11: \`[5, 11, 11, 12, 13]\`
-   Compare 6 with 5. 5 < 6.
-   Stop comparison. Insert key (6) at j+1 (index 1): \`[5, 6, 11, 12, 13]\`

The array is now sorted: \`[5, 6, 11, 12, 13]\`

#### Binary Insertion Sort

An optimization of insertion sort that uses binary search to reduce the number of comparisons:

\`\`\`javascript
function binaryInsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let left = 0;
    let right = i - 1;
    let insertionPoint = i; // Default if key is largest

    // Use binary search to find the correct insertion point
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] > key) {
        insertionPoint = mid; // Potential insertion point found
        right = mid - 1; // Search in the left half
      } else {
        left = mid + 1; // Search in the right half
      }
    }

    // Shift elements from insertionPoint up to i-1 one position to the right
    for (let j = i - 1; j >= insertionPoint; j--) {
      arr[j + 1] = arr[j];
    }

    // Insert the key at the found insertion point
    arr[insertionPoint] = key;
  }

  return arr;
}
\`\`\`
This reduces the comparisons to O(n log n) but the swaps/shifts remain O(n²) in the worst case, so the overall worst-case time complexity is still O(n²).
    `,
    resources: `
### Insertion Sort Resources

#### Visualizations
-   [Interactive Insertion Sort Visualization](#)
-   [Comparison with Other Elementary Sorting Algorithms](#)

#### Practice Problems
-   [Implement Insertion Sort for Linked Lists](#)
-   [Optimize Insertion Sort for Nearly Sorted Data](#)

#### Advanced Topics
-   [Shell Sort - A Generalization of Insertion Sort](#)
-   [Insertion Sort with Skip Lists](#)
    `,
    visualizerPath: "/visualizers/sorting?algorithm=insertion",
    prevLesson: {
      slug: "selection-sort",
      title: "Selection Sort"
    }
    // No next lesson defined for the last item in this snippet
  }
]