# Time & Space Complexity

## Understanding the Trade-offs

Time and space complexity are crucial concepts in computer science that help us understand the efficiency of algorithms. They describe the amount of computational resources an algorithm uses as a function of the size of the input data.

### Time Complexity

Time complexity measures the amount of time an algorithm takes to complete as a function of the length of the input. It is usually expressed using Big O notation, which describes the upper bound of the algorithm's growth rate.

### Space Complexity

Space complexity measures the amount of memory an algorithm uses in relation to the input size. It includes both the space needed for the input data and the space needed for auxiliary data structures.

### Trade-offs

When designing algorithms, there is often a trade-off between time and space complexity. An algorithm that is faster may use more memory, and vice versa. Understanding these trade-offs is essential for optimizing algorithms for specific use cases.

### Example Analysis

```javascript
function exampleFunction(arr) {
  let sum = 0; // O(1) space
  for (let i = 0; i < arr.length; i++) { // O(n) time
    sum += arr[i];
  }
  return sum;
}
```

This function has a time complexity of O(n) and a space complexity of O(1) because it uses a constant amount of additional space regardless of the input size.