import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { products } from '../../mocks/products';
import formatCurrency from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import { AddToCardButton, Product, ProductDetails, ProductImage, Separator } from './styles';

export default function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      ItemSeparatorComponent={Separator}
      keyExtractor={product => product._id}
      renderItem={({ item: product }) => (
        <Product>
          <ProductImage
            source={{
              uri: `http://192.168.100.11:3001/uploads/${product.imagePath}`
            }}
          />

          <ProductDetails>
            <Text weight='600'>{product.name}</Text>
            <Text color='#666' size={14} style={{ marginVertical: 8 }}>{product.description}</Text>
            <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
          </ProductDetails>

          <AddToCardButton>
            <PlusCircle />
          </AddToCardButton>
        </Product>
      )}
    />
  );
}
