
export interface Step {
  array: number[];
  comparing: number[];
  swapping: number[];
  sorted: number[];
}

export interface SortingVisualizerProps {
  algorithmType: "bubble" | "selection" | "insertion" | "merge" | "quick";
}

export interface BarProps {
  value: number;
  max: number;
  isComparing: boolean;
  isSwapping: boolean;
  isSorted: boolean;
}
