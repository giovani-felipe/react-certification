type CategoryItem = {
  id: number;
  name: string;
};

export type CategoryDto = {
  trivia_categories: Array<CategoryItem>;
};
