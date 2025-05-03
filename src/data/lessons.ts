interface Lesson {
  slug: string;
  title: string;
  category: string;
  description: string;
  content: string;
  examples?: string;
  resources?: string;
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
      <h2>Introduction to Algorithms</h2>
      <p>An algorithm is a step-by-step procedure for solving a problem or accomplishing a task. In computer science, algorithms serve as the foundation for everything we do with computers.</p>
      
      <h3>Key Characteristics of Algorithms</h3>
      <ul>
        <li><strong>Input:</strong> An algorithm takes zero or more values as input.</li>
        <li><strong>Output:</strong> An algorithm produces at least one value as output.</li>
        <li><strong>Definiteness:</strong> Each step of an algorithm must be precisely defined.</li>
        <li><strong>Finiteness:</strong> An algorithm must terminate after a finite number of steps.</li>
        <li><strong>Effectiveness:</strong> Each step of an algorithm must be basic enough to be carried out.</li>
      </ul>
      
      <h3>Why Study Algorithms?</h3>
      <p>Understanding algorithms is crucial for several reasons:</p>
      <ol>
        <li><strong>Efficiency:</strong> Well-designed algorithms can solve problems more quickly and with fewer resources.</li>
        <li><strong>Scalability:</strong> As data sizes grow, efficient algorithms become increasingly important.</li>
        <li><strong>Problem-Solving:</strong> Algorithmic thinking improves your general problem-solving abilities.</li>
        <li><strong>Foundation:</strong> Algorithms are the building blocks for more complex software systems.</li>
      </ol>
      
      <h3>Common Algorithm Categories</h3>
      <ul>
        <li><strong>Search algorithms:</strong> Finding information within a data structure.</li>
        <li><strong>Sorting algorithms:</strong> Arranging data in a specific order.</li>
        <li><strong>Graph algorithms:</strong> Solving problems related to network structures.</li>
        <li><strong>Dynamic programming:</strong> Breaking problems into overlapping subproblems.</li>
        <li><strong>Divide and conquer:</strong> Breaking problems into non-overlapping subproblems.</li>
      </ul>
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
      <h2>Big O Notation</h2>
      <p>Big O Notation is a mathematical notation used in computer science to describe the performance or complexity of an algorithm. It provides an upper bound on the growth rate of the function.</p>
      
      <h3>Why Does Efficiency Matter?</h3>
      <p>As input sizes grow, the differences in efficiency between algorithms become more apparent. An inefficient algorithm may be acceptable for small datasets but completely impractical for larger ones.</p>
      
      <h3>Common Time Complexities</h3>
      <ul>
        <li><strong>O(1) - Constant time:</strong> The execution time remains the same regardless of the input size. Examples: Accessing an array element, adding a node to the front of a linked list.</li>
        <li><strong>O(log n) - Logarithmic time:</strong> The execution time grows logarithmically as the input size increases. Examples: Binary search, balanced binary search trees.</li>
        <li><strong>O(n) - Linear time:</strong> The execution time grows linearly with the input size. Examples: Linear search, traversing an array.</li>
        <li><strong>O(n log n) - Linearithmic time:</strong> Common in efficient sorting algorithms. Examples: Merge sort, quicksort (average case).</li>
        <li><strong>O(n²) - Quadratic time:</strong> The execution time is proportional to the square of the input size. Examples: Bubble sort, insertion sort, selection sort.</li>
        <li><strong>O(2^n) - Exponential time:</strong> The execution time doubles with each addition to the input. Examples: The naive recursive approach to the Fibonacci sequence, the traveling salesman problem.</li>
      </ul>
      
      <h3>Analyzing Algorithms with Big O</h3>
      <p>When analyzing an algorithm:</p>
      <ol>
        <li>Focus on the dominant term (highest order of growth)</li>
        <li>Drop coefficients and lower-order terms</li>
        <li>Consider the worst-case scenario</li>
      </ol>
      
      <h3>Example Analysis</h3>
      <pre><code>
function findMax(arr) {
  let max = arr[0]; // O(1)
  for (let i = 1; i < arr.length; i++) { // O(n)
    if (arr[i] > max) { // O(1)
      max = arr[i]; // O(1)
    }
  }
  return max; // O(1)
}
      </code></pre>
      <p>This function has a time complexity of O(n) since it traverses the array once.</p>
    `,
    examples: `
      <h3>Big O Examples</h3>
      
      <h4>O(1) - Constant Time Example</h4>
      <pre><code>
function getFirstElement(array) {
  return array[0]; // Always takes the same amount of time regardless of array size
}
      </code></pre>
      
      <h4>O(n) - Linear Time Example</h4>
      <pre><code>
function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) { // Loop runs n times
    total += array[i]; // O(1) operation
  }
  return total;
}
      </code></pre>
      
      <h4>O(n²) - Quadratic Time Example</h4>
      <pre><code>
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
      </code></pre>
      
      <h4>O(log n) - Logarithmic Time Example</h4>
      <pre><code>
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
      </code></pre>
    `,
    resources: `
      <h3>Additional Resources on Big O Notation</h3>
      <ul>
        <li><a href="#" class="text-algo-primary hover:underline">Visual Big O Cheat Sheet</a></li>
        <li><a href="#" class="text-algo-primary hover:underline">Interactive Complexity Calculator</a></li>
        <li><a href="#" class="text-algo-primary hover:underline">Big O Notation Practice Problems</a></li>
      </ul>
      
      <h4>Recommended Reading</h4>
      <ul>
        <li>"Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein</li>
        <li>"Algorithms" by Robert Sedgewick</li>
      </ul>
      
      <h4>Online Courses</h4>
      <ul>
        <li>MIT OpenCourseWare: Introduction to Algorithms</li>
        <li>Stanford's Algorithms Specialization on Coursera</li>
      </ul>
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
      <h2>Time & Space Complexity</h2>
      <p>When analyzing algorithms, we consider both time complexity (how long an algorithm takes to run) and space complexity (how much memory an algorithm uses).</p>
      
      <h3>Time Complexity</h3>
      <p>Time complexity measures the number of operations an algorithm performs as a function of the input size. We've already covered this in detail with Big O notation.</p>
      
      <h3>Space Complexity</h3>
      <p>Space complexity measures the amount of memory an algorithm uses as a function of the input size. We also use Big O notation to express space complexity.</p>
      
      <h4>Types of Space Usage</h4>
      <ul>
        <li><strong>Input Space:</strong> Memory needed to store the input data.</li>
        <li><strong>Auxiliary Space:</strong> Extra space used by the algorithm (not including input space).</li>
        <li><strong>Total Space:</strong> Input space plus auxiliary space.</li>
      </ul>
      
      <h3>Common Space Complexities</h3>
      <ul>
        <li><strong>O(1) - Constant Space:</strong> The algorithm uses a fixed amount of memory regardless of input size.</li>
        <li><strong>O(n) - Linear Space:</strong> The algorithm's memory usage grows linearly with the input size.</li>
        <li><strong>O(n²) - Quadratic Space:</strong> The algorithm's memory usage grows quadratically with the input size.</li>
      </ul>
      
      <h3>Time-Space Trade-offs</h3>
      <p>Often, algorithms can be optimized for either time or space, but not both simultaneously. This creates trade-offs:</p>
      <ul>
        <li><strong>Memoization:</strong> Trading space for time by storing previously computed results.</li>
        <li><strong>In-place algorithms:</strong> Trading time for space by modifying the input directly.</li>
        <li><strong>Compression:</strong> Trading time for space by compressing data before processing.</li>
      </ul>
      
      <h3>Example: Time-Space Trade-off in Sorting</h3>
      <p>Merge sort uses O(n) extra space but guarantees O(n log n) time complexity, while quicksort uses only O(log n) extra space on average but can degrade to O(n²) time in the worst case.</p>
    `,
    examples: `
      <h3>Time & Space Complexity Examples</h3>
      
      <h4>Example 1: Linear Search (O(n) time, O(1) space)</h4>
      <pre><code>
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
      </code></pre>
      
      <h4>Example 2: Creating a Duplicate Array (O(n) time, O(n) space)</h4>
      <pre><code>
