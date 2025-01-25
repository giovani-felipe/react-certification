import { Routes, Route } from 'react-router';
import App from './App';
import Quiz from './Pages/Quiz';
import Answer from './Pages/Answer';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Quiz />} />
        <Route path="answer" element={<Answer />} />
      </Route>
    </Routes>
  );
}

export default Routers;
