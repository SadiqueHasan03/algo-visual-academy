
import { Quiz, QuizProgress } from "../types/quiz";
import { quizzes } from "@/data/quizzes";

// Simulate API response delay
const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Fetch quizzes with simulated delay
export const fetchQuizzes = async (): Promise<Quiz[]> => {
  await simulateDelay(800);
  return [...quizzes];
};

// Fetch a single quiz by id with simulated delay
export const fetchQuizById = async (quizId: string): Promise<Quiz | null> => {
  await simulateDelay(600);
  const quiz = quizzes.find(q => q.id === quizId);
  return quiz || null;
};

// Save quiz progress with simulated API call
export const saveQuizProgressToBackend = async (progress: QuizProgress): Promise<void> => {
  await simulateDelay(500);
  // In a real app, this would make an API call to save progress
  // For now, we'll just use localStorage in quizProgress.ts
};
