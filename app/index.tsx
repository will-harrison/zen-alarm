import Container from './components/layout/Container';
import NamedEntry from './components/ui/NamedEntry';
import Title from './components/ui/Title';
import Txt from './components/ui/Txt';

export default function Index() {
  return (
    <Container>
      <NamedEntry
        size={1.5}
        padding="1rem 2rem"
        name="blah"
        entry="tester"
      ></NamedEntry>
      <Title>Blah</Title>
      <Txt>Tester</Txt>
    </Container>
  );
}
