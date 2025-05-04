
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { quizzes } from "@/data/quizzes";
import { getQuizProgress, getQuizProgressData, calculateTotalProgress } from "@/utils/quizProgress";
import { UserQuizProgress } from "@/types/quiz";

const Quizzes = () => {
  const [progressData, setProgressData] = useState<UserQuizProgress>({});
  const [overallProgress, setOverallProgress] = useState({ completed: 0, total: quizzes.length });

  useEffect(() => {
    // Load progress data from localStorage
    const storedProgress = getQuizProgressData();
    setProgressData(storedProgress);

    // Calculate overall progress
    const overall = calculateTotalProgress();
    setOverallProgress({ ...overall, total: quizzes.length });
  }, []);

  const getProgressForQuiz = (quizId: string) => {
    return progressData[quizId] || null;
  };

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Algorithm Quizzes</h1>
        <p className="text-xl text-gray-600 mb-6">
          Test your knowledge with multiple-choice quizzes to reinforce your learning.
        </p>
        
        <div className="bg-white border rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium">Your overall progress</h2>
            <span className="text-sm font-medium">
              {overallProgress.completed} of {overallProgress.total} quizzes completed
            </span>
          </div>
          <Progress 
            value={(overallProgress.completed / overallProgress.total) * 100} 
            className="h-3"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => {
          const progress = getProgressForQuiz(quiz.id);
          const hasStarted = !!progress;
          const isCompleted = progress?.completed || false;
          const scorePercentage = progress ? (progress.score / progress.totalQuestions) * 100 : 0;
          
          return (
            <Card key={quiz.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{quiz.title}</CardTitle>
                <CardDescription>{quiz.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <span className="text-sm font-medium">Topic:</span>
                  <span className="ml-2 text-sm text-gray-600">{quiz.topic}</span>
                </div>
                
                {hasStarted && (
                  <div>
                    <div className="flex justify-between items-center text-sm mb-1">
                      <span>Your progress</span>
                      <span className="font-medium">{Math.round(scorePercentage)}%</span>
                    </div>
                    <Progress value={scorePercentage} className="h-2" />
                    
                    {isCompleted && (
                      <p className="mt-3 text-sm text-green-600 font-medium">
                        Completed on {new Date(progress.lastAttemptDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                )}

                {!hasStarted && (
                  <p className="text-sm text-gray-500">You haven't taken this quiz yet.</p>
                )}
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={`/quizzes/${quiz.id}`}>
                    {!hasStarted ? 'Start Quiz' : isCompleted ? 'Review Quiz' : 'Continue Quiz'}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Quizzes;
