import styled from 'styled-components/native';

interface SpacerProps {
  $width?: number;
  $height?: number;
  $flex?: number;
}

export const Spacer = styled.View<SpacerProps>`
  width: ${(props) => `${props.$width || 0}px`};
  height: ${(props) => `${props.$height || 0}px`};
  flex: ${(props) => props.$flex || 'none'};
`;
