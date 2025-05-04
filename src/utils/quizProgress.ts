
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

export const clearQuizProgress = (quizId: string): void => {
  const progressData = getQuizProgressData();
  if (progressData[quizId]) {
    delete progressData[quizId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
  }
};

export const getCompletedQuizzes = (): string[] => {
  const progressData = getQuizProgressData();
  return Object.keys(progressData).filter(id => progressData[id].completed);
};

export const getUserPerformanceStats = (): { quizzesTaken: number; averageScore: number; bestScore: number } => {
  const progressData = getQuizProgressData();
  const quizIds = Object.keys(progressData);
  
  if (quizIds.length === 0) {
    return {
      quizzesTaken: 0,
      averageScore: 0,
      bestScore: 0
    };
  }
  
  const completedQuizzes = quizIds.filter(id => progressData[id].completed);
  const scores = completedQuizzes.map(id => {
    const { score, totalQuestions } = progressData[id];
    return (score / totalQuestions) * 100;
  });
  
  const averageScore = scores.length > 0 
    ? scores.reduce((a, b) => a + b, 0) / scores.length 
    : 0;
  
  const bestScore = scores.length > 0 
    ? Math.max(...scores) 
    : 0;
  
  return {
    quizzesTaken: completedQuizzes.length,
    averageScore: Math.round(averageScore),
    bestScore: Math.round(bestScore)
  };
};
