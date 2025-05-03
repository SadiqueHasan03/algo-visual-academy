
import SortingVisualizer from "@/components/visualizers/SortingVisualizer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SortingVisualizerPage = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Sorting Algorithm Visualizers</h1>
        <p className="text-xl text-gray-600">
          Watch sorting algorithms in action and understand how they work step by step.
        </p>
      </div>

      <Tabs defaultValue="bubble">
        <TabsList className="mb-8">
          <TabsTrigger value="bubble">Bubble Sort</TabsTrigger>
          <TabsTrigger value="selection">Selection Sort</TabsTrigger>
          <TabsTrigger value="insertion">Insertion Sort</TabsTrigger>
          <TabsTrigger value="merge" disabled>Merge Sort</TabsTrigger>
          <TabsTrigger value="quick" disabled>Quick Sort</TabsTrigger>
        </TabsList>
        
        <TabsContent value="bubble" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SortingVisualizer algorithmType="bubble" />
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Bubble Sort</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">How it Works</h4>
                  <p className="text-gray-600">
                    Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them 
                    if they are in the wrong order. The pass through the list is repeated until no swaps are needed.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Time Complexity</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Best Case: O(n)</li>
                    <li>Average Case: O(n²)</li>
                    <li>Worst Case: O(n²)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Space Complexity</h4>
                  <p className="text-gray-600">O(1) - Bubble sort is an in-place sorting algorithm.</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Use Cases</h4>
                  <p className="text-gray-600">
                    Bubble sort is primarily used as an educational tool due to its simplicity, 
                    but it's rarely used in production code due to its inefficiency with large datasets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Pseudocode</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`procedure bubbleSort(A: list of sortable items)
    n = length(A)
    repeat
        swapped = false
        for i = 1 to n-1 inclusive do
            if A[i-1] > A[i] then
                swap(A[i-1], A[i])
                swapped = true
            end if
        end for
        n = n - 1
    until not swapped
end procedure`}
            </pre>
          </div>
        </TabsContent>
        
        <TabsContent value="selection" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SortingVisualizer algorithmType="selection" />
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Selection Sort</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">How it Works</h4>
                  <p className="text-gray-600">
                    Selection sort divides the input list into two parts: a sorted sublist and an unsorted sublist. 
                    It repeatedly finds the minimum element from the unsorted sublist and moves it to the end of the sorted sublist.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Time Complexity</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Best Case: O(n²)</li>
                    <li>Average Case: O(n²)</li>
                    <li>Worst Case: O(n²)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Space Complexity</h4>
                  <p className="text-gray-600">O(1) - Selection sort is an in-place sorting algorithm.</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Use Cases</h4>
                  <p className="text-gray-600">
                    Selection sort performs well on small lists and has the advantage of minimizing the number of swaps.
                    It's useful when memory writes are expensive, as it makes at most O(n) swaps.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Pseudocode</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`procedure selectionSort(A: list of sortable items)
    n = length(A)
    for i = 0 to n-1 inclusive do
        minIndex = i
        
        for j = i+1 to n-1 inclusive do
            if A[j] < A[minIndex] then
                minIndex = j
            end if
        end for
        
        if minIndex != i then
            swap(A[i], A[minIndex])
        end if
    end for
end procedure`}
            </pre>
          </div>
        </TabsContent>

        <TabsContent value="insertion" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SortingVisualizer algorithmType="insertion" />
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Insertion Sort</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">How it Works</h4>
                  <p className="text-gray-600">
                    Insertion sort builds the final sorted array one item at a time. It takes one element from 
                    the input data and finds the location it belongs to in the sorted list, then inserts it there.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Time Complexity</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Best Case: O(n)</li>
                    <li>Average Case: O(n²)</li>
                    <li>Worst Case: O(n²)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Space Complexity</h4>
                  <p className="text-gray-600">O(1) - Insertion sort is an in-place sorting algorithm.</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Use Cases</h4>
                  <p className="text-gray-600">
                    Insertion sort is efficient for small data sets and nearly sorted data sets.
                    It's often used as part of more sophisticated algorithms and is the basis for more efficient 
                    hybrid sorting algorithms like Timsort.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Pseudocode</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`procedure insertionSort(A: list of sortable items)
    n = length(A)
    for i = 1 to n-1 inclusive do
        key = A[i]
        j = i - 1
        
        while j >= 0 and A[j] > key do
            A[j+1] = A[j]
            j = j - 1
        end while
        
        A[j+1] = key
    end for
end procedure`}
            </pre>
          </div>
        </TabsContent>
        
        {/* Other tabs will be implemented later */}
      </Tabs>
    </div>
  );
};

export default SortingVisualizerPage;
