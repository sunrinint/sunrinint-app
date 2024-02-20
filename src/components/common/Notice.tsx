import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import Typography from '../typography';
import ArrowDown from '@assets/icons/down.svg';

interface NoticeProps {
  title: string;
  content: string;
  date: string;
}

const Notice = ({ title, content, date }: NoticeProps) => {
  const { colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NoticeLayout onPress={() => setIsOpen(!isOpen)}>
      <NoticeTop>
        <NoticeTopLeft>
          <Typography.SemiLabel $color={colors.gray90}>
            {title}
          </Typography.SemiLabel>
          <Typography.Caption $color={colors.gray60}>{date}</Typography.Caption>
        </NoticeTopLeft>
        <IconBox>
          <ArrowDown fill={colors.gray80} />
        </IconBox>
      </NoticeTop>
      {isOpen ? (
        <Typography.Body $color={colors.gray80}>{content}</Typography.Body>
      ) : (
        <></>
      )}
    </NoticeLayout>
  );
};

const NoticeTopLeft = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`;

const IconBox = styled.View`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const NoticeLayout = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  background: ${({ theme }) => theme.colors.gray10};
`;

const NoticeTop = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

export default Notice;
