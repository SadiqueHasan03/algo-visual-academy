
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Lessons = () => {
  const lessonCategories = [
    {
      title: "Introduction to Algorithms",
      description: "Learn the fundamentals of algorithms and their analysis.",
      lessons: [
        { title: "What are Algorithms?", slug: "what-are-algorithms" },
        { title: "Big O Notation", slug: "big-o-notation" },
        { title: "Time & Space Complexity", slug: "time-space-complexity" }
      ]
    },
    {
      title: "Sorting Algorithms",
      description: "Master different techniques for sorting data efficiently.",
      lessons: [
        { title: "Bubble Sort", slug: "bubble-sort" },
        { title: "Selection Sort", slug: "selection-sort" },
        { title: "Insertion Sort", slug: "insertion-sort" },
        { title: "Merge Sort", slug: "merge-sort" },
        { title: "Quick Sort", slug: "quick-sort" }
      ]
    },
    {
      title: "Searching Algorithms",
      description: "Explore different methods for finding data in collections.",
      lessons: [
        { title: "Linear Search", slug: "linear-search" },
        { title: "Binary Search", slug: "binary-search" },
        { title: "Breadth First Search (BFS)", slug: "bfs" },
        { title: "Depth First Search (DFS)", slug: "dfs" }
      ]
    }
  ];

  return (
    <div className="container py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Algorithm Lessons</h1>
        <p className="text-xl text-gray-600">
          Explore our comprehensive curriculum covering essential algorithm concepts and techniques.
        </p>
      </div>

      <div className="space-y-16">
        {lessonCategories.map((category, index) => (
          <div key={index} className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">{category.title}</h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="border rounded-lg p-4 bg-white">
                  <h3 className="font-medium mb-2">{lesson.title}</h3>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/lessons/${lesson.slug}`}>Start Lesson</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
