import styled from 'styled-components/native';

type Align = 'center' | 'flex-start' | 'flex-end';

interface ContainerProps {
  $gap?: number;
  $justifyContent?: Align | 'space-between';
  $fill?: boolean;
  $alignItems?: Align;
  $padding?: [number, number] | [number];
  $wrap?: boolean;
  $backgroundColor?: string;
  $width?: number;
  $height?: number;
}

const base = styled.View<ContainerProps>`
    display: flex;
    gap: ${props => props.$gap || 0}px;
    justify-content: ${props => props.$justifyContent || 'flex-start'};
    align-items: ${props => props.$alignItems || 'flex-start'};
    padding: ${props =>
            `${props.$padding ? props.$padding[0] : 0}px ${
                    props.$padding ? props.$padding[1] ?? props.$padding[0] : 0
            }px`};
    flex-wrap: ${props => (props.$wrap ? 'wrap' : 'nowrap')};
    background-color: ${props => props.$backgroundColor || 'transparent'};
    width: ${props => (props.$fill ? '100%' : 'auto')};
    height: ${props => (props.$height ? `${props.$height}px` : 'auto')};
`;

export const Column = styled(base)`
    flex-direction: column;
`;
export const Row = styled(base)`
    flex-direction: row;
`;
