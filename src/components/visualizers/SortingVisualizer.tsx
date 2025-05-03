
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward, Rainbow } from "lucide-react";
import Bar from "./Bar";
import { generateRandomArray } from "./utils/arrayUtils";
import { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort } from "./algorithms";
import { Step, SortingVisualizerProps } from "./types/sortingTypes";

const SortingVisualizer = ({ algorithmType }: SortingVisualizerProps) => {
  const [array, setArray] = useState<number[]>([]);
  const [steps, setSteps] = useState<Step[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState([50]);
  const MAX_VALUE = 100;
  const ARRAY_SIZE = 20;
  
  useEffect(() => {
    resetArray();
  }, [algorithmType]);
  
  useEffect(() => {
    if (steps.length === 0) return;
    
    if (isPlaying && currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1000 - speed[0] * 9); // Maps 1-100 to 910-0ms delay
      
      return () => clearTimeout(timer);
    } else if (currentStep >= steps.length - 1) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentStep, steps, speed]);
  
  const resetArray = () => {
    setIsPlaying(false);
    const newArray = generateRandomArray(ARRAY_SIZE, MAX_VALUE);
    setArray(newArray);
    setSteps([{
      array: newArray,
      comparing: [],
      swapping: [],
      sorted: []
    }]);
    setCurrentStep(0);
  };
  
  const startSorting = () => {
    if (steps.length <= 1) {
      // Generate sorting steps based on the algorithm
      let sortingSteps: Step[] = [];
      
      switch (algorithmType) {
        case "bubble":
          sortingSteps = bubbleSort([...array]);
          break;
        case "selection":
          sortingSteps = selectionSort([...array]);
          break;
        case "insertion":
          sortingSteps = insertionSort([...array]);
          break;
        case "merge":
          sortingSteps = mergeSort([...array]);
          break;
        case "quick":
          sortingSteps = quickSort([...array]);
          break;
        default:
          sortingSteps = bubbleSort([...array]);
      }
      
      setSteps(sortingSteps);
    }
    
    setIsPlaying(!isPlaying);
  };
  
  const stepBackward = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };
  
  const stepForward = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };
  
  const currentArray = steps[currentStep]?.array || array;
  const comparing = steps[currentStep]?.comparing || [];
  const swapping = steps[currentStep]?.swapping || [];
  const sorted = steps[currentStep]?.sorted || [];
  
  // Get algorithm name for display
  const getAlgorithmName = () => {
    switch (algorithmType) {
      case "bubble": return "Bubble Sort";
      case "selection": return "Selection Sort";
      case "insertion": return "Insertion Sort";
      case "merge": return "Merge Sort";
      case "quick": return "Quick Sort";
      default: return "Bubble Sort";
    }
  };
  
  return (
    <div className="w-full border rounded-lg p-4 bg-gradient-to-br from-white to-purple-50 shadow-md">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Rainbow className="h-5 w-5 text-purple-500" />
            <h3 className="text-lg font-medium bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              {getAlgorithmName()}
            </h3>
          </div>
          <Button 
            variant="outline" 
            onClick={resetArray} 
            className="border-purple-200 hover:bg-purple-100 hover:text-purple-700"
          >
            Reset
          </Button>
        </div>
        
        <div className="h-64 mb-4 p-2 rounded-md bg-gradient-to-b from-slate-50 to-slate-100">
          <div className="flex h-full gap-1 items-end">
            {currentArray.map((value, index) => (
              <Bar 
                key={`${index}-${value}`}
                value={value}
                max={MAX_VALUE}
                isComparing={comparing.includes(index)}
                isSwapping={swapping.includes(index)}
                isSorted={sorted.includes(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between gap-4 mt-auto">
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={stepBackward} 
              disabled={currentStep <= 0 || isPlaying}
              className="border-purple-200 hover:bg-purple-100 hover:text-purple-700"
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button 
              onClick={startSorting} 
              variant="default"
              className="w-20 bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600"
            >
              {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
              {isPlaying ? "Pause" : "Play"}
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={stepForward} 
              disabled={currentStep >= steps.length - 1 || isPlaying}
              className="border-purple-200 hover:bg-purple-100 hover:text-purple-700"
            >
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2 flex-1 max-w-xs">
            <span className="text-sm text-purple-400">Slow</span>
            <Slider
              value={speed}
              onValueChange={(value) => setSpeed(value)}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-sm text-purple-400">Fast</span>
          </div>
          
          <div className="text-sm font-medium text-purple-500">
            Step: {currentStep}/{steps.length - 1}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;
