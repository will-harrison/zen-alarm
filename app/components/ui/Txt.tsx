import { useThemeColor } from '@/app/hooks/use-theme-color';
import { Gabarito_400Regular } from '@expo-google-fonts/gabarito/400Regular';
import { useFonts } from 'expo-font';
import { Text, type TextProps } from 'react-native';
import styled from 'styled-components/native';

export type TxtProps = TextProps & {
  size?: number;
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  children: string | React.ReactElement;
};

const Txt = ({
  size = 1.5,
  style,
  lightColor,
  darkColor,
  type = 'default',
  children,
  ...rest
}: TxtProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const [loaded, error] = useFonts({ Gabarito_400Regular });
  if (!loaded) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Font error</Text>;
  }

  return (
    <TextStyle size={size} font={'Gabarito_400Regular'} color={color}>
      {children}
    </TextStyle>
  );
};

type TextStyleProps = {
  size: number;
  font: string;
  color: string;
};

const TextStyle = styled.Text<TextStyleProps>`
  font-family: ${({ font }) => font};
  font-size: ${({ size }) => `${size}rem`};
  line-height: ${({ size }) => `${size || 1}rem`};
  color: ${({ color }) => color};
`;

export default Txt;
