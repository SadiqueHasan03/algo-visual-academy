import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, Book, ListOrdered, BookText } from "lucide-react";
import { lessons } from "@/data/lessons"; // Assuming this is your data source
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import { cn } from "@/lib/utils"; // Assuming you have a utility like this from shadcn/ui

// Ensure CSS for syntax highlighting is imported (usually in your main app file or layout)

// --- Define Lesson Type ---
interface Lesson {
  slug: string;
  title: string;
  category?: string;
  content: string; // Main lesson markdown
  examples?: string; // Examples markdown
  resources?: string; // Resources markdown
  visualizerPath?: string;
  prevLesson?: { slug: string; title: string };
  nextLesson?: { slug: string; title: string };
}

// --- Reusable Markdown Renderer Component ---
interface MarkdownRendererProps {
  content: string;
  className?: string;
  /** Disable syntax highlighting (e.g., for simple resource lists) */
  disableHighlighting?: boolean;
  /** Customize component rendering */
  customComponents?: Components;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className,
  disableHighlighting = false,
  customComponents = {},
}) => {
  const rehypePlugins = [
    rehypeSanitize, // Sanitize HTML input for security (important if content *could* be untrusted)
    ...(disableHighlighting ? [] : [rehypeHighlight]), // Conditionally add syntax highlighting
  ];

  // --- Default Component Overrides ---
  // Enhance specific elements. You can map more elements to shadcn components if needed.
  const defaultComponents: Components = {
      // Example: Style links consistently
      a: ({ node, ...props }) => (
          <a
              className="font-medium text-primary underline underline-offset-4 hover:no-underline" // Example shadcn/ui link styling
              {...props}
              // Optionally add target="_blank" for all external links by default,
              // or handle it in specific instances via customComponents prop
              // target={props.href?.startsWith('http') ? '_blank' : undefined}
              // rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          />
      ),
      // Example: Slightly adjust heading margins if prose defaults aren't perfect
      // h1: ({node, ...props}) => <h1 className="mt-6 mb-3 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" {...props} />,
      // h2: ({node, ...props}) => <h2 className="mt-5 mb-2 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0" {...props} />,
      // p: ({node, ...props}) => <p className="leading-7 [&:not(:first-child)]:mt-4" {...props} />,
      // ... add more overrides for blockquote, ul, ol, li, code (inline), etc. if needed
  };

  // Merge default and custom components, allowing overrides
  const mergedComponents = { ...defaultComponents, ...customComponents };

  return (
    // Apply Tailwind typography plugin styles + any additional classes
    <div
      className={cn(
        "prose prose-sm sm:prose-base max-w-none dark:prose-invert", // Base prose styles
        // Adjust prose modifiers as needed for your design system:
        "prose-p:leading-relaxed", // Paragraph line-height
        "prose-headings:font-semibold prose-headings:mt-6 prose-headings:mb-3", // Heading styles
        "prose-ul:mt-4 prose-ul:list-disc prose-ul:pl-6", // Unordered list styles
        "prose-ol:mt-4 prose-ol:list-decimal prose-ol:pl-6", // Ordered list styles
        "prose-li:mt-1", // List item margin
        "prose-blockquote:mt-4 prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic", // Blockquote
        "prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm", // Inline code styles (prose applies some, you can override)
        "prose-code:before:content-none prose-code:after:content-none", // Clean up annoying default quotes around inline code
        "prose-pre:my-5", // Keep margin around code blocks consistent
        // NOTE: prose-pre:bg-* and prose-pre:p-* are removed; rely on rehype-highlight theme for code block background/padding
        className // Allow passing additional specific classes
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // Add GitHub Flavored Markdown support (tables, strikethrough, etc.)
        rehypePlugins={rehypePlugins}
        components={mergedComponents} // Use the merged component overrides
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};


// --- Main Lesson Details Component ---
const LessonDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data or find from local array
    const foundLesson = lessons.find((l) => l.slug === slug);
    setLesson(foundLesson ? (foundLesson as Lesson) : null);
    setLoading(false);
    // In a real app, you might fetch here:
    // fetch(`/api/lessons/${slug}`)
    //   .then(res => res.json())
    //   .then(data => setLesson(data))
    //   .catch(err => { console.error(err); setLesson(null); })
    //   .finally(() => setLoading(false));
  }, [slug]);

  // --- Loading State ---
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex h-64 items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      </div>
    );
  }

  // --- Not Found State ---
  if (!lesson) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Lesson not found</h1>
          <p className="mb-6">
            The lesson you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/lessons">Back to Lessons</Link>
          </Button>
        </div>
      </div>
    );
  }

  // --- Main Lesson Details View ---
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link to="/lessons" className="flex items-center">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Lessons
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">{lesson.title}</h1>
        {lesson.category && (
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary transition-colors">
            {lesson.category}
          </div>
        )}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="lesson" className="mb-8 w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3"> {/* Responsive grid */}
          <TabsTrigger value="lesson" className="flex items-center justify-center gap-1.5">
            <Book className="h-4 w-4" /> Lesson
          </TabsTrigger>
          <TabsTrigger value="example" className="flex items-center justify-center gap-1.5">
            <ListOrdered className="h-4 w-4" /> Example
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center justify-center gap-1.5">
            <BookText className="h-4 w-4" /> Resources
          </TabsTrigger>
        </TabsList>

        {/* Lesson Tab Content */}
        <TabsContent value="lesson" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Content</CardTitle>
              <CardDescription>Learn about {lesson.title}.</CardDescription>
            </CardHeader>
            <CardContent>
              <MarkdownRenderer content={lesson.content} />
              {/* Visualizer Button (Conditional) */}
              {lesson.visualizerPath && (
                <div className="mt-6">
                  <Button asChild>
                    <Link to={lesson.visualizerPath}>Try It in Visualizer</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Example Tab Content */}
        <TabsContent value="example" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Examples</CardTitle>
              <CardDescription>See {lesson.title} in action.</CardDescription>
            </CardHeader>
            <CardContent>
              <MarkdownRenderer
                content={lesson.examples || "*No examples available for this lesson.*"}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Resources Tab Content */}
        <TabsContent value="resources" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
              <CardDescription>Further learning materials.</CardDescription>
            </CardHeader>
            <CardContent>
              {lesson.resources ? (
                <MarkdownRenderer
                  content={lesson.resources}
                  disableHighlighting={true} // No code highlighting needed here
                  customComponents={{
                     // Make links in resources explicitly open in new tabs
                     a: ({ node, ...props }) => (
                       <a
                          className="font-medium text-primary underline underline-offset-4 hover:no-underline" // Consistent link style
                          {...props}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                     ),
                  }}
                />
              ) : (
                <p className="text-sm text-muted-foreground">
                  No additional resources listed for this lesson.
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Navigation */}
      <div className="mt-12 flex flex-col justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center">
        {/* Previous Lesson Button */}
        <div className="w-full sm:w-auto">
          {lesson.prevLesson ? (
            <Button variant="outline" asChild className="w-full justify-center sm:w-auto sm:justify-start">
              <Link
                to={`/lessons/${lesson.prevLesson.slug}`}
                className="flex items-center"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous: {lesson.prevLesson.title}
              </Link>
            </Button>
          ) : (
            <div className="hidden h-[40px] sm:block"></div> // Placeholder for alignment
          )}
        </div>

        {/* Next Lesson Button */}
        <div className="w-full sm:w-auto">
          {lesson.nextLesson ? (
            <Button asChild className="w-full justify-center sm:w-auto sm:justify-start">
              <Link
                to={`/lessons/${lesson.nextLesson.slug}`}
                className="flex items-center"
              >
                Next: {lesson.nextLesson.title}
                <ChevronLeft className="ml-2 h-4 w-4 rotate-180" /> {/* Correct icon rotation */}
              </Link>
            </Button>
          ) : (
            <div className="hidden h-[40px] sm:block"></div> // Placeholder for alignment
          )}
        </div>
      </div> {/* End Navigation */}
    </div> // End Root Container
  );
};

export default LessonDetails;