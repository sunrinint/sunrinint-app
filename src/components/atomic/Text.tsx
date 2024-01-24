import styled from 'styled-components/native';

interface TextProps {
  $size?: number;
  $weight?: number;
  $lineHeight?: number;
  $color?: string;
}

export const Text = styled.Text<TextProps>`
    font-family: 'SUIT';
    font-weight: ${(props) => `${props.$weight || 500}`};
    font-size: ${(props) => `${props.$size || 14}`}px;
    line-height: ${(props) => props.$lineHeight ? `${props.$lineHeight}px` : 'auto'};
    color: ${(props) => props.$color || '#000000'};
`;
