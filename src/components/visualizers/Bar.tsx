
import React from 'react';
import { BarProps } from './types/sortingTypes';

const Bar = ({ value, max, isComparing, isSwapping, isSorted }: BarProps) => {
  const height = `${(value / max) * 100}%`;
  
  // Create dynamic colors based on value
  let bgColor = `bg-gradient-to-t from-purple-600 to-indigo-400`;
  
  if (isComparing) bgColor = "bg-gradient-to-t from-sky-500 to-cyan-300";
  if (isSwapping) bgColor = "bg-gradient-to-t from-amber-500 to-yellow-300";
  if (isSorted) bgColor = "bg-gradient-to-t from-emerald-600 to-green-400";
  
  return (
    <div className="flex flex-col items-center justify-end h-full w-full">
      <div 
        className={`w-full ${bgColor} rounded-t-sm transition-all duration-300 shadow-lg`}
        style={{ height }}
      ></div>
    </div>
  );
};

export default Bar;
