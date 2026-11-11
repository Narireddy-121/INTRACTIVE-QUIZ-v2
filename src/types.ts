export type QuestionDifficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  q: string;
  o: string[];
  a: number;
  difficulty: QuestionDifficulty;
  explanation?: string;
}

export interface Topic {
  id: string;
  name: string;
  icon?: string;
  desc: string;
  questions: Question[];
}

export type LanguageCategory = 'all' | 'systems' | 'web' | 'enterprise' | 'scripting' | 'database';

export interface Language {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  topics: Record<string, Topic>;
}

export type QuizData = Record<string, Language>;

export type QuizDifficulty = 'mixed' | 'easy' | 'medium' | 'hard';

export interface QuizSettings {
  count: number;
  difficulty: QuizDifficulty;
}

export interface ActiveQuizState {
  questions: Question[];
  currentIndex: number;
  userAnswers: (number | null)[];
  startTime: number | null;
  endTime: number | null;
  isFinished: boolean;
  requestedCount?: number;
}

export type AppScreen = 'home-screen' | 'topics-screen' | 'quiz-screen' | 'result-screen' | 'review-screen';

export type ReviewFilter = 'all' | 'correct' | 'wrong';
