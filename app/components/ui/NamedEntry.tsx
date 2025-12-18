import styled from 'styled-components/native';
import Container from '../layout/Container';
import Title from './Title';
import Txt from './Txt';

type NamedEntryProps = {
  name: string;
  entry: React.ReactElement | string;
  size?: number;
  margin?: string;
  padding?: string;
};

const NamedEntry = ({
  name,
  entry,
  size = 1,
  margin = '0',
  padding = '0',
}: NamedEntryProps) => {
  return (
    <Container margin={margin} padding={padding}>
      <Title size={size}>{name}</Title>
      <EntryContainer size={size} margin={'0'} padding={'0 0 0 1rem'}>
        <Txt size={size}>{entry}</Txt>
      </EntryContainer>
    </Container>
  );
};

type SizeProps = {
  size: number;
};
type ContainerProps = SizeProps & {
  margin: string;
  padding: string;
};

const EntryContainer = styled(Container)<ContainerProps>`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export default NamedEntry;
