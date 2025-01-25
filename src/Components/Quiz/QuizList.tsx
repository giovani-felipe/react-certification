import { useContext } from 'react';
import { Link } from 'react-router';
import { QuizContext } from '../../context/QuizProvider';
import { useAnswerTotal } from '../../hooks/useAnswer';
import QuizItem from './QuizItem';

function QuizList() {
  const { quiz } = useContext(QuizContext);
  const totalAnswer = useAnswerTotal();

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
