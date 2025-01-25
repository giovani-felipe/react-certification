import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { QuizDifficulty } from '../types/quiz';
import { Category } from '../types/category';
import useCategories from '../hooks/useCategory';

import { QuizContext } from '../context/QuizProvider';
import getQuiz from '../services/quiz/quiz-service';

function QuizForm() {
  const [category, setCategory] = useState<Category>();
  const [difficulty, setDifficulty] = useState<QuizDifficulty | undefined>();

  const { setQuiz } = useContext(QuizContext);

  const categories = useCategories();

  const handleCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    const category = categories?.find(
      (category) => category.id === parseInt(event.target.value)
    );
    setCategory(category);
  };

  const handleDifficulty = (event: ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(event.target.value as QuizDifficulty);
  };

  const handleSubimit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (category && difficulty) {
      const data = await getQuiz(category?.id, difficulty);

      setQuiz(data);
    }
  };

  return (
    <>
      <form onSubmit={handleSubimit}>
        <div className="input-group">
          <select
            name="category"
            id="categorySelect"
            className="form-select"
            value={category?.id ?? ''}
            onChange={handleCategory}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <select
            name="difficulty"
            id="difficultySelect"
            className={`form-select 
            ${difficulty === undefined ? '' : 'text-capitalize'}`}
            value={difficulty ?? ''}
            onChange={handleDifficulty}
            required
          >
            <option value="" disabled>
              Select difficulty
            </option>
            {Object.values(QuizDifficulty).map((difficulty) => (
              <option
                key={difficulty}
                className="text-capitalize"
                value={difficulty}
              >
                {difficulty}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="btn btn-light border"
            id="createBtn"
            disabled={!(category?.id && difficulty)}
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default QuizForm;
