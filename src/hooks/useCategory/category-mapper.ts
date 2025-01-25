import { Category } from '../../types/category';
import { CategoryDto } from './category-dto';

export class CategoryMapper {
  static toModel(dto: CategoryDto): Array<Category> {
    return dto.trivia_categories.map((item) => ({
      id: item.id,
      name: item.name,
    }));
  }
}
