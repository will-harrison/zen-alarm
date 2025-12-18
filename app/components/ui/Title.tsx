import { useThemeColor } from '@/app/hooks/use-theme-color';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { useFonts } from 'expo-font';
import { Text, type TextProps } from 'react-native';
import styled from 'styled-components/native';

type TitleProps = TextProps & {
  size?: number;
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  children?: React.ReactNode;
};

type TitleStyleProps = {
  font: string;
  size: number;
};

const Title = ({
  size = 1,
  lightColor,
  darkColor,
  type = 'default',
  children,
}: TitleProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const [loaded, error] = useFonts({ Montserrat_400Regular });
  if (!loaded || error) {
    return <Text>Nope</Text>;
  }

  return (
    <TitleStyle size={size} font={'Montserrat_400Regular'}>
      {children}
    </TitleStyle>
  );
};

const TitleStyle = styled.Text<TitleStyleProps>`
  font-family: ${({ font }) => font};
  font-size: ${({ size }) => `${size * 0.65}em`};
  line-height: ${({ size }) => `${size * 0.5}rem`};
  text-transform: uppercase;
  opacity: 0.5;
`;

export default Title;
