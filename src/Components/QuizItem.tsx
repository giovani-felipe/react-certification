import { memo, useCallback } from 'react';
import { useAnswerById, useAnswerSet } from '../hooks/useAnswer';
import { Quiz } from '../types/quiz';

import './QuizItem.scss';

const Item = memo(function Item({
  question,
  currentAnswer,
  checkAnswer = false,
  handleAnswer,
}: {
  question: Quiz;
  handleAnswer: (answer: string) => void;
  checkAnswer?: boolean;
  currentAnswer?: string;
}) {
  console.log('Item', question);

  return (
    <>
      <p
        className="mt-3 mb-1"
        dangerouslySetInnerHTML={{ __html: question.question }}
      ></p>
      <div>
        {question.answers.map((answer, index) => {
          if (checkAnswer)
            return (
              <span
                key={index}
                className={`btn me-2 mt-1 ${
                  currentAnswer === question.correctAnswer &&
                  currentAnswer === answer
                    ? 'btn-success'
                    : currentAnswer === answer
                    ? 'btn-danger'
                    : 'btn-outline-success'
                } hover-disable`}
                dangerouslySetInnerHTML={{ __html: answer }}
              ></span>
            );

          return (
            <button
              type="button"
              key={index}
              className={`btn me-2 mt-1 ${
                currentAnswer === answer ? 'btn-success' : 'btn-outline-success'
              }`}
              dangerouslySetInnerHTML={{ __html: answer }}
              onClick={() => {
                handleAnswer(answer);
              }}
            ></button>
          );
        })}
      </div>
    </>
  );
});

const QuizItem = memo(function QuizItem({
  question,
  checkAnswer,
}: {
  question: Quiz;
  checkAnswer?: boolean;
}) {
  const currentAnswer = useAnswerById(question.id);
  const handleAnswer = useAnswerSet();

  const setAnswer = useCallback((answer: string) => {
    handleAnswer(question.id, answer);
  }, []);

  console.log('QuizItem', question);

  return (
    <Item
      currentAnswer={currentAnswer}
      question={question}
      handleAnswer={setAnswer}
      checkAnswer={checkAnswer}
    />
  );
});

export default QuizItem;
