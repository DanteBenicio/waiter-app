import { useState } from 'react';
import { FlatList } from 'react-native';
import { Category } from '../../types/Category';
import { Text } from '../Text';
import { CategoryContainer, Icon } from './styles';

interface CategoriesProps {
  categories: Category[]
  onSelectCategory: (categoryId: string) => Promise<void>
}

export default function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;

    onSelectCategory(category);
    setSelectedCategory(category);
  }

  return (
    <FlatList
      horizontal
      data={categories}
      showsHorizontalScrollIndicator={false}
      keyExtractor={category => category._id}
      contentContainerStyle={{ paddingRight: 24 }}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;

        return (
          <CategoryContainer key={category._id} onPress={() => handleSelectCategory(category._id)} >
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>

            <Text opacity={isSelected ? 1 : 0.5} size={14} weight="600">{category.name}</Text>
          </CategoryContainer>
        );
      }}
    />
  );
}
