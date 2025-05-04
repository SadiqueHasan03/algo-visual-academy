
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { getQuizProgressData, calculateTotalProgress } from "@/utils/quizProgress";
import { fetchQuizzes } from "@/utils/simulateBackend";
import { Quiz, UserQuizProgress } from "@/types/quiz";

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [progressData, setProgressData] = useState<UserQuizProgress>({});
  const [overallProgress, setOverallProgress] = useState({ completed: 0, total: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        // Fetch quizzes from simulated backend
        const fetchedQuizzes = await fetchQuizzes();
        setQuizzes(fetchedQuizzes);
        
        // Load progress data from localStorage
        const storedProgress = getQuizProgressData();
        setProgressData(storedProgress);

        // Calculate overall progress
        const overall = calculateTotalProgress();
        setOverallProgress({ ...overall, total: fetchedQuizzes.length });
      } catch (error) {
        console.error("Error loading quiz data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
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
        
        <div className="bg-white border rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium">Your overall progress</h2>
            {isLoading ? (
              <Skeleton className="h-6 w-32" />
            ) : (
              <span className="text-sm font-medium">
                {overallProgress.completed} of {overallProgress.total} quizzes completed
              </span>
            )}
          </div>
          {isLoading ? (
            <Skeleton className="h-3 w-full" />
          ) : (
            <Progress 
              value={(overallProgress.completed / overallProgress.total) * 100} 
              className="h-3"
            />
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="flex flex-col">
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent className="flex-grow">
                <Skeleton className="h-4 w-1/2 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-2 w-full mb-4" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => {
            const progress = getProgressForQuiz(quiz.id);
            const hasStarted = !!progress;
            const isCompleted = progress?.completed || false;
            const scorePercentage = progress ? (progress.score / progress.totalQuestions) * 100 : 0;
            
            return (
              <Card key={quiz.id} className="flex flex-col quiz-card hover:shadow-md transition-shadow duration-200">
                <CardHeader className="pb-2">
                  <CardTitle>{quiz.title}</CardTitle>
                  <CardDescription>{quiz.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow quiz-card-content">
                  <div className="mb-4">
                    <span className="text-sm font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">{quiz.topic}</span>
                  </div>
                  
                  {hasStarted && (
                    <div className="mt-4">
                      <div className="flex justify-between items-center text-sm mb-1">
                        <span>Your progress</span>
                        <span className="font-medium">{Math.round(scorePercentage)}%</span>
                      </div>
                      <Progress value={scorePercentage} className="h-2" />
                      
                      {isCompleted && (
                        <p className="mt-3 text-sm text-green-600 font-medium flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Completed on {new Date(progress.lastAttemptDate).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  )}

                  {!hasStarted && (
                    <p className="text-sm text-gray-500 mt-4">You haven't taken this quiz yet.</p>
                  )}
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to={`/quizzes/${quiz.id}`} className="flex items-center justify-center">
                      {!hasStarted ? (
                        <>
                          Start Quiz
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      ) : isCompleted ? 'Review Quiz' : 'Continue Quiz'}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Quizzes;
