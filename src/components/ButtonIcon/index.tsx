import { TouchableOpacityProps } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { ButtonIconTypeStyleProps, Container, Icon } from './styles';

type Props = TouchableOpacityProps & {
  iconName: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export function ButtonIcon({ iconName, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container
      type={type}
      {...rest}
    >
      <Icon
        name={iconName}
        type={type}
      />
    </Container>
  );
}
