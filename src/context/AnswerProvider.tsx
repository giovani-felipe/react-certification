import { PropsWithChildren, createContext, useCallback, useState } from 'react';
import { Answer } from '../types/answer';

type AnswerContextProps = {
  answers: Map<number, string>;
  handleAnswer: (answer: Answer) => void;
  reset: () => void;
};

export const AnswerContext = createContext<AnswerContextProps>(
  {} as AnswerContextProps
);

function AnswerProvider({ children }: PropsWithChildren) {
  const [answers, setAnswers] = useState(new Map());

  const handleAnswer = useCallback((answer: Answer) => {
    answers.set(answer.id, answer.answer);
    const newAnswers = new Map(answers);
    setAnswers(newAnswers);
  }, []);

  const reset = useCallback(() => {
    setAnswers(new Map());
  }, []);

  return (
    <AnswerContext.Provider value={{ answers, handleAnswer, reset }}>
      {children}
    </AnswerContext.Provider>
  );
}

export default AnswerProvider;
