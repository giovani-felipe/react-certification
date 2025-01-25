import { useContext } from 'react';
import { Link } from 'react-router';
import { QuizContext } from '../context/QuizProvider';
import { useAnswerRightAnswers } from '../hooks/useAnswer';
import QuizItem from './Quiz/QuizItem';
import Score from './Score';

function AnswerList() {
  const rightAnswer = useAnswerRightAnswers();
  const { quiz} = useContext(QuizContext);  
    
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
        >
          Create a new Quiz
        </Link>
      </div>
    </>
  );
}

export default AnswerList;
