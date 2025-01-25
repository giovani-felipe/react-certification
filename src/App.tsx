import { Outlet } from 'react-router';
import QuizProvider from './context/QuizProvider';
import AnswerProvider from './context/AnswerProvider';

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
