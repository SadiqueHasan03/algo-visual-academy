
import { Quiz } from "@/types/quiz";

export const quizzes: Quiz[] = [
  {
    id: "algorithms-basics",
    title: "Algorithms Fundamentals",
    description: "Test your knowledge on fundamental algorithm concepts and principles.",
    topic: "Fundamentals",
    difficulty: "beginner",
    questions: [
      {
        id: "algo-basics-1",
        text: "What is an algorithm?",
        options: [
          { id: "a1", text: "A programming language", isCorrect: false },
          { id: "a2", text: "A step-by-step procedure for solving a problem", isCorrect: true },
          { id: "a3", text: "A type of computer hardware", isCorrect: false },
          { id: "a4", text: "A mathematical equation", isCorrect: false }
        ],
        explanation: "An algorithm is a step-by-step procedure or a set of rules for solving a problem or accomplishing a task. It's a sequence of instructions where each instruction is clear and unambiguous."
      },
      {
        id: "algo-basics-2",
        text: "What does the time complexity of an algorithm measure?",
        options: [
          { id: "a1", text: "The actual time an algorithm takes to run", isCorrect: false },
          { id: "a2", text: "The space required by an algorithm", isCorrect: false },
          { id: "a3", text: "How the running time of an algorithm grows as input size grows", isCorrect: true },
          { id: "a4", text: "The number of programming languages that can implement the algorithm", isCorrect: false }
        ],
        explanation: "Time complexity measures how the running time of an algorithm increases as the size of the input increases. It's usually expressed using the Big O notation, which describes the upper bound of the growth rate."
      },
      {
        id: "algo-basics-3",
        text: "What is the best-case time complexity of a linear search algorithm?",
        options: [
          { id: "a1", text: "O(1)", isCorrect: true },
          { id: "a2", text: "O(n)", isCorrect: false },
          { id: "a3", text: "O(log n)", isCorrect: false },
          { id: "a4", text: "O(n²)", isCorrect: false }
        ],
        explanation: "The best-case time complexity of linear search is O(1), which occurs when the target element is found at the first position of the array. In this case, only one comparison is needed."
      },
      {
        id: "algo-basics-4",
        text: "Which data structure is most appropriate for implementing a First-In-First-Out (FIFO) behavior?",
        options: [
          { id: "a1", text: "Stack", isCorrect: false },
          { id: "a2", text: "Queue", isCorrect: true },
          { id: "a3", text: "Tree", isCorrect: false },
          { id: "a4", text: "Hash Table", isCorrect: false }
        ],
        explanation: "A queue is a data structure that follows the First-In-First-Out (FIFO) principle, meaning the first element added is the first one to be removed. This makes it ideal for scenarios like task scheduling, print job management, etc."
      },
      {
        id: "algo-basics-5",
        text: "What is the space complexity of an algorithm?",
        options: [
          { id: "a1", text: "The maximum number of operations it performs", isCorrect: false },
          { id: "a2", text: "The minimum input size it requires", isCorrect: false },
          { id: "a3", text: "The amount of memory or storage it needs to execute", isCorrect: true },
          { id: "a4", text: "The number of lines of code in its implementation", isCorrect: false }
        ],
        explanation: "Space complexity measures the amount of memory or storage an algorithm needs to execute as a function of the size of the input. Like time complexity, it's often expressed using Big O notation."
      }
    ]
  },
  {
    id: "sorting-algorithms",
    title: "Sorting Algorithms",
    description: "Test your knowledge on common sorting algorithms, their implementations, and complexities.",
    topic: "Sorting",
    difficulty: "intermediate",
    questions: [
      {
        id: "sort-1",
        text: "Which sorting algorithm has the best average-case time complexity?",
        options: [
          { id: "a1", text: "Bubble Sort - O(n²)", isCorrect: false },
          { id: "a2", text: "Merge Sort - O(n log n)", isCorrect: true },
          { id: "a3", text: "Insertion Sort - O(n²)", isCorrect: false },
          { id: "a4", text: "Selection Sort - O(n²)", isCorrect: false }
        ],
        explanation: "Of the listed algorithms, Merge Sort has the best average-case time complexity at O(n log n). It consistently achieves this performance regardless of input characteristics, making it efficient even for large datasets."
      },
      {
        id: "sort-2",
        text: "Which sorting algorithm is considered 'in-place'?",
        options: [
          { id: "a1", text: "Merge Sort", isCorrect: false },
          { id: "a2", text: "Insertion Sort", isCorrect: true },
          { id: "a3", text: "Counting Sort", isCorrect: false },
          { id: "a4", text: "Radix Sort", isCorrect: false }
        ],
        explanation: "Insertion Sort is an in-place sorting algorithm, meaning it requires only a constant amount O(1) of additional space beyond the input array. It sorts the array by repeatedly taking elements and inserting them into their correct position within the already-sorted portion."
      },
      {
        id: "sort-3",
        text: "What is the worst-case time complexity of Quick Sort?",
        options: [
          { id: "a1", text: "O(n log n)", isCorrect: false },
          { id: "a2", text: "O(n)", isCorrect: false },
          { id: "a3", text: "O(n²)", isCorrect: true },
          { id: "a4", text: "O(log n)", isCorrect: false }
        ],
        explanation: "The worst-case time complexity of Quick Sort is O(n²), which occurs when the pivot selection consistently results in highly unbalanced partitions. This happens, for example, when the array is already sorted and the first or last element is chosen as the pivot."
      },
      {
        id: "sort-4",
        text: "Which sorting algorithm is stable?",
        options: [
          { id: "a1", text: "Quick Sort", isCorrect: false },
          { id: "a2", text: "Heap Sort", isCorrect: false },
          { id: "a3", text: "Selection Sort", isCorrect: false },
          { id: "a4", text: "Merge Sort", isCorrect: true }
        ],
        explanation: "Merge Sort is a stable sorting algorithm, meaning that it preserves the relative order of equal elements in the sorted output. This property is important in certain applications where the original order of equal items matters."
      },
      {
        id: "sort-5",
        text: "Which sorting algorithm would be most efficient for sorting a small array (less than 20 elements)?",
        options: [
          { id: "a1", text: "Quick Sort", isCorrect: false },
          { id: "a2", text: "Bubble Sort", isCorrect: false },
          { id: "a3", text: "Insertion Sort", isCorrect: true },
          { id: "a4", text: "Merge Sort", isCorrect: false }
        ],
        explanation: "Insertion Sort is very efficient for small arrays or nearly sorted arrays due to its low constant factors and simplicity. For small arrays (like less than 20 elements), the O(n²) worst-case complexity doesn't significantly impact performance, and the algorithm's simplicity gives it an advantage."
      }
    ]
  },
  {
    id: "data-structures",
    title: "Data Structures",
    description: "Test your understanding of fundamental data structures, their operations, and applications.",
    topic: "Data Structures",
    difficulty: "advanced",
    questions: [
      {
        id: "ds-1",
        text: "What is the time complexity of inserting an element at the beginning of an array?",
        options: [
          { id: "a1", text: "O(1)", isCorrect: false },
          { id: "a2", text: "O(log n)", isCorrect: false },
          { id: "a3", text: "O(n)", isCorrect: true },
          { id: "a4", text: "O(n²)", isCorrect: false }
        ],
        explanation: "Inserting an element at the beginning of an array requires shifting all existing elements one position to the right to make space, resulting in O(n) time complexity where n is the number of elements in the array."
      },
      {
        id: "ds-2",
        text: "Which data structure uses LIFO (Last In, First Out) principle?",
        options: [
          { id: "a1", text: "Queue", isCorrect: false },
          { id: "a2", text: "Stack", isCorrect: true },
          { id: "a3", text: "Heap", isCorrect: false },
          { id: "a4", text: "Linked List", isCorrect: false }
        ],
        explanation: "A stack operates on the Last In, First Out (LIFO) principle where the last element added is the first one to be removed. Common operations include push (add to top), pop (remove from top), and peek (view top without removing)."
      },
      {
        id: "ds-3",
        text: "What is the time complexity for finding an element by key in a hash table (average case)?",
        options: [
          { id: "a1", text: "O(1)", isCorrect: true },
          { id: "a2", text: "O(log n)", isCorrect: false },
          { id: "a3", text: "O(n)", isCorrect: false },
          { id: "a4", text: "O(n²)", isCorrect: false }
        ],
        explanation: "The average case time complexity for finding an element in a hash table is O(1) or constant time. This efficiency comes from the hash function which maps keys directly to bucket locations, allowing for immediate access in most cases."
      },
      {
        id: "ds-4",
        text: "Which traversal method for binary trees visits the root node first, then the left subtree, then the right subtree?",
        options: [
          { id: "a1", text: "In-order traversal", isCorrect: false },
          { id: "a2", text: "Pre-order traversal", isCorrect: true },
          { id: "a3", text: "Post-order traversal", isCorrect: false },
          { id: "a4", text: "Level-order traversal", isCorrect: false }
        ],
        explanation: "Pre-order traversal follows a 'Root-Left-Right' pattern, meaning the algorithm first visits the root node, then recursively traverses the left subtree, and finally recursively traverses the right subtree."
      },
      {
        id: "ds-5",
        text: "What is the main advantage of a binary search tree over a linked list?",
        options: [
          { id: "a1", text: "Lower memory usage", isCorrect: false },
          { id: "a2", text: "Faster insertion at any position", isCorrect: false },
          { id: "a3", text: "More efficient searching operations", isCorrect: true },
          { id: "a4", text: "Better cache performance", isCorrect: false }
        ],
        explanation: "The main advantage of a binary search tree (BST) is its efficient searching operations. A balanced BST allows search, insertion, and deletion operations in O(log n) time, whereas a linked list requires O(n) time for searching."
      }
    ]
  }
];
