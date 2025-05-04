
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { getQuizProgressData, calculateTotalProgress } from "@/utils/quizProgress";
import { fetchQuizzes } from "@/utils/simulateBackend";
import { Quiz, UserQuizProgress } from "@/types/quiz";
import { CheckCircle, Clock, ArrowRight, BarChart2 } from "lucide-react";

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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "beginner";
      case "intermediate":
        return "intermediate";
      case "advanced":
        return "advanced";
      default:
        return "beginner";
    }
  };

  return (
    <div className="container py-12 animate-fade-in">
      <div className="mb-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Algorithm Quizzes</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Test your knowledge with interactive quizzes to reinforce your learning and track your progress.
        </p>
        
        <div className="bg-white dark:bg-gray-800 border rounded-xl p-6 mb-10 shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <div>
              <h2 className="text-xl font-semibold mb-1">Your Learning Journey</h2>
              <p className="text-muted-foreground text-sm">Track your overall quiz progress</p>
            </div>
            {isLoading ? (
              <Skeleton className="h-6 w-32" />
            ) : (
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-lg">
                <BarChart2 className="h-5 w-5" />
                <span className="font-medium">
                  {overallProgress.completed} of {overallProgress.total} completed
                </span>
              </div>
            )}
          </div>
          {isLoading ? (
            <Skeleton className="h-3 w-full" />
          ) : (
            <>
              <Progress 
                value={(overallProgress.completed / overallProgress.total) * 100} 
                className="h-3 mb-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Just started</span>
                <span>Halfway there</span>
                <span>Completed</span>
              </div>
            </>
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
              <Card 
                key={quiz.id} 
                className={`flex flex-col quiz-card difficulty-${quiz.difficulty} hover:shadow-md transition-all duration-200 overflow-hidden`}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{quiz.title}</CardTitle>
                    <span className={`difficulty-badge ${getDifficultyColor(quiz.difficulty)}`}>
                      {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
                    </span>
                  </div>
                  <CardDescription>{quiz.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow quiz-card-content">
                  <div className="mb-4">
                    <span className="text-sm px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                      {quiz.topic}
                    </span>
                  </div>
                  
                  {hasStarted && (
                    <div className="mt-5">
                      <div className="flex justify-between items-center text-sm mb-1">
                        <span className="text-muted-foreground">Your progress</span>
                        <span className="font-medium">{Math.round(scorePercentage)}%</span>
                      </div>
                      <Progress value={scorePercentage} className="h-2" />
                      
                      {isCompleted && (
                        <p className="mt-3 text-sm text-green-600 font-medium flex items-center">
                          <CheckCircle className="w-4 h-4 mr-1.5" />
                          Completed on {new Date(progress.lastAttemptDate).toLocaleDateString()}
                        </p>
                      )}
                      
                      {hasStarted && !isCompleted && (
                        <p className="mt-3 text-sm text-amber-600 font-medium flex items-center">
                          <Clock className="w-4 h-4 mr-1.5" />
                          In progress - continue where you left off
                        </p>
                      )}
                    </div>
                  )}

                  {!hasStarted && (
                    <p className="text-sm text-muted-foreground mt-5 flex items-center">
                      <span>You haven't taken this quiz yet</span>
                    </p>
                  )}
                </CardContent>
                <CardFooter className="pt-2">
                  <Button asChild className="w-full group">
                    <Link to={`/quizzes/${quiz.id}`} className="flex items-center justify-center">
                      {!hasStarted ? (
                        <>
                          Start Quiz
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
