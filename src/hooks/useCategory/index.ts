import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Category } from '../../types/category';
import { CategoryDto } from './category-dto';
import { CategoryMapper } from './category-mapper';

function useCategory() {
  const [categories, setCategories] = useState<Array<Category>>();

  useEffect(() => {
    api<CategoryDto>('/api_category.php').then((data) =>
      setCategories(CategoryMapper.toModel(data))
    );
  }, []);

  return categories;
}

export default useCategory;
