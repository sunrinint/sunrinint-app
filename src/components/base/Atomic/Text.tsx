import styled from 'styled-components/native';

interface TextProps {
  size?: number;
  weight?: number;
  lineHeight?: number | string;
  color?: string;
}

export const Text = styled.Text<TextProps>`
  font-family: 'SUIT';
  font-weight: ${(props) => `${props.weight || 500}`};
  font-size: ${(props) => `${props.size || 14}`}px;
  line-height: ${(props) =>
    typeof props.lineHeight === 'number'
      ? `${props.lineHeight}px`
      : props.lineHeight || '140%'};
  color: ${(props) => props.color || '#000000'};
`;
