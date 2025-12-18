import styled from 'styled-components/native';
import { ThemedText } from '../themed-text';
import { ThemedView } from '../themed-view';

type NamedEntryProps = {
  name: string;
  nameSize?: number | null;
  entry: React.ReactNode;
  entrySize?: number | null;
};

type SizeProps = {
  size?: number | null;
};

const NamedEntry = ({
  name,
  entry,
  nameSize = null,
  entrySize = null,
}: NamedEntryProps) => {
  return (
    <ThemedView>
      <Name size={nameSize}>{name}</Name>
      <Entry size={entrySize}>
        <ThemedText type="default">{entry}</ThemedText>
      </Entry>
    </ThemedView>
  );
};

const Name = styled(ThemedText)<SizeProps>`
  opacity: 0.5;
  font-size: ${({ size }) => size || 32};
`;

const Entry = styled(ThemedView)<SizeProps>`
  padding-left: 1rem;
`;

export default NamedEntry;
