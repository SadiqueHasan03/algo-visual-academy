
import { Button } from "@/components/ui/button";

const Quizzes = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Algorithm Quizzes</h1>
        <p className="text-xl text-gray-600">
          Test your knowledge with multiple-choice and coding quizzes to reinforce your learning.
        </p>
      </div>

      <div className="bg-white border rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Quizzes Coming Soon!</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We're currently developing quizzes to help you test your understanding of algorithms.
          Check back soon for interactive assessments!
        </p>
        <Button asChild>
          <a href="/lessons">Browse Lessons</a>
        </Button>
      </div>
    </div>
  );
};

export default Quizzes;
