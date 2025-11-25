export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  plays: number;
  isSponsored?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content?: string; // HTML content for the single post view
  imageUrl: string;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer?: number; // Index of correct answer
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Record<number, number>; // questionId -> selectedOptionIndex
  isFinished: boolean;
  score: number;
}