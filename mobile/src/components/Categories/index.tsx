import { useState } from 'react';
import { FlatList } from 'react-native';
import { categories } from '../../mocks/categories';
import { Text } from '../Text';
import { Category, Icon } from './styles';

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;

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
          <Category key={category._id} onPress={() => handleSelectCategory(category._id)} >
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>

            <Text opacity={isSelected ? 1 : 0.5} size={14} weight="600">{category.name}</Text>
          </Category>
        );
      }}
    />
  );
}
