import { QuizDifficulty } from '../../types/quiz';
import api from '../api';
import { QuizResponseDTO } from './quiz-dto';
import { QuizMapper } from './quiz-mapper';

async function getQuiz(
  categoryId: number,
  difficulty: QuizDifficulty,
  amount: number = 5,
  type: string = 'multiple'
) {
  const params = new URLSearchParams();
  params.append('category', categoryId.toString());
  params.append('difficulty', difficulty);
  params.append('amount', amount.toString());
  params.append('type', type);

  const data = await api<QuizResponseDTO>(`/api.php?${params.toString()}`);

  return QuizMapper.toModel(data);
}

export default getQuiz;
