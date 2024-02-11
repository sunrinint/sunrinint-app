import { ViewProps } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

interface CardProps extends ViewProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <CardLayout>{children}</CardLayout>;
};

const CardLayout = styled.View`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray30};
  background: ${(props) => props.theme.colors.gray10};
  align-self: stretch;
`;

export default Card;
