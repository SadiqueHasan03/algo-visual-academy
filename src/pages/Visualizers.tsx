
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart, Search } from "lucide-react";

const Visualizers = () => {
  return (
    <div className="container py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Algorithm Visualizers</h1>
        <p className="text-xl text-gray-600">
          Interactive tools to help you understand algorithms through visual representation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="hover:shadow-md transition-all">
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-algo-primary/10 text-algo-primary flex items-center justify-center mb-2">
              <BarChart className="h-6 w-6" />
            </div>
            <CardTitle>Sorting Algorithm Visualizers</CardTitle>
            <CardDescription>
              Visualize how different sorting algorithms work step-by-step
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Bubble Sort</li>
              <li>Selection Sort</li>
              <li>Insertion Sort</li>
              <li>Merge Sort</li>
              <li>Quick Sort</li>
              <li>Heap Sort</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link to="/visualizers/sorting">
                Explore Sorting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-md transition-all">
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-algo-accent/10 text-algo-accent flex items-center justify-center mb-2">
              <Search className="h-6 w-6" />
            </div>
            <CardTitle>Searching Algorithm Visualizers</CardTitle>
            <CardDescription>
              See how different search techniques find elements in data structures
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Linear Search</li>
              <li>Binary Search</li>
              <li>Breadth First Search (BFS)</li>
              <li>Depth First Search (DFS)</li>
              <li>Graph Search Algorithms</li>
              <li>Tree Search Algorithms</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link to="/visualizers/searching">
                Explore Searching
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Visualizers;
