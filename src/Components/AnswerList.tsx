import { useContext } from 'react';
import { Link } from 'react-router';
import { QuizContext } from '../context/QuizProvider';
import QuizItem from './QuizItem';
import Score from './Score';
import { useAnswerRightAnswers } from '../hooks/useAnswer';
import { AnswerContext } from '../context/AnswerProvider';

function AnswerList() {
  const rightAnswer = useAnswerRightAnswers();
  const { quiz, setQuiz } = useContext(QuizContext);
  const { reset } = useContext(AnswerContext);

  console.log('AnswerList', rightAnswer);

  return (
    <>
      {quiz.map((question) => (
        <QuizItem key={question.id} question={question} checkAnswer={true} />
      ))}
      <Score total={quiz.length} rightAnswer={rightAnswer} />
      <div className="d-grid my-3">
        <Link
          className="btn btn-secondary"
          to="/"
          onClick={() => {
            setQuiz([]);
            reset();
          }}
        >
          Create a new Quiz
        </Link>
      </div>
    </>
  );
}

export default AnswerList;
