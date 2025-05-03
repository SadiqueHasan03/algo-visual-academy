
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SearchingVisualizerPage = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Searching Algorithm Visualizers</h1>
        <p className="text-xl text-gray-600">
          Explore various searching algorithms with interactive visualizations.
        </p>
      </div>

      <div className="bg-white border rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Coming Soon!</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We're currently developing interactive visualizations for Linear Search, Binary Search, 
          BFS, DFS, and more. Check back soon for updates!
        </p>
        <Button asChild>
          <a href="/visualizers">View Available Visualizers</a>
        </Button>
      </div>
    </div>
  );
};

export default SearchingVisualizerPage;
