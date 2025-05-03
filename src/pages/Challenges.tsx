
import { Button } from "@/components/ui/button";

const Challenges = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Algorithm Challenges</h1>
        <p className="text-xl text-gray-600">
          Test your understanding of algorithms with our collection of hands-on coding challenges.
        </p>
      </div>

      <div className="bg-white border rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Challenges Coming Soon!</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We're building a comprehensive library of algorithm challenges with our integrated code editor.
          Stay tuned for hands-on practice opportunities!
        </p>
        <Button asChild>
          <a href="/visualizers">Explore Visualizers</a>
        </Button>
      </div>
    </div>
  );
};

export default Challenges;
