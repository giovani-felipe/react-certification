import { Outlet } from 'react-router';
import AnswerProvider from './context/AnswerProvider';
import QuizProvider from './context/QuizProvider';

function App() {
  return (
    <main className="container">
      <QuizProvider>
        <AnswerProvider>
          <Outlet />
        </AnswerProvider>
      </QuizProvider>
    </main>
  );
}

export default App;
