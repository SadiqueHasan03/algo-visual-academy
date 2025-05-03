
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SortingVisualizer from '@/components/visualizers/SortingVisualizer';

export default function SortingVisualizerPage() {
  const [algorithmType, setAlgorithmType] = useState('bubble');

  return (
    <div className="container py-8">
      <Tabs value={algorithmType} onValueChange={setAlgorithmType}>
        <TabsList className="grid grid-cols-5 w-full mb-8">
          <TabsTrigger value="bubble">Bubble</TabsTrigger>
          <TabsTrigger value="selection">Selection</TabsTrigger>
          <TabsTrigger value="insertion">Insertion</TabsTrigger>
          <TabsTrigger value="merge">Merge</TabsTrigger>
          <TabsTrigger value="quick">Quick</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <div className="max-w-4xl mx-auto">
        <SortingVisualizer algorithmType={algorithmType as "bubble" | "selection" | "insertion" | "merge" | "quick"} />
      </div>
    </div>
  );
}
