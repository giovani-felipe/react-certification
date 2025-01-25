import QuizForm from '../Components/Quiz/QuizForm';
import QuizList from '../Components/Quiz/QuizList';

function Quiz() {
  
  return (
    <>
      <h1 className="text-center">Quiz Maker</h1>
      <QuizForm />
      <QuizList />
    </>
  );
}

export default Quiz;
