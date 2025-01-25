import { Route, Routes } from 'react-router';
import App from './App';
import Answer from './Pages/Answer';
import Quiz from './Pages/Quiz';

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
