import styled from 'styled-components/native';

interface SkeletonContentProps {
    $width?: number;
    $height?: number;
}

export const SkeletonContent = styled.View<SkeletonContentProps>`
    background-color: ${({ theme }) => theme.colors.gray20};
    border-radius: 100px;
    width: ${(props) => (props.$width ? `${props.$width}px` : '100%')};
    height: ${(props) => (props.$height ? `${props.$height}px` : 'auto')};
`;
