
import { Quiz } from "../types/quiz";

export const quizzes: Quiz[] = [
  {
    id: "intro-algorithms-quiz",
    title: "Introduction to Algorithms",
    description: "Test your knowledge on fundamental algorithm concepts.",
    topic: "Introduction",
    questions: [
      {
        id: "q1",
        text: "What is an algorithm?",
        options: [
          {
            id: "q1-a",
            text: "A programming language used for advanced calculations",
            isCorrect: false
          },
          { 
            id: "q1-b",
            text: "A step-by-step procedure for solving a problem or accomplishing a task",
            isCorrect: true
          },
          {
            id: "q1-c",
            text: "A hardware component that processes data",
            isCorrect: false
          },
          {
            id: "q1-d",
            text: "A database management system",
            isCorrect: false
          }
        ],
        explanation: "An algorithm is a step-by-step procedure for solving a problem or accomplishing a task. It takes input, processes it through a sequence of well-defined steps, and produces an output."
      },
      {
        id: "q2",
        text: "What does the Big O notation O(n) represent?",
        options: [
          {
            id: "q2-a",
            text: "Constant time complexity",
            isCorrect: false
          },
          {
            id: "q2-b",
            text: "Logarithmic time complexity",
            isCorrect: false
          },
          {
            id: "q2-c",
            text: "Linear time complexity",
            isCorrect: true
          },
          {
            id: "q2-d",
            text: "Quadratic time complexity",
            isCorrect: false
          }
        ],
        explanation: "O(n) represents linear time complexity, where the execution time grows linearly with the input size. For example, searching through an unsorted array takes O(n) time in the worst case."
      },
      {
        id: "q3",
        text: "Which of the following is NOT a characteristic of an algorithm?",
        options: [
          {
            id: "q3-a",
            text: "Finiteness",
            isCorrect: false
          },
          {
            id: "q3-b",
            text: "Definiteness",
            isCorrect: false
          },
          {
            id: "q3-c",
            text: "Input",
            isCorrect: false
          },
          {
            id: "q3-d",
            text: "Randomness",
            isCorrect: true
          }
        ],
        explanation: "While algorithms can incorporate randomness (in randomized algorithms), it's not a fundamental characteristic. The core characteristics are definiteness (clear, unambiguous steps), finiteness (terminates after a finite number of steps), input, output, and effectiveness."
      }
    ]
  },
  {
    id: "sorting-algorithms-quiz",
    title: "Sorting Algorithms",
    description: "Test your knowledge on various sorting algorithms.",
    topic: "Sorting",
    questions: [
      {
        id: "q1",
        text: "What is the worst-case time complexity of Bubble Sort?",
        options: [
          { 
            id: "q1-a", 
            text: "O(n)", 
            isCorrect: false 
          },
          { 
            id: "q1-b", 
            text: "O(n log n)", 
            isCorrect: false 
          },
          { 
            id: "q1-c", 
            text: "O(n²)", 
            isCorrect: true 
          },
          { 
            id: "q1-d", 
            text: "O(1)", 
            isCorrect: false 
          }
        ],
        explanation: "Bubble Sort has a worst-case time complexity of O(n²), which occurs when the array is sorted in reverse order. This is because for each element, we might need to traverse through the entire array."
      },
      {
        id: "q2",
        text: "Which sorting algorithm is typically the fastest for small data sets?",
        options: [
          { 
            id: "q2-a", 
            text: "Merge Sort", 
            isCorrect: false 
          },
          { 
            id: "q2-b", 
            text: "Insertion Sort", 
            isCorrect: true 
          },
          { 
            id: "q2-c", 
            text: "Quick Sort", 
            isCorrect: false 
          },
          { 
            id: "q2-d", 
            text: "Heap Sort", 
            isCorrect: false 
          }
        ],
        explanation: "Insertion Sort is typically fast for small data sets because it has low overhead and works efficiently when data is nearly sorted. For large data sets, algorithms like Quick Sort or Merge Sort are usually more efficient."
      },
      {
        id: "q3",
        text: "What is the space complexity of Merge Sort?",
        options: [
          { 
            id: "q3-a", 
            text: "O(1)", 
            isCorrect: false 
          },
          { 
            id: "q3-b", 
            text: "O(n)", 
            isCorrect: true 
          },
          { 
            id: "q3-c", 
            text: "O(log n)", 
            isCorrect: false 
          },
          { 
            id: "q3-d", 
            text: "O(n²)", 
            isCorrect: false 
          }
        ],
        explanation: "Merge Sort has a space complexity of O(n) because it needs to create additional arrays to store the sorted subarrays during the merge process."
      }
    ]
  },
  {
    id: "searching-algorithms-quiz",
    title: "Searching Algorithms",
    description: "Test your knowledge on common searching algorithms.",
    topic: "Searching",
    questions: [
      {
        id: "q1",
        text: "What is the time complexity of Binary Search?",
        options: [
          { 
            id: "q1-a", 
            text: "O(n)", 
            isCorrect: false 
          },
          { 
            id: "q1-b", 
            text: "O(log n)", 
            isCorrect: true 
          },
          { 
            id: "q1-c", 
            text: "O(n²)", 
            isCorrect: false 
          },
          { 
            id: "q1-d", 
            text: "O(1)", 
            isCorrect: false 
          }
        ],
        explanation: "Binary Search has a time complexity of O(log n) because it divides the search space in half with each comparison, leading to a logarithmic number of operations."
      },
      {
        id: "q2",
        text: "When can we use Binary Search?",
        options: [
          { 
            id: "q2-a", 
            text: "On any type of data", 
            isCorrect: false 
          },
          { 
            id: "q2-b", 
            text: "On sorted data only", 
            isCorrect: true 
          },
          { 
            id: "q2-c", 
            text: "On unsorted data only", 
            isCorrect: false 
          },
          { 
            id: "q2-d", 
            text: "On linked lists only", 
            isCorrect: false 
          }
        ],
        explanation: "Binary Search can only be used on sorted data because it relies on being able to eliminate half of the remaining elements with each comparison, which is only possible if the data is sorted."
      },
      {
        id: "q3",
        text: "What is the primary advantage of Depth-First Search (DFS) over Breadth-First Search (BFS)?",
        options: [
          { 
            id: "q3-a", 
            text: "DFS uses less memory for deep graphs", 
            isCorrect: true 
          },
          { 
            id: "q3-b", 
            text: "DFS always finds the shortest path", 
            isCorrect: false 
          },
          { 
            id: "q3-c", 
            text: "DFS is always faster than BFS", 
            isCorrect: false 
          },
          { 
            id: "q3-d", 
            text: "DFS works on unconnected graphs, BFS doesn't", 
            isCorrect: false 
          }
        ],
        explanation: "DFS typically requires less memory than BFS because it only needs to store a stack of nodes on the current path, rather than storing all nodes at the current level. This makes it more memory-efficient for deep graphs."
      }
    ]
  }
];
