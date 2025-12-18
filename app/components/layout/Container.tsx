import { useThemeColor } from '@/app/hooks/use-theme-color';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

type ContainerProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  margin?: string;
  padding?: string;
  children: React.ReactNode;
};

type ContainerStyleProps = {
  color: string;
  margin: string;
  padding: string;
};

const Container = ({
  lightColor,
  darkColor,
  children,
  margin = '0',
  padding = '0',
  ...rest
}: ContainerProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return (
    <ContainerStyle
      color={backgroundColor}
      padding={padding}
      margin={margin}
      {...rest}
    >
      {children}
    </ContainerStyle>
  );
};

const ContainerStyle = styled.View<ContainerStyleProps>`
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
`;

export default Container;
