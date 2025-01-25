import { useEffect, useState } from 'react';
import { Category } from '../../types/category';
import api from '../../services/api';
import { CategoryMapper } from './category-mapper';
import { CategoryDto } from './category-dto';

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
