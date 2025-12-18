import { type FlexProps } from '@/app/types/FlexProps';
import styled from 'styled-components/native';

const Row = styled.View<FlexProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  gap: ${({ gap }) => `${gap || 0.5}rem`};
`;

export default Row;
