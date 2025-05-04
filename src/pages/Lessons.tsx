
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { BookOpen, Code, ArrowRight, Play } from "lucide-react";

const Lessons = () => {
  const lessonCategories = [
    {
      title: "Introduction to Algorithms",
      description: "Learn the fundamentals of algorithms and their analysis.",
      icon: BookOpen,
      iconColor: "text-blue-500",
      bgClass: "bg-blue-50",
      lessons: [
        { title: "What are Algorithms?", slug: "what-are-algorithms" },
        { title: "Big O Notation", slug: "big-o-notation" },
        { title: "Time & Space Complexity", slug: "time-space-complexity" }
      ]
    },
    {
      title: "Sorting Algorithms",
      description: "Master different techniques for sorting data efficiently.",
      icon: Code,
      iconColor: "text-purple-500",
      bgClass: "bg-purple-50",
      lessons: [
        { title: "Bubble Sort", slug: "bubble-sort", visualizerPath: "/visualizers/sorting?algorithm=bubble" },
        { title: "Selection Sort", slug: "selection-sort", visualizerPath: "/visualizers/sorting?algorithm=selection" },
        { title: "Insertion Sort", slug: "insertion-sort", visualizerPath: "/visualizers/sorting?algorithm=insertion" },
        { title: "Merge Sort", slug: "merge-sort", visualizerPath: "/visualizers/sorting?algorithm=merge" },
        { title: "Quick Sort", slug: "quick-sort", visualizerPath: "/visualizers/sorting?algorithm=quick" }
      ]
    },
    {
      title: "Searching Algorithms",
      description: "Explore different methods for finding data in collections.",
      icon: BookOpen,
      iconColor: "text-green-500",
      bgClass: "bg-green-50",
      lessons: [
        { title: "Linear Search", slug: "linear-search" },
        { title: "Binary Search", slug: "binary-search" },
        { title: "Breadth First Search (BFS)", slug: "bfs" },
        { title: "Depth First Search (DFS)", slug: "dfs" }
      ]
    }
  ];

  return (
    <div className="container py-12 animate-fade-in">
      <div className="mb-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Algorithm Lessons</h1>
        <p className="text-xl text-muted-foreground">
          Explore our comprehensive curriculum covering essential algorithm concepts and techniques.
          Learn at your own pace through interactive lessons and examples.
        </p>
      </div>

      <div className="space-y-16">
        {lessonCategories.map((category, index) => {
          const Icon = category.icon;
          
          return (
            <div key={index} className="space-y-8">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${category.bgClass}`}>
                  <Icon className={`h-6 w-6 ${category.iconColor}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.lessons.map((lesson, lessonIndex) => (
                  <Card key={lessonIndex} className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white overflow-hidden group">
                    <div className="p-6">
                      <h3 className="text-lg font-medium mb-4">{lesson.title}</h3>
                      <div className="flex gap-3 flex-wrap">
                        <Button asChild className="group-hover:-translate-y-0.5 transition-transform">
                          <Link to={`/lessons/${lesson.slug}`} className="flex items-center">
                            <BookOpen className="mr-2 h-4 w-4" />
                            Start Lesson
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                        {lesson.visualizerPath && (
                          <Button variant="secondary" asChild className="group-hover:-translate-y-0.5 transition-transform">
                            <Link to={lesson.visualizerPath} className="flex items-center">
                              <Play className="mr-2 h-4 w-4" />
                              Visualizer
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="h-1.5 bg-gradient-to-r from-algo-primary to-algo-accent w-0 group-hover:w-full transition-all duration-300"></div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lessons;
