import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import ArrowRight from '@assets/icons/arrow_right.svg';

const CardContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray30};
  background: ${(props) => props.theme.colors.gray10};
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface CardTopProps {
  IsArrowRightShow?: boolean;
  children: React.ReactNode;
}

const CardTop = ({ children, IsArrowRightShow=true }: CardTopProps) => {
  const { colors } = useTheme();
  return (
    <CardTopLayout>
      {children}
      <IconBox>
        {IsArrowRightShow && (
          <ArrowRight fill={colors.gray60} />
        )}
      </IconBox>
    </CardTopLayout>
  );
};

const IconBox = styled.View`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const CardTopLayout = styled.View`
  align-self: stretch;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const CardMain = {};

export const Card = Object.assign(CardMain, {
  CardContainer,
  CardTop,
});
