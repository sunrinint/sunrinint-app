import styled from 'styled-components/native';

interface ContainerProps {
  gap?: number;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  fill?: boolean;
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  padding?: [number, number] | [number];
}

export const Column = styled.View<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => `${props.gap || 0}`}px;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  // eslint-disable-next-line prettier/prettier
  padding: ${(props) =>
    `${props.padding ? props.padding[0] : 0}px ${
      props.padding ? props.padding[1] || props.padding[0] : 0
    }`}px;
`;

export const Row = styled.View<ContainerProps>`
  display: flex;
  flex-direction: row;
  ${(props) => props.fill && 'width: 100%'};
  gap: ${(props) => `${props.gap || 0}`}px;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  padding: ${(props) => `${props.padding ? props.padding[0] : 0}`}px
    ${(props) => `${props.padding || [1] || [0] || 0}`}px;
`;
