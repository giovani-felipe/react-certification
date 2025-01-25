import QuizForm from '../Components/QuizForm';
import QuizList from '../Components/QuizList';

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
