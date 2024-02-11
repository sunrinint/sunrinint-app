import React from 'react';
import NoticeIcon from '@/assets/icons/notice.svg';
import styled, { useTheme } from 'styled-components/native';
import Typography from '../typography';

const NoticeCard = () => {
  const { colors } = useTheme();
  return (
    <NoticeCardLayout>
      <NoticeRow>
        <IconBox>
          <NoticeIcon fill={colors.gray90} />
        </IconBox>
        <Typography.SemiBody $color={colors.gray90}>
          2023 선린제 개최 및 안내
        </Typography.SemiBody>
      </NoticeRow>
    </NoticeCardLayout>
  );
};

const NoticeRow = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const IconBox = styled.View`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const NoticeCardLayout = styled.View`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;

  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray30};
  background: ${(props) => props.theme.colors.gray10};
`;

export default NoticeCard;