function duplicateArray(arr) {
  // Time Complexity: O(n) - processes each element once
  // Space Complexity: O(n) - creates a new array of the same size
  
  const duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    duplicate[i] = arr[i];
  }
  return duplicate;
}
      </code></pre>
      
      <h4>Example 3: Recursive Fibonacci (O(2^n) time, O(n) space)</h4>
      <pre><code>
function fibonacci(n) {
  // Time Complexity: O(2^n) - exponential due to repeated calculations
  // Space Complexity: O(n) - maximum call stack depth
  
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
      </code></pre>
      
      <h4>Example 4: Memoized Fibonacci (O(n) time, O(n) space)</h4>
      <pre><code>
function fibonacciMemoized(n, memo = {}) {
  // Time Complexity: O(n) - each value computed only once
  // Space Complexity: O(n) - stores n results in the memo object
  
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
  return memo[n];
}
      </code></pre>
      
      <p>This demonstrates the classic time-space trade-off: by using extra memory in the memoized version, we dramatically improve the time complexity from O(2^n) to O(n).</p>
    `,
    resources: `
      <h3>Additional Resources on Time & Space Complexity</h3>
      
      <h4>Interactive Tools</h4>
      <ul>
        <li><a href="#" class="text-algo-primary hover:underline">Algorithm Visualization Platform</a></li>
        <li><a href="#" class="text-algo-primary hover:underline">Memory Usage Profiler</a></li>
      </ul>
      
      <h4>Practice Problems</h4>
      <ul>
        <li><a href="#" class="text-algo-primary hover:underline">Time Complexity Analysis Exercises</a></li>
        <li><a href="#" class="text-algo-primary hover:underline">Space Complexity Challenges</a></li>
      </ul>
      
      <h4>Additional Reading</h4>
      <ul>
        <li>"Cracking the Coding Interview" by Gayle Laakmann McDowell</li>
        <li>"Algorithms in a Nutshell" by George T. Heineman</li>
      </ul>
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
      <h2>Bubble Sort Algorithm</h2>
      <p>Bubble Sort is one of the simplest sorting algorithms. It works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order.</p>
      
      <h3>How Bubble Sort Works</h3>
      <ol>
        <li>Start at the beginning of the array.</li>
        <li>Compare adjacent elements. If the first is greater than the second, swap them.</li>
        <li>Move to the next pair of adjacent elements and repeat the comparison and swap if necessary.</li>
        <li>After one complete pass through the array, the largest element will have "bubbled up" to the end.</li>
        <li>Repeat the process for all elements except the last one (which is already sorted).</li>
        <li>Continue until no more swaps are needed, indicating that the array is sorted.</li>
      </ol>
      
      <h3>Bubble Sort Implementation</h3>
      <pre><code>
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
      </code></pre>
      
      <h3>Time and Space Complexity</h3>
      <ul>
        <li><strong>Best Case Time Complexity:</strong> O(n) - Occurs when the array is already sorted</li>
        <li><strong>Average Case Time Complexity:</strong> O(n²)</li>
        <li><strong>Worst Case Time Complexity:</strong> O(n²) - Occurs when the array is sorted in reverse order</li>
        <li><strong>Space Complexity:</strong> O(1) - Only requires a constant amount of additional space</li>
      </ul>
      
      <h3>Advantages and Disadvantages</h3>
      <h4>Advantages:</h4>
      <ul>
        <li>Very simple to understand and implement</li>
        <li>Requires only a constant amount of additional memory space</li>
        <li>Performs well on small data sets or nearly sorted data</li>
      </ul>
      
      <h4>Disadvantages:</h4>
      <ul>
        <li>Inefficient for large data sets with O(n²) time complexity</li>
        <li>Significantly slower than more advanced algorithms like quicksort, mergesort, or heapsort</li>
      </ul>
    `,
    examples: `
      <h3>Bubble Sort Examples</h3>
      
      <h4>Example 1: Sorting [5, 1, 4, 2, 8]</h4>
      
      <p>First Pass:</p>
      <ul>
        <li>Compare 5 > 1? Yes, swap: [1, 5, 4, 2, 8]</li>
        <li>Compare 5 > 4? Yes, swap: [1, 4, 5, 2, 8]</li>
        <li>Compare 5 > 2? Yes, swap: [1, 4, 2, 5, 8]</li>
        <li>Compare 5 > 8? No, don't swap: [1, 4, 2, 5, 8]</li>
      </ul>
      
      <p>Second Pass:</p>
      <ul>
        <li>Compare 1 > 4? No, don't swap: [1, 4, 2, 5, 8]</li>
        <li>Compare 4 > 2? Yes, swap: [1, 2, 4, 5, 8]</li>
        <li>Compare 4 > 5? No, don't swap: [1, 2, 4, 5, 8]</li>
      </ul>
      
      <p>Third Pass:</p>
      <ul>
        <li>Compare 1 > 2? No, don't swap: [1, 2, 4, 5, 8]</li>
        <li>Compare 2 > 4? No, don't swap: [1, 2, 4, 5, 8]</li>
      </ul>
      
      <p>Fourth Pass:</p>
      <ul>
        <li>Compare 1 > 2? No, don't swap: [1, 2, 4, 5, 8]</li>
      </ul>
      
      <p>The array is now sorted.</p>
      
      <h4>Optimized Bubble Sort Implementation</h4>
      <pre><code>
function optimizedBubbleSort(arr) {
  const n = arr.length;
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
      </code></pre>
    `,
    resources: `
      <h3>Bubble Sort Resources</h3>
      
      <h4>Visualizations</h4>
      <ul>
        <li><a href="#" class="text-algo-primary hover:underline">Interactive Bubble Sort Visualization</a></li>
        <li><a href="#" class="text-algo-primary hover:underline">Side-by-side Algorithm Comparison</a></li>
      </ul>
      
      <h4>Practice Problems</h4>
      <ul>
        <li><a href="#" class="text-algo-primary hover:underline">Implement Bubble Sort with Custom Comparators</a></li>
        <li><a href="#" class="text-algo-primary hover:underline">Optimize Bubble Sort for Nearly Sorted Data</a></li>
      </ul>
      
      <h4>Advanced Topics</h4>
      <ul>
        <li><a href="#" class="text-algo-primary hover:underline">Cocktail Sort - A Variation of Bubble Sort</a></li>
        <li><a href="#" class="text-algo-primary hover:underline">Parallelizing Bubble Sort</a></li>
      </ul>
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
      <h2>Selection Sort Algorithm</h2>
      <p>Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: a sorted sublist built up from left to right and a sublist of the remaining unsorted items.</p>
      
      <h3>How Selection Sort Works</h3>
      <ol>
        <li>Find the minimum element in the unsorted part of the array.</li>
        <li>Swap it with the element at the beginning of the unsorted part.</li>
        <li>Move the boundary between the sorted and unsorted parts one element to the right.</li>
        <li>Repeat until the entire array is sorted.</li>
      </ol>
      
      <h3>Selection Sort Implementation</h3>
      <pre><code>
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
      </code></pre>
      
      <h3>Time and Space Complexity</h3>
      <ul>
        <li><strong>Best Case Time Complexity:</strong> O(n²) - Even if the array is already sorted, selection sort will still check all elements</li>
        <li><strong>Average Case Time Complexity:</strong> O(n²)</li>
        <li><strong>Worst Case Time Complexity:</strong> O(n²)</li>
        <li><strong>Space Complexity:</strong> O(1) - Only requires a constant amount of additional space</li>
      </ul>
      
      <h3>Advantages and Disadvantages</h3>
      <h4>Advantages:</h4>
      <ul>
        <li>Simple implementation</li>
        <li>Performs well on small data sets</li>
        <li>Has a low memory requirement (O(1) auxiliary space)</li>
        <li>Minimizes the number of swaps (O(n) swaps in the worst case, which is better than bubble sort's O(n²))</li>
      </ul>
      
      <h4>Disadvantages:</h4>
      <ul>
        <li>O(n²) time complexity makes it inefficient for large data sets</li>
        <li>Does not adapt to the data set (performs the same number of operations regardless of initial order)</li>
        <li>Not stable (may change the relative order of equal elements)</li>
      </ul>
    `,
    examples: `
      <h3>Selection Sort Examples</h3>
      
      <h4>Example: Sorting [64, 25, 12, 22, 11]</h4>
      
      <p>First Pass:</p>
      <ul>
        <li>Find minimum in [64, 25, 12, 22, 11]: 11 at index 4</li>
        <li>Swap 64 and 11: [11, 25, 12, 22, 64]</li>
      </ul>
      
      <p>Second Pass:</p>
      <ul>
        <li>Find minimum in [25, 12, 22, 64]: 12 at index 2</li>
        <li>Swap 25 and 12: [11, 12, 25, 22, 64]</li>
      </ul>
      
      <p>Third Pass:</p>
      <ul>
        <li>Find minimum in [25, 22, 64]: 22 at index 3</li>
        <li>Swap 25 and 22: [11, 12, 22, 25, 64]</li>
      </ul>
      
      <p>Fourth Pass:</p>
      <ul>
        <li>Find minimum in [25, 64]: 25 at index 3</li>
        <li>Since 25 is already at the correct position, no swap needed</li>
      </ul>
      
      <p>The array is now sorted: [11, 12, 22, 25, 64]</p>
      
      <h4>Interesting Variation: Selection Sort with Binary Search</h4>
      <pre><code>
function binaryInsertionSort(arr) {
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
      </code></pre>
      <p>This variation reduces the number of comparisons but still has O(n²) time complexity due to the element shifting operation.</p>
    `,
    resources: `
      <h3>Selection Sort Resources</h3>
      
      <h4>Visualizations</h4>
      <ul>
        <li><a href="#" class="text-algo-primary hover:underline">Interactive Selection Sort Visualization</a></li>
        <li><a href="#" class="text-algo-primary hover:underline">Comparison with Other Elementary Sorting Algorithms</a></li>
      </ul>
      
      <h4>Practice Problems</h4>
      <ul>
        <li><a href="#" class="text-algo-primary hover:underline">Implement Selection Sort for Linked Lists</a></li>
        <li><a href="#" class="text-algo-primary hover:underline">Selection Sort with Multiple Keys</a></li>
      </ul>
      
      <h4>Advanced Topics</h4>
      <ul>
        <li><a href="#" class="text-algo-primary hover:underline">Heapsort - An Optimized Version of Selection Sort</a></li>
        <li><a href="#" class="text-algo-primary hover:underline">Dual Selection Sort - Finding Min and Max in Same Pass</a></li>
      </ul>
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
  
  // More lessons can be added here for all the lessons mentioned in Lessons.tsx
  {
    slug: "insertion-sort",
    title: "Insertion Sort",
    category: "Sorting Algorithms",
    description: "Learn about the insertion sort algorithm",
    content: `
      <h2>Insertion Sort Algorithm</h2>
      <p>Insertion Sort is a simple sorting algorithm that builds the sorted array one item at a time. It's much like sorting playing cards in your hand.</p>
      
      <h3>How Insertion Sort Works</h3>
      <ol>
        <li>Start with the second element (consider the first element as already sorted).</li>
        <li>Compare the current element with the previous elements.</li>
        <li>If the previous element is greater than the current element, move the previous element one position ahead.</li>
        <li>Repeat step 3 until you find the correct position for the current element.</li>
        <li>Insert the current element at the correct position.</li>
        <li>Repeat steps 2-5 for all elements in the array.</li>
      </ol>
      
      <h3>Insertion Sort Implementation</h3>
      <pre><code>
function insertionSort(arr) {
  const n = arr.length;
  
  for (let i = 1; i < n; i++) {
    // Store the current element to be positioned
    const key = arr[i];
    
    // Initialize position for comparison
    let j = i - 1;
    
    // Find position for the current element
    while (j >= 0 && arr[j] > key) {
      // Shift elements to the right
      arr[j + 1] = arr[j];
      j--;
    }
    
    // Place the current element at its correct position
    arr[j + 1] = key;
  }
  
  return arr;
}
      </code></pre>
      
      <h3>Time and Space Complexity</h3>
      <ul>
        <li><strong>Best Case Time Complexity:</strong> O(n) - Occurs when the array is already sorted</li>
        <li><strong>Average Case Time Complexity:</strong> O(n²)</li>
        <li><strong>Worst Case Time Complexity:</strong> O(n²) - Occurs when the array is sorted in reverse order</li>
        <li><strong>Space Complexity:</strong> O(1) - Only requires a constant amount of additional space</li>
      </ul>
      
      <h3>Advantages and Disadvantages</h3>
      <h4>Advantages:</h4>
      <ul>
        <li>Simple implementation</li>
        <li>Efficient for small data sets</li>
        <li>More efficient in practice than most other simple O(n²) algorithms like selection sort or bubble sort</li>
        <li>Adaptive - efficient for data sets that are already substantially sorted</li>
        <li>Stable - doesn't change the relative order of elements with equal keys</li>
        <li>In-place - only requires a constant amount O(1) of additional memory space</li>
        <li>Online - can sort a list as it receives it</li>
      </ul>
      
      <h4>Disadvantages:</h4>
      <ul>
        <li>O(n²) time complexity makes it inefficient for large data sets</li>
        <li>For large data sets, other sorting techniques like merge sort, quicksort, or heapsort are more efficient</li>
      </ul>
    `,
    examples: `
      <h3>Insertion Sort Examples</h3>
      
      <h4>Example: Sorting [12, 11, 13, 5, 6]</h4>
      
      <p>Start with considering the first element as sorted: [12]</p>
      
      <p>Pass 1:</p>
      <ul>
        <li>Consider 11. It's less than 12, so shift 12 one position right</li>
        <li>Place 11 at the correct position: [11, 12, 13, 5, 6]</li>
      </ul>
      
      <p>Pass 2:</p>
      <ul>
        <li>Consider 13. It's greater than 12, so it's already at the correct position</li>
        <li>The array remains: [11, 12, 13, 5, 6]</li>
      </ul>
      
      <p>Pass 3:</p>
      <ul>
        <li>Consider 5. It's less than 13, 12, and 11</li>
        <li>Shift 13, 12, and 11 one position right</li>
        <li>Place 5 at the correct position: [5, 11, 12, 13, 6]</li>
      </ul>
      
      <p>Pass 4:</p>
      <ul>
        <li>Consider 6. It's less than 13 and 12, but greater than 5 and 11</li>
        <li>Shift 13 and 12 one position right</li>
        <li>Place 6 at the correct position: [5, 11, 6, 12, 13]</li>
        <li>After shifting: [5, 6, 11, 12, 13]</li>
      </ul>
      
      <p>The array is now sorted: [5, 6, 11, 12, 13]</p>
      
      <h4>Binary Insertion Sort</h4>
      <p>An optimization of insertion sort that uses binary search to reduce the number of comparisons:</p>
      
      <pre><code>
function binaryInsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let left = 0;
    let right = i - 1;
    
    // Use binary search to find the position to insert the current element
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] > key) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    
    // Shift all elements to the right
    for (let j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j];
    }
    
    // Insert the element at the correct position
    arr[left] = key;
  }
  
  return arr;
}
      </code></pre>
      <p>This reduces the comparisons to O(n log n) but the swaps remain O(n²) in the worst case.</p>
    `,
    resources: `
      <h3>Insertion Sort Resources</h3>
      
      <h4>Visualizations</h4>
      <ul>
        <li><a href="#" class="text-algo-primary hover:underline">Interactive Insertion Sort Visualization</a></li>
        <li><a href="#" class="text-algo-primary hover:underline">Comparison with Other Elementary Sorting Algorithms</a></li>
      </ul>
      
      <h4>Practice Problems</h4>
      <ul>
        <li><a href="#" class="text-algo-primary hover:underline">Implement Insertion Sort for Linked Lists</a></li>
        <li><a href="#" class="text-algo-primary hover:underline">Optimize Insertion Sort for Nearly Sorted Data</a></li>
      </ul>
      
      <h4>Advanced Topics</h4>
      <ul>
        <li><a href="#" class="text-algo-primary hover:underline">Shell Sort - A Generalization of Insertion Sort</a></li>
        <li><a href="#" class="text-algo-primary hover:underline">Insertion Sort with Skip Lists</a></li>
      </ul>
    `,
    visualizerPath: "/visualizers/sorting?algorithm=insertion",
    prevLesson: {
      slug: "selection-sort",
      title
