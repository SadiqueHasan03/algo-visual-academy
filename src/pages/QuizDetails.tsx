
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import { quizzes } from "@/data/quizzes";
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

  useEffect(() => {
    if (quizId) {
      const foundQuiz = quizzes.find(q => q.id === quizId);
      if (foundQuiz) {
        setQuiz(foundQuiz);
        
        // Check if there's saved progress
        const progress = getQuizProgress(quizId);
        if (progress && progress.completed) {
          setIsComplete(true);
        }
      } else {
        navigate("/quizzes", { replace: true });
      }
    }
  }, [quizId, navigate]);

  const currentQuestion = quiz?.questions[currentQuestionIndex];
  
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption || !currentQuestion) return;
    
    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: selectedOption
    });
    
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (!quiz) return;
    
    setShowExplanation(false);
    setSelectedOption(null);
    
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed
      calculateScore();
      setShowResults(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
      
      // Restore previous answer if available
      if (currentQuestion) {
        setSelectedOption(userAnswers[quiz!.questions[currentQuestionIndex - 1].id] || null);
      }
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
    
    setScore(correctAnswers);
    
    // Save progress to localStorage
    saveQuizProgress({
      quizId: quiz.id,
      completed: true,
      score: correctAnswers,
      totalQuestions: quiz.questions.length,
      lastAttemptDate: new Date().toISOString(),
    });
    
    return correctAnswers;
  };

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

  if (!quiz) {
    return (
      <div className="container py-12 text-center">
        <p>Loading quiz...</p>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <Button 
        variant="outline" 
        onClick={() => navigate("/quizzes")}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Quizzes
      </Button>
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{quiz.title}</h1>
        <p className="text-gray-600">{quiz.description}</p>
      </div>
      
      {!isComplete && (
        <>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                Question {currentQuestionIndex + 1} of {quiz.questions.length}
              </span>
              <span className="text-sm font-medium">
                {Math.round(((currentQuestionIndex) / quiz.questions.length) * 100)}% Complete
              </span>
            </div>
            <Progress value={((currentQuestionIndex) / quiz.questions.length) * 100} className="h-2" />
          </div>
          
          {currentQuestion && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">{currentQuestion.text}</CardTitle>
              </CardHeader>
              <CardContent>
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
                    
                    return (
                      <div
                        key={option.id}
                        className={`flex items-center space-x-2 rounded-md border p-4 ${
                          showExplanation && isCorrect
                            ? "border-green-500 bg-green-50"
                            : showCorrectness && !isCorrect
                            ? "border-red-500 bg-red-50"
                            : isSelected
                            ? "border-primary"
                            : ""
                        }`}
                      >
                        <RadioGroupItem value={option.id} id={option.id} />
                        <label
                          htmlFor={option.id}
                          className="flex-grow cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {option.text}
                        </label>
                        {showExplanation && isCorrect && (
                          <Check className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                    );
                  })}
                </RadioGroup>
                
                {showExplanation && (
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
                    <h3 className="font-medium mb-1">Explanation:</h3>
                    <p className="text-sm">{currentQuestion.explanation}</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <div>
                  {currentQuestionIndex > 0 && !showExplanation && (
                    <Button 
                      variant="outline" 
                      onClick={handlePrevQuestion}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>
                  )}
                </div>
                
                <div>
                  {!showExplanation ? (
                    <Button 
                      onClick={handleCheckAnswer} 
                      disabled={!selectedOption}
                    >
                      Check Answer
                    </Button>
                  ) : (
                    <Button onClick={handleNextQuestion}>
                      {currentQuestionIndex < quiz.questions.length - 1 ? (
                        <>
                          Next <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        "Finish Quiz"
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
            <DialogTitle>Quiz Results</DialogTitle>
            <DialogDescription>
              You completed the {quiz.title} quiz!
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <h3 className="text-center text-2xl font-bold mb-2">
              {score} / {quiz.questions.length}
            </h3>
            <p className="text-center mb-4">
              {score === quiz.questions.length
                ? "Perfect score! Excellent work!"
                : score >= quiz.questions.length * 0.7
                ? "Great job! You've done well."
                : "Keep practicing to improve your score."}
            </p>
            
            <Progress 
              value={(score / quiz.questions.length) * 100} 
              className="h-3"
            />
          </div>
          
          <DialogFooter>
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
