import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { AnswerContext } from '../../context/AnswerProvider';
import { QuizContext } from '../../context/QuizProvider';
import useCategories from '../../hooks/useCategory';
import getQuiz from '../../services/quiz/quiz-service';
import { Category } from '../../types/category';
import { QuizDifficulty } from '../../types/quiz';

function QuizForm() {
  const [category, setCategory] = useState<Category>();
  const [difficulty, setDifficulty] = useState<QuizDifficulty | undefined>();

  const { setQuiz } = useContext(QuizContext);  
  const {reset} = useContext(AnswerContext);

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (category && difficulty) {
      const data = await getQuiz(category?.id, difficulty);      
      setQuiz(data);            
    }
  };

  useEffect(()=>{    
    reset();
    setQuiz([]);
  },[])
  
  return (
    <>
      <form onSubmit={handleSubmit}>
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
