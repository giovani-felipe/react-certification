import { Quiz, QuizDifficulty } from '../../types/quiz';
import { QuizDifficultyDTO, QuizResponseDTO } from './quiz-dto';

function getRandom(max:number){
  return Math.floor(Math.random() * max)
}

export class QuizMapper {
  static toModel(dto: QuizResponseDTO): Array<Quiz> {
    return dto.results.map((quiz, index) => ({
      id: index,
      category: quiz.category,
      correctAnswer: quiz.correct_answer,
      answers: [...quiz.incorrect_answers, quiz.correct_answer]
        .sort((a,b)=> {
          return getRandom(a.length)- getRandom(b.length);
        })
        .reverse(),
      question: quiz.question,
      difficulty: QuizDifficultyMapper.toModel(quiz.difficulty),
    }));
  }
}

export class QuizDifficultyMapper {
  static toModel(dto: QuizDifficultyDTO): QuizDifficulty {
    switch (dto) {
      case QuizDifficultyDTO.EASY:
        return QuizDifficulty.EASY;
      case QuizDifficultyDTO.MEDIUM:
        return QuizDifficulty.MEDIUM;
      case QuizDifficultyDTO.HARD:
        return QuizDifficulty.HARD;
      default:
        throw new Error(`QuizDifficulty not found: ${dto}`);
    }
  }

  static toDto(model: QuizDifficulty): QuizDifficultyDTO {
    switch (model) {
      case QuizDifficulty.EASY:
        return QuizDifficultyDTO.EASY;
      case QuizDifficulty.MEDIUM:
        return QuizDifficultyDTO.MEDIUM;
      case QuizDifficulty.HARD:
        return QuizDifficultyDTO.HARD;
      default:
        throw new Error(`QuizDifficultyDTO not found: ${model}`);
    }
  }
}
