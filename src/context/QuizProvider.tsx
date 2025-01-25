import { PropsWithChildren, createContext, useState } from 'react';
import { Quiz } from '../types/quiz';

type QuizContextProps = {
  quiz: Array<Quiz>;
  setQuiz: (quiz: Array<Quiz>) => void;
};

export const QuizContext = createContext<QuizContextProps>(
  {} as QuizContextProps
);

function QuizProvider({ children }: PropsWithChildren) {
  const [quiz, setQuiz] = useState<Array<Quiz>>([]);

  return (
    <QuizContext.Provider value={{ quiz, setQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}

export default QuizProvider;
