
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, ArrowLeft, ArrowRight, AlertCircle, CheckCircle, Clock, HelpCircle, Award } from "lucide-react";
import { fetchQuizById } from "@/utils/simulateBackend";
import { Quiz, QuizQuestion } from "@/types/quiz";
import { saveQuizProgress, getQuizProgress } from "@/utils/quizProgress";
import { useToast } from "@/hooks/use-toast";

const QuizDetails = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const loadQuiz = async () => {
      if (!quizId) return;
      
      setLoading(true);
      try {
        const fetchedQuiz = await fetchQuizById(quizId);
        
        if (fetchedQuiz) {
          setQuiz(fetchedQuiz);
          
          // Check if there's saved progress
          const progress = getQuizProgress(quizId);
          if (progress) {
            if (progress.completed) {
              setIsComplete(true);
            } else {
              // Load saved answers
              setUserAnswers(progress.answers || {});
            }
          }
        } else {
          navigate("/quizzes", { replace: true });
          toast({
            title: "Quiz not found",
            description: "The requested quiz could not be found.",
            variant: "destructive"
          });
        }
      } catch (error) {
        console.error("Error loading quiz:", error);
        toast({
          title: "Error loading quiz",
          description: "There was a problem loading this quiz. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadQuiz();
  }, [quizId, navigate, toast]);

  const currentQuestion = quiz?.questions[currentQuestionIndex];
  
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption || !currentQuestion) return;
    
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: selectedOption
    }));
    
    setShowExplanation(true);
  };

  const animateQuestionChange = (callback: () => void) => {
    setFadeClass(""); // Remove animation class
    setTimeout(() => {
      callback(); // Change the question
      setFadeClass("fade-in"); // Add animation class back
    }, 100);
  };

  const handleNextQuestion = () => {
    if (!quiz) return;
    
    setShowExplanation(false);
    setSelectedOption(null);
    
    if (currentQuestionIndex < quiz.questions.length - 1) {
      animateQuestionChange(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      });
    } else {
      // Quiz completed
      const calculatedScore = calculateScore();
      setScore(calculatedScore);
      setShowResults(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      animateQuestionChange(() => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setShowExplanation(false);
        
        // Restore previous answer if available
        if (currentQuestion) {
          setSelectedOption(userAnswers[quiz!.questions[currentQuestionIndex - 1].id] || null);
        }
      });
    }
  };

  const calculateScore = () => {
    if (!quiz) return 0;
    
    let correctAnswers = 0;
    quiz.questions.forEach(question => {
      const selectedOptionId = userAnswers[question.id];
      const correctOption = question.options.find(opt => opt.isCorrect);
      
      if (selectedOptionId && correctOption && selectedOptionId === correctOption.id) {
        correctAnswers += 1;
      }
    });
    
    // Save progress to localStorage and simulated backend
    saveQuizProgress({
      quizId: quiz.id,
      completed: true,
      score: correctAnswers,
      totalQuestions: quiz.questions.length,
      lastAttemptDate: new Date().toISOString(),
      answers: userAnswers
    });
    
    return correctAnswers;
  };

  const saveCurrentProgress = () => {
    if (!quiz || isComplete) return;
    
    // Save current progress without marking as complete
    saveQuizProgress({
      quizId: quiz.id,
      completed: false,
      score: 0, // Will be calculated when complete
      totalQuestions: quiz.questions.length,
      lastAttemptDate: new Date().toISOString(),
      answers: userAnswers
    });
  };

  // Save progress when navigating away
  useEffect(() => {
    return () => {
      saveCurrentProgress();
    };
  }, [userAnswers]);

  const finishQuiz = () => {
    setIsComplete(true);
    navigate("/quizzes");
    
    toast({
      title: "Quiz completed!",
      description: `You scored ${score} out of ${quiz?.questions.length} questions.`,
    });
  };

  const isCorrectAnswer = (questionId: string, optionId: string) => {
    if (!quiz) return false;
    const question = quiz.questions.find(q => q.id === questionId);
    if (!question) return false;
    
    const option = question.options.find(o => o.id === optionId);
    return option?.isCorrect || false;
  };

  const getSelectedOptionForCurrentQuestion = () => {
    return currentQuestion ? userAnswers[currentQuestion.id] : null;
  };

  const getScoreMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "Perfect score! Excellent work!";
    if (percentage >= 80) return "Great job! Very impressive!";
    if (percentage >= 70) return "Good work! You've done well.";
    if (percentage >= 50) return "Not bad. Keep practicing!";
    return "You can do better! Try again after reviewing.";
  };

  const getDifficultyBadge = (difficulty: string) => {
    let color = "";
    switch (difficulty) {
      case "beginner":
        color = "bg-green-100 text-green-700 border-green-200";
        break;
      case "intermediate":
        color = "bg-amber-100 text-amber-700 border-amber-200";
        break;
      case "advanced":
        color = "bg-red-100 text-red-700 border-red-200";
        break;
      default:
        color = "bg-blue-100 text-blue-700 border-blue-200";
    }
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="container py-12 max-w-4xl mx-auto">
        <Button 
          variant="outline" 
          onClick={() => navigate("/quizzes")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Quizzes
        </Button>
        
        <div className="mb-6">
          <Skeleton className="h-10 w-3/4 mb-2" />
          <Skeleton className="h-5 w-1/2" />
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-2 w-full" />
        </div>
        
        <Card className="mb-6 shadow-md">
          <CardHeader>
            <Skeleton className="h-6 w-full" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center space-x-2 rounded-md border p-4">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div>
              <Skeleton className="h-10 w-24" />
            </div>
            <div>
              <Skeleton className="h-10 w-32" />
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="container py-12 text-center">
        <div className="max-w-md mx-auto p-8 border rounded-xl bg-red-50 text-red-800">
          <AlertCircle className="h-12 w-12 mx-auto text-red-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">Quiz not found</h2>
          <p className="mb-6">The quiz you're looking for doesn't exist or has been removed.</p>
          <Button 
            onClick={() => navigate("/quizzes")}
            className="mx-auto"
          >
            Return to Quizzes
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 max-w-4xl mx-auto animate-fade-in">
      <Button 
        variant="outline" 
        onClick={() => navigate("/quizzes")}
        className="mb-6 group"
      >
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Quizzes
      </Button>
      
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 items-center mb-3">
          <h1 className="text-3xl font-bold">{quiz.title}</h1>
          {quiz.difficulty && getDifficultyBadge(quiz.difficulty)}
        </div>
        <p className="text-muted-foreground">{quiz.description}</p>
      </div>
      
      {!isComplete && (
        <>
          <div className="quiz-progress-container">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium flex items-center">
                <HelpCircle className="h-4 w-4 mr-1.5 text-primary" />
                Question {currentQuestionIndex + 1} of {quiz.questions.length}
              </span>
              <span className="text-sm font-medium">
                {Math.round(((currentQuestionIndex) / quiz.questions.length) * 100)}% Complete
              </span>
            </div>
            <Progress value={((currentQuestionIndex) / quiz.questions.length) * 100} className="h-2" />
          </div>
          
          {currentQuestion && (
            <Card className={`mb-8 shadow-md border-t-4 border-t-primary overflow-hidden ${fadeClass}`}>
              <CardHeader className="bg-muted/30">
                <CardTitle className="text-xl">{currentQuestion.text}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <RadioGroup
                  value={selectedOption || ""}
                  onValueChange={handleOptionSelect}
                  className="space-y-4"
                  disabled={showExplanation}
                >
                  {currentQuestion.options.map((option) => {
                    const isSelected = selectedOption === option.id;
                    const userSelectedThisOption = getSelectedOptionForCurrentQuestion() === option.id;
                    const isCorrect = option.isCorrect;
                    const showCorrectness = showExplanation && userSelectedThisOption;
                    
                    let optionClass = "quiz-option";
                    if (showExplanation && isCorrect) {
                      optionClass += " correct";
                    } else if (showCorrectness && !isCorrect) {
                      optionClass += " incorrect";
                    }
                    
                    return (
                      <div
                        key={option.id}
                        className={`flex items-center space-x-2 rounded-lg border p-4 ${optionClass} ${
                          isSelected && !showExplanation ? "border-primary bg-primary/5" : ""
                        } ${showExplanation ? "quiz-option-disabled" : ""}`}
                      >
                        <RadioGroupItem value={option.id} id={option.id} />
                        <label
                          htmlFor={option.id}
                          className="flex-grow cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {option.text}
                        </label>
                        {showExplanation && isCorrect && (
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        )}
                      </div>
                    );
                  })}
                </RadioGroup>
                
                {showExplanation && (
                  <div className="quiz-explanation mt-6">
                    <h3 className="font-medium mb-2 flex items-center text-primary">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Explanation:
                    </h3>
                    <p className="text-sm">{currentQuestion.explanation}</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between py-4 border-t bg-muted/20">
                <div>
                  {currentQuestionIndex > 0 && !showExplanation && (
                    <Button 
                      variant="outline" 
                      onClick={handlePrevQuestion}
                      className="group"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Previous
                    </Button>
                  )}
                </div>
                
                <div>
                  {!showExplanation ? (
                    <Button 
                      onClick={handleCheckAnswer} 
                      disabled={!selectedOption}
                      className="relative overflow-hidden group"
                    >
                      <span className="relative z-10">Check Answer</span>
                      <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </Button>
                  ) : (
                    <Button onClick={handleNextQuestion} className="quiz-next-button group">
                      {currentQuestionIndex < quiz.questions.length - 1 ? (
                        <>
                          Next <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      ) : (
                        <>
                          Finish Quiz <CheckCircle className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          )}
        </>
      )}
      
      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Quiz Results</DialogTitle>
            <DialogDescription className="text-center">
              You've completed the {quiz.title} quiz!
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-6 quiz-result-summary">
            <div className="mb-6">
              <Award className="h-16 w-16 mx-auto text-primary mb-4" />
              <h3 className="text-center text-3xl font-bold mb-2">
                {score} / {quiz.questions.length}
              </h3>
              <p className="text-center text-muted-foreground">
                {getScoreMessage(score, quiz.questions.length)}
              </p>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Score</span>
                <span className="font-medium">{Math.round((score / quiz.questions.length) * 100)}%</span>
              </div>
              <Progress 
                value={(score / quiz.questions.length) * 100} 
                className="h-3"
              />
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-md flex items-center">
                <CheckCircle className="h-4 w-4 mr-1.5" />
                <span>Correct: {score}</span>
              </div>
              <div className="bg-red-50 text-red-700 px-3 py-1 rounded-md flex items-center">
                <AlertCircle className="h-4 w-4 mr-1.5" />
                <span>Incorrect: {quiz.questions.length - score}</span>
              </div>
            </div>
          </div>
          
          <DialogFooter className="sm:justify-center">
            <Button onClick={finishQuiz}>
              Return to Quizzes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default QuizDetails;
