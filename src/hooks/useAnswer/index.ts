import { useCallback, useContext, useMemo } from 'react';
import { AnswerContext } from '../../context/AnswerProvider';
import { QuizContext } from '../../context/QuizProvider';

export function useAnswerById(id: number) {
  const { answers } = useContext(AnswerContext);;
  
  const newAnswer = answers.get(id);
  
  const currentAnswer = useMemo(() => newAnswer, [newAnswer]);

  return currentAnswer;
}

export function useAnswerSet() {
  const { handleAnswer } = useContext(AnswerContext);

  const setAnswer = useCallback((id: number, answer: string) => {
    handleAnswer({ id, answer });
  }, [handleAnswer]);

  return setAnswer;
}

export function useAnswerTotal() {
  const { answers } = useContext(AnswerContext);
  
  const total = useMemo(() => answers.size, [answers.size]);

  return total;
}

export function useAnswerRightAnswers() {
  const { quiz } = useContext(QuizContext);
  const { answers } = useContext(AnswerContext);

  const rightAnswer = useMemo(() => {
    let rightAnswer = 0;
    quiz.forEach((question) => {
      const answer = answers.get(question.id);
      if (answer === question.correctAnswer) rightAnswer++;
    });
    return rightAnswer;
  }, [quiz, answers]);

  return rightAnswer;
}
