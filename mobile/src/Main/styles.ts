import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
  display: flex;
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  background-color: #fafafa;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  height: 50px;
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 80px;
  background-color: #FFF;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`
`;

export const CenteredContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
