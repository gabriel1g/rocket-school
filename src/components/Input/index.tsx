import { RefObject } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { useTheme } from 'styled-components/native';

import { Container } from './styles';

type Props = TextInputProps & {
  useRef?: RefObject<TextInput>;
};

export function Input({ useRef, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container
      placeholderTextColor={theme.COLORS.GRAY_300}
      ref={useRef}
      {...rest}
    />
  );
}
