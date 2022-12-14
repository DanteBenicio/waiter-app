import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Button from '../components/Button';
import Cart from '../components/Cart';
import Categories from '../components/Categories';
import Header from '../components/Header';
import { Empty } from '../components/Icons/Empty';
import Menu from '../components/Menu';
import TableModal from '../components/TableModal';
import { Text } from '../components/Text';
import { CartItem } from '../types/CartItem';
import { Category } from '../types/Category';
import { Product } from '../types/Product';
import { api } from '../utils/api';
import { CategoriesContainer, CenteredContainer, Container, Footer, FooterContainer, MenuContainer } from './styles';

export default function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  const [selectedTable, setSelectedTable] = useState('');

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      const [categoriesResponse, productsResponse] = await Promise.all([
        api.get('/categories'),
        api.get('/products')
      ]);

      try {
        setCategories(categoriesResponse.data);
        setProducts(productsResponse.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  async function handleSelectCategory(categoryId: string) {
    const route = categoryId === '' ? '/products' : `/categories/${categoryId}/products`;

    setIsLoadingProducts(true);

    const { data } = await api.get(route);

    setIsLoadingProducts(false);
    setProducts(data);
  }

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleResetOrder() {
    setSelectedTable('');
    setCartItems([]);
  }

  function handleAddToCart(product: Product) {
    if (!selectedTable) {
      setIsTableModalVisible(true);

      return;
    }

    setCartItems(prevState => {
      const itemIndex = cartItems.findIndex(item => item.product._id === product._id);

      if (itemIndex < 0) {
        return [...prevState, { quantity: 1, product }];
      }

      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1
      };

      return newCartItems;
    });
  }

  function handleDecrementCartItem(product: Product) {
    setCartItems(prevState => {
      const itemIndex = cartItems.findIndex(item => item.product._id === product._id);
      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1
      };

      return newCartItems;
    });
  }

  function handleIncrementCartItem(product: Product) {
    setCartItems(prevState => prevState.map(item => {
      if (item.product._id === product._id) {
        return { ...item, quantity: item.quantity + 1};
      }

      return item;
    }));
  }

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />

        {isLoading && (
          <CenteredContainer>
            <ActivityIndicator color="#d73035" size='large' />
          </CenteredContainer>
        )}

        {!isLoading && (
          <>
            <CategoriesContainer>
              <Categories categories={categories} onSelectCategory={handleSelectCategory} />
            </CategoriesContainer>

            {isLoadingProducts ? (
              <CenteredContainer>
                <ActivityIndicator color="#d73035" size='large' />
              </CenteredContainer>
            ) : (
              <>
                {products.length > 0 ? (
                  <MenuContainer>
                    <Menu onAddToCart={handleAddToCart} products={products} />
                  </MenuContainer>
                ) : (
                  <CenteredContainer>
                    <Empty />

                    <Text color="#666" style={{ marginTop: 24 }}>
                      Nenhum produto foi encontrado!
                    </Text>
                  </CenteredContainer>
                )}
              </>
            )}
          </>
        )}
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button onPress={() => setIsTableModalVisible(true)} disabled={isLoading}>Novo Pedido</Button>
          )}

          {selectedTable && (
            <Cart
              cartItems={cartItems}
              selectedTable={selectedTable}
              onAdd={handleIncrementCartItem}
              onDecrement={handleDecrementCartItem}
              onConfirmOrder={handleResetOrder}
            />
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
