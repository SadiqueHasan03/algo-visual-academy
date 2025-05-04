import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Zap, Award, Code, Search, BarChart3, LineChart, Puzzle } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import SortingVisualizer from "@/components/visualizers/SortingVisualizer";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-algo-light to-white pt-20 pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-algo-dark">
                Master Algorithms Through <span className="text-algo-primary">Interactive Visualization</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Learn data structures and algorithms with intuitive visualizations, 
                hands-on coding, and step-by-step animations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link to="/lessons">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/visualizers">
                    Explore Visualizers
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-float">
              {/* Decorative animation points */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-algo-accent/10 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-algo-primary/10 rounded-full"></div>
              
              {/* Card with animation */}
              <div className="bg-white rounded-xl shadow-lg border p-6 relative z-10">
                <SortingVisualizer algorithmType="bubble" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Features Designed for Learning</h2>
            <p className="text-xl text-gray-600">
              Our platform offers comprehensive tools to master algorithms through visual learning,
              practical coding, and interactive challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Interactive Visualizations"
              description="Watch algorithms in action with step-by-step animations that illustrate key concepts."
              icon={<BarChart3 className="h-6 w-6" />}
            />
            <FeatureCard 
              title="Comprehensive Lessons"
              description="Learn theory and practice through our structured curriculum covering all essential topics."
              icon={<BookOpen className="h-6 w-6" />}
            />
            <FeatureCard 
              title="Code Playground"
              description="Write and test your algorithm implementations in an integrated code editor."
              icon={<Code className="h-6 w-6" />}
            />
            <FeatureCard 
              title="Algorithm Challenges"
              description="Test your skills with progressively difficult challenges and coding exercises."
              icon={<Puzzle className="h-6 w-6" />}
            />
            <FeatureCard 
              title="Search & Sort Algorithms"
              description="Master essential techniques from binary search to quicksort with visual aids."
              icon={<Search className="h-6 w-6" />}
            />
            <FeatureCard 
              title="Progress Tracking"
              description="Monitor your learning journey with detailed analytics and completion badges."
              icon={<LineChart className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>

      {/* Algorithm Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Explore Algorithm Categories</h2>
            <p className="text-xl text-gray-600">
              Dive into various algorithm domains with our specialized visualizations and lessons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-all">
              <div className="h-40 bg-gradient-to-r from-algo-primary to-algo-secondary flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">Sorting Algorithms</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Master various sorting techniques including Bubble Sort, Quick Sort, Merge Sort, and more
                  with step-by-step visualizations.
                </p>
                <Button asChild>
                  <Link to="/visualizers/sorting">
                    Explore Sorting
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-all">
              <div className="h-40 bg-gradient-to-r from-algo-accent to-blue-400 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">Searching Algorithms</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Understand Linear Search, Binary Search, BFS, DFS and other search techniques
                  through interactive visualizations.
                </p>
                <Button asChild>
                  <Link to="/visualizers/searching">
                    Explore Searching
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">
              See how AlgoViz Academy has helped students understand complex algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The visualizations finally helped me understand quicksort after struggling for weeks. Seeing the algorithm in action made all the difference."
              name="Sarah Johnson"
              title="Computer Science Student"
            />
            <TestimonialCard 
              quote="I used AlgoViz Academy to prepare for technical interviews and landed my dream job. The interactive challenges were exactly what I needed."
              name="Michael Chen"
              title="Software Engineer"
            />
            <TestimonialCard 
              quote="As an instructor, I recommend this platform to all my students. It bridges the gap between theory and practice beautifully."
              name="Dr. Alicia Rodriguez"
              title="CS Professor"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-algo-primary text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Ready to Master Algorithms?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who have transformed their understanding of algorithms through
              our interactive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/register">
                  Create Free Account
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-black border border-white hover:bg-white/10" asChild>
                <Link to="/lessons">
                  Browse Lessons
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;