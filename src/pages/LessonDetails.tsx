
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ChevronLeft, Book, ListOrdered, BookText } from "lucide-react";
import { lessons } from "@/data/lessons";

const LessonDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lesson, setLesson] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Find the lesson with the matching slug
    const foundLesson = lessons.find(lesson => lesson.slug === slug);
    
    if (foundLesson) {
      setLesson(foundLesson);
    }
    
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="container py-12">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin h-8 w-8 border-4 border-algo-primary border-t-transparent rounded-full"></div>
        </div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
          <p className="mb-6">The lesson you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link to="/lessons">Back to Lessons</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link to="/lessons" className="flex items-center">
            <ChevronLeft className="mr-1 h-4 w-4" /> Back to Lessons
          </Link>
        </Button>
      </div>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
        {lesson.category && (
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-algo-primary/10 border-algo-primary/20 text-algo-primary">
            {lesson.category}
          </div>
        )}
      </div>

      <Tabs defaultValue="lesson" className="mb-8">
        <TabsList>
          <TabsTrigger value="lesson" className="flex items-center">
            <Book className="mr-2 h-4 w-4" /> Lesson
          </TabsTrigger>
          <TabsTrigger value="example" className="flex items-center">
            <ListOrdered className="mr-2 h-4 w-4" /> Example
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center">
            <BookText className="mr-2 h-4 w-4" /> Resources
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="lesson" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Content</CardTitle>
              <CardDescription>Learn about {lesson.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: lesson.content }} />
              
              {lesson.visualizerPath && (
                <div className="mt-6">
                  <Button asChild>
                    <Link to={lesson.visualizerPath}>
                      Try It in Visualizer
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="example">
          <Card>
            <CardHeader>
              <CardTitle>Examples</CardTitle>
              <CardDescription>See {lesson.title} in action</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: lesson.examples || "<p>No examples available for this lesson.</p>" }} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
              <CardDescription>Further learning materials</CardDescription>
            </CardHeader>
            <CardContent>
              {lesson.resources ? (
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: lesson.resources }} />
              ) : (
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="#" className="text-algo-primary hover:underline">Video tutorial</a></li>
                  <li><a href="#" className="text-algo-primary hover:underline">Interactive exercises</a></li>
                  <li><a href="#" className="text-algo-primary hover:underline">Related reading</a></li>
                </ul>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-between items-center mt-12 pt-6 border-t">
        <div>
          {lesson.prevLesson ? (
            <Button variant="outline" asChild>
              <Link to={`/lessons/${lesson.prevLesson.slug}`}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous: {lesson.prevLesson.title}
              </Link>
            </Button>
          ) : <div></div>}
        </div>
        <div>
          {lesson.nextLesson ? (
            <Button asChild>
              <Link to={`/lessons/${lesson.nextLesson.slug}`}>
                Next: {lesson.nextLesson.title}
                <ChevronLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </Button>
          ) : <div></div>}
        </div>
      </div>
    </div>
  );
};

export default LessonDetails;
