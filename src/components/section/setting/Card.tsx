import React from 'react';
import styled from 'styled-components/native';
import Typography from '@components/typography';
import { useTheme } from 'styled-components';

interface CardProps {
  title: string;
  context: string;
}

const Card = ({ title, context }: CardProps) => {
  const { colors } = useTheme();
  return (
    <Container>
      <Typography.Body $color={colors.gray80}>{title}</Typography.Body>
      <Typography.Body $color={colors.gray60}>{context}</Typography.Body>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export default Card;
