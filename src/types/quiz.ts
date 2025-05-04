
export interface QuizQuestion {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  topic: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  questions: QuizQuestion[];
}

export interface QuizProgress {
  quizId: string;
  completed: boolean;
  score: number;
  totalQuestions: number;
  lastAttemptDate: string;
  answers?: Record<string, string>; // Map of questionId -> selectedOptionId
}

export interface UserQuizProgress {
  [quizId: string]: QuizProgress;
}
