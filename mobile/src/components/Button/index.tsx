import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps {
  children: React.ReactNode
  onPress: () => void
  disabled?: boolean
  isLoading?: boolean
}

export default function Button({ children, onPress, disabled = false, isLoading = false }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled || isLoading}>
      {!isLoading && <Text weight='600' color='#FFF'>{children}</Text>}

      {isLoading && (
        <ActivityIndicator color="#FFF"/>
      )}
    </Container>
  );
}
