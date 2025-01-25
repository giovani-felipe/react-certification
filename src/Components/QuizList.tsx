import QuizItem from './QuizItem';
import { useContext } from 'react';
import { QuizContext } from '../context/QuizProvider';
import { Link } from 'react-router';
import { useAnswerTotal } from '../hooks/useAnswer';

function QuizList() {
  const { quiz } = useContext(QuizContext);
  const totalAnswer = useAnswerTotal();

  console.log('QuizList', quiz);

  return (
    <>
      {quiz &&
        quiz.map((question) => (
          <QuizItem key={question.id} question={question} />
        ))}
      <div className="d-grid my-3">
        {quiz.length === totalAnswer && totalAnswer > 0 && (
          <Link className="btn btn-secondary" to="/answer">
            Submit
          </Link>
        )}
      </div>
    </>
  );
}

export default QuizList;
