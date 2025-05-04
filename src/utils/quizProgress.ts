
import { UserQuizProgress, QuizProgress } from "../types/quiz";
import { saveQuizProgressToBackend } from "./simulateBackend";

const STORAGE_KEY = "algorithmLearner_quizProgress";

export const saveQuizProgress = async (progress: QuizProgress): Promise<void> => {
  const currentProgress = getQuizProgressData();
  
  const updatedProgress = {
    ...currentProgress,
    [progress.quizId]: progress
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProgress));
  
  // Simulate sending to backend
  await saveQuizProgressToBackend(progress);
};

export const getQuizProgressData = (): UserQuizProgress => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : {};
};

export const getQuizProgress = (quizId: string): QuizProgress | null => {
  const progressData = getQuizProgressData();
  return progressData[quizId] || null;
};

export const calculateTotalProgress = (): { completed: number; total: number } => {
  const progressData = getQuizProgressData();
  const quizIds = Object.keys(progressData);
  
  const completed = quizIds.filter(id => progressData[id].completed).length;
  
  return {
    completed,
    total: quizIds.length
  };
};
