import { Platform } from 'react-native';
import styled from 'styled-components/native';

const shadowOpacity = Platform.OS === 'android' ? 1 : 0.1;

export const CategoryContainer = styled.TouchableOpacity`
  align-items: center;
  margin-left: 24px;
`;

export const Icon = styled.View`
  background-color: #FFF;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, ${shadowOpacity});
  elevation: 1;
`;
